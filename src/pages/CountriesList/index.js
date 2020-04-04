import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, List } from './styles';

import CountryInfo from '../../components/CountryInfo';
import Search from '../../components/Search';

import World from '../../assets/world.svg';

function CountriesList() {
  const [allCountriesList, setAllCountriesList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    loadCountries();
  }, []);

  async function loadCountries() {
    try {
      setLoading(true);
      const response = await api.get('/countries');

      const countries = response.data;

      const countriesSortedByCasesDesc = countries
        .sort((countryA, countryB) => countryB.cases - countryA.cases)
        .map((item, index) => ({ ...item, position: index + 1 }))
        .filter((obj) => obj.country != 'World');
      
      setAllCountriesList(countriesSortedByCasesDesc);
      setCountriesList(countriesSortedByCasesDesc);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function filterCountriesByName(name) {
    setSearch(name);

    const countriesFiltered = allCountriesList.filter(item =>
      item.country.includes(name)
    );

    setCountriesList(countriesFiltered);
  }

  function navigateToMapView(countryInfo) {
    navigation.navigate('MapView', { allCountriesList, selectedCountry: countryInfo });
  }

  return (
    <Container>
      <StatusBar hidden />
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Search
            placeholder="Search"
            autoCapitalize="words"
            autoCorrect={false}
            value={search}
            onChangeText={filterCountriesByName}
          />
          <List
            data={countriesList}
            keyExtractor={item => String(item.position)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CountryInfo countryData={item} onPress={navigateToMapView} />}
          />
        </>
      )}
    </Container>
  );
}

export default CountriesList;
