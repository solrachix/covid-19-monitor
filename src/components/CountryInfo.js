import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import PieChart from '../assets/pie-chart.svg';
import LineChart from '../assets/line-chart.svg';

function CountryInfo({ countryData }) {
  const { active, cases, recovered, deaths } = countryData;
  const amount = active + recovered + deaths;

  const navigation = useNavigation();

  function navidateToMain(data) {
    navigation.navigate('Main', { outbreakData: data });
  }

  function navidateLineChart(data) {
    navigation.navigate('LineChart', { outbreakData: data });
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemInfoContainer}>
        <View style={styles.row}>
          <Text style={styles.index}>{countryData.position}</Text>
          <Image
            style={styles.flag}
            source={{ uri: countryData.countryInfo.flag }}
          />
          <Text style={styles.itemName}>
            {countryData.country.length > 14
              ? `${countryData.country.substr(0, 14)}...`
              : countryData.country}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.itemConfirmedValue}>{cases}</Text>
          <TouchableOpacity
            style={styles.chartButton}
            onPress={() => navidateToMain(countryData)}
          >
            <PieChart style={styles.chartIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chartButton}
            onPress={() => navidateLineChart(countryData)}
          >
            <LineChart style={styles.chartIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View
          style={{
            backgroundColor: '#ffa500',
            height: 1,
            flex: amount ? active / amount : 0.001
          }}
        ></View>
        <View
          style={{
            backgroundColor: '#008000',
            height: 1,
            flex: amount ? recovered / amount : 0.001
          }}
        ></View>
        <View
          style={{
            backgroundColor: '#ff0000',
            height: 1,
            flex: amount ? deaths / amount : 0.001
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 44,
    backgroundColor: '#212F3D',
    marginBottom: 10
  },
  itemInfoContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flag: {
    width: 35,
    height: 35,
    resizeMode: 'center'
  },
  index: {
    width: 28,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 44,
    color: '#FFF',
    textAlign: 'center'
  },
  itemName: {
    flexBasis: 'auto',
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 44,
    color: '#FFF'
  },
  itemConfirmedValue: {
    fontSize: 16,
    lineHeight: 44,
    color: '#ffa500'
  },
  chartButton: {
    width: 26,
    height: 26,
    backgroundColor: '#1A5276',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 5
  },
  chartIcon: { width: 20, height: 20 },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default React.memo(CountryInfo);
