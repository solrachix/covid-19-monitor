import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

import transformDate from '../../utils/transformDate';

import Panel from '../Panel';
import PieChartRender from '../PieChartRender';

import { Container, Header, Text, Title, CountryInfo, CountryName, CountryFlag } from './styles';

function OutbreakInfo({ children, outbreakData }) {
  const [data, setData] = useState();
  const [lastUpdate, setLastUpdate] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    loadSummary();
  }, [outbreakData]);

  async function loadSummary() {
    const { active, recovered, deaths, updated } = outbreakData;

    setData([active, recovered, deaths]);
    setLastUpdate(transformDate(updated));
  }
  return (
    <Container>      
      <Header>
        <Title>
          Global Cases
        </Title>
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
      {data && 
        <PieChartRender data={data}>
          <Panel data={data} />
        </PieChartRender>
      }
      {/* {data && <Panel data={data} />} */}

      { children }
      
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
            Last update: &nbsp;
            <Text Featured>{lastUpdate}</Text>
          </Text>
        )}
      </Header>

    </Container>
  );
}

export default OutbreakInfo;