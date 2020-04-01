import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, ButtonCountries, ButtonCountriesText } from './styles';

import AxesChartRender from '../../components/AxesChartRender';

function Linechart() {
  const [data, setData] = useState();

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    loadData();
  }, [route.params]);

  async function loadData() {
    setData(route.params.outbreakData);
  }

  function navigateToCountriesList() {
    navigation.navigate('CountriesList');
  }

  return (
    <Container style={styles.container}>
      <ButtonCountries
        style={styles.buttonCountries}
        onPress={navigateToCountriesList}
      >
        <ButtonCountriesText style={styles.buttonCountriesText}>Show Countries List</ButtonCountriesText>
      </ButtonCountries>
      {data && <AxesChartRender outbreakData={data} />}
    </Container>
  );
}

export default Linechart;
