import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ActivityIndicator,
} from 'react-native';

import api from '../../services/api';

import { Container, ButtonCountries, ButtonCountriesText } from './styles';

import OutbreakInfo from '../../components/OutbreakInfo';

function Main() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    loadData();
  }, [route.params]);

  async function loadData() {
    if (!route.params || !route.params.outbreakData) {
      setData(null);
      setLoading(true);
      const response = await api.get('/all');
      const a = await api.get('/countries');
      console.log(a);
      
      setData(response.data);
      setLoading(false);
    } else {
      setData(route.params.outbreakData);
    }
  }

  function navigateToCountriesList() {
    navigation.navigate('CountriesList');
  }

  return (
    <Container>
      {data && <OutbreakInfo outbreakData={data} />}
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ButtonCountries
          onPress={navigateToCountriesList}
        >
          <ButtonCountriesText>Show Countries List</ButtonCountriesText>
        </ButtonCountries>
      )}      
    </Container>
  );
}

export default Main;
