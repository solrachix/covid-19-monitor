import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'

import round10 from '../../utils/decimalRound';

import { Container, Content, Text, Value, Column, Color } from './styles';

const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

function Panel({ data }) {
  const themeContext = useContext(ThemeContext).colors;
  const colors = [themeContext.primary, themeContext.blue, themeContext.red];
  const occasions = ['Active', 'Recovered', 'Deaths'];

  const amount = data.reduce((total, value) => total + value, 0);

  return (
    <Container>
      {data.map((value, index) => (

        <Content key={index}>
          <Color style={{ backgroundColor: colors[index] }} />
          <Column>
            <Text>{occasions[index]}</Text>
            <Text
              style={{ color: colors[index], marginBottom: 5 }}
            >{`${round10((value / amount) * 100, -2)}%`}</Text>
          </Column>

          {/* <Value style={{ color: colors[index] }}>
              {formatNumber(value)}
          </Value> */}
          
        </Content>

      ))}
    </Container>
  );
}

export default Panel;
