import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

import Panel from '../Panel';
import PieChartRender from '../PieChartRender';

import { Container, Header, Text, CountryInfo, CountryName, CountryFlag } from './styles';

function OutbreakInfo({ outbreakData }) {
  const [data, setData] = useState();
  const [lastUpdate, setLastUpdate] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    loadSummary();
  }, [outbreakData]);

  async function loadSummary() {
    const { active, recovered, deaths, updated } = outbreakData;

    setData([active, recovered, deaths]);

    if (updated) {
      const date = new Date(updated);
      const day = date.getDate();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();
      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const seconds = ('0' + date.getSeconds()).slice(-2);

      setLastUpdate(`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);
    } else {
      setLastUpdate('');
    }
  }
  console.log(Intl.getCanonicalLocales())
  return (
    <Container>      
      <Header>
        <Text>Data sources from: </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WebViewRender', {
              url: 'https://github.com/NOVELCOVID/API'
            });
          }}
        >
          <Text Featured>
            https://github.com/NOVELCOVID/API
          </Text>
        </TouchableOpacity>
        {lastUpdate.length > 0 && (
          <Text>
            Last update: 
            <Text Featured>{lastUpdate}</Text>
          </Text>
        )}
      </Header>

      {outbreakData.countryInfo && (
        <CountryInfo>
          <CountryFlag
            style={styles.countryFlag}
            source={{ uri: outbreakData.countryInfo.flag }}
          />
          <CountryName>{outbreakData.country}</CountryName>
        </CountryInfo>
      )}
      {data && <PieChartRender data={data} />}
      {data && <Panel data={data} />}
    </Container>
  );
}

export default OutbreakInfo;