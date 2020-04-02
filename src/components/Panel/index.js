import React from 'react';
import { View } from 'react-native';

import round10 from '../../utils/decimalRound';

import { Container, Text, Value } from './styles';

const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

function Panel({ data }) {
  const colors = ['#ffa500', '#008000', '#ff0000'];
  const occasions = ['Active', 'Recovered', 'Deaths'];

  const amount = data.reduce((total, value) => total + value, 0);

  return (
    <Container>
      {data.map((value, index) => (

        <View key={index}>
          <Value style={{ color: colors[index] }}>
            {formatNumber(value)}
          </Value>
          <Text
            style={{ color: colors[index], marginBottom: 5 }}
          >{`${round10((value / amount) * 100, -2)}%`}</Text>
          <Text>{occasions[index]}</Text>
        </View>

      ))}
    </Container>
  );
}

export default Panel;
