import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';

import api from '../../services/api';

import Lottie from 'lottie-react-native';
import StayAtHome from '../../assets/StayAtHome.json';

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
    <Container contentContainerStyle={{
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}>
      {/* <Lottie style={{ backgroundColor: "#f00"}} source={StayAtHome} autoPlay autoSize resizeMode="contain" loop /> */}

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
