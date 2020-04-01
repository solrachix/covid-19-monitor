import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import {
  ActivityIndicator,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import api from '../services/api';

import Panel from './Panel';

function AxesChart() {
  const [casesValues, setCasesValues] = useState([]);
  const [dates, setDates] = useState([]);
  const [dateOffset, setDateOffset] = useState([]);

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const countryData = route.params.outbreakData;

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const response = await api.get(`/v2/historical/${countryData.country}`);

      const { cases, deaths } = response.data.timeline;

      const casesValues = Object.values(cases);
      const deathsValues = Object.values(deaths);

      setCasesValues(casesValues);
      setDates(
        Object.keys(cases).map(date => {
          const dateArray = date.split('/');

          const month = ('0' + dateArray[0]).slice(-2);
          const day = ('0' + dateArray[1]).slice(-2);

          return `${month}/${day}`;
        })
      );

      setData([
        {
          data: deathsValues,
          svg: { stroke: 'red' }
        },
        {
          data: casesValues,
          svg: { stroke: 'orange' }
        }
      ]);

      setDateOffset(Math.floor(casesValues.length / 8));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;

  return (
    <>
      <View>
        <Text style={styles.dataSourceDetails}>Data sources from: </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WebViewRender', {
              url: 'https://github.com/NOVELCOVID/API'
            });
          }}
        >
          <Text style={styles.dataSourceReferenceLink}>
            https://github.com/NOVELCOVID/API
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countryInfo}>
        <Image
          style={styles.countryFlag}
          source={{ uri: countryData.countryInfo.flag }}
        />
        <Text style={styles.countryName}>{countryData.country}</Text>
      </View>
      <View style={styles.minPanel}>
        <View style={styles.row}>
          <Text style={styles.text}>Today Cases:</Text>
          <Text style={{ ...styles.value, color: 'orange' }}>
            {countryData.todayCases}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Today Deaths:</Text>
          <Text style={{ ...styles.value, color: 'red' }}>
            {countryData.todayDeaths}
          </Text>
        </View>
      </View>
      <View style={styles.lineCharContainer}>
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <>
            <YAxis
              data={casesValues}
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <LineChart
                style={{ flex: 1 }}
                data={data}
                contentInset={verticalContentInset}
              >
                <Grid />
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10, height: xAxisHeight }}
                data={casesValues}
                formatLabel={(value, index) => {
                  if (dateOffset && (index + 7) % dateOffset === 0) {
                    return dates[index];
                  }

                  return '';
                }}
                contentInset={{ left: 10, right: 10 }}
                svg={axesSvg}
              />
            </View>
          </>
        )}
      </View>
      <Panel
        data={[countryData.active, countryData.recovered, countryData.deaths]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  countryInfo: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  countryFlag: {
    width: 35,
    height: 35,
    resizeMode: 'center',
    marginRight: 10
  },
  countryName: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 35
  },
  dataSourceDetails: {
    fontSize: 15,
    color: '#48C9B0',
    textAlign: 'center'
  },
  dataSourceReferenceLink: {
    fontSize: 15,
    color: '#52BE80',
    textAlign: 'center',
    marginBottom: 10
  },
  minPanel: {
    height: 60,
    backgroundColor: '#212F3D',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lineCharContainer: {
    height: 200,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default React.memo(AxesChart);
