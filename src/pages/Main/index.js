import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';

import api from '../../services/api';

import Lottie from 'lottie-react-native';
import StayAtHome from '../../assets/StayAtHome.json';

import { Container, ButtonCountries, ButtonCountriesText, CardContainer, MiniCard } from './styles';

import OutbreakInfo from '../../components/OutbreakInfo';
import {CardPanel} from '../../components/Panel';

function Main() {
  const [data, setData] = useState();
  const [ cardPanel, setCardPanel ] = useState([]);
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
      const { active, recovered, deaths, affectedCountries } = response.data;

      setCardPanel([recovered, active, deaths, affectedCountries]);
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

      {data && 
        <OutbreakInfo outbreakData={data}>
          
          <CardPanel data={cardPanel} />

          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <ButtonCountries
              onPress={navigateToCountriesList}
            >
              <ButtonCountriesText>Show Countries List</ButtonCountriesText>
            </ButtonCountries>
          )} 
        </OutbreakInfo>
      }
           
    </Container>
  );
}

export default Main;
