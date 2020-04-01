import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import round10 from '../utils/decimalRound';

const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

function Panel({ data }) {
  const colors = ['#ffa500', '#008000', '#ff0000'];
  const occasions = ['Active', 'Recovered', 'Deaths'];

  const amount = data.reduce((total, value) => total + value, 0);

  return (
    <View style={styles.panel}>
      {data.map((value, index) => (
        <View key={index}>
          <Text style={{ ...styles.value, color: colors[index] }}>
            {formatNumber(value)}
          </Text>
          <Text
            style={{ ...styles.text, color: colors[index], marginBottom: 5 }}
          >{`${round10((value / amount) * 100, -2)}%`}</Text>
          <Text style={styles.text}>{occasions[index]}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    height: 100,
    backgroundColor: '#212F3D',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default Panel;
