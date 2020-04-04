import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'

import round10 from '../../utils/decimalRound';

import { Container, Content, Text, Value, Column, Color, CardPanelContainer, MiniCard, Row } from './styles';

const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

export default function Panel({ data }) {
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


export function CardPanel({ data }) {
  const themeContext = useContext(ThemeContext).colors;
  const colors = [themeContext.blue, themeContext.primary, themeContext.red, themeContext.primary];
  const occasions = ['Recovered', 'Active', 'Deaths', 'Affected countries'];
  
  const amount = data.reduce((total, value) => total - 1 + value, 0);

  return (
    <CardPanelContainer>

      {data.map((value, index) => occasions[index] == 'Affected countries' ? (
        <MiniCard key={index}>
          <Row>
            <Text>{occasions[index]}</Text>
          </Row>
          <Row>
            <Value style={{ color: themeContext.text }}>
              {formatNumber(value)}
            </Value>
          </Row> 
        </MiniCard>
      ) : (
        <MiniCard key={index}>
          <Row>
            <Color style={{ backgroundColor: colors[index], borderRadius: 0, width: 10, height: 10, marginTop: 0 }} />
            <Text>{occasions[index]}</Text>
          </Row>
          <Row>
            <Value style={{ color: colors[index] }}>
              {formatNumber(value)}
            </Value>

            <Text
                style={{ color: colors[index], marginBottom: 5 }}
              >({`${round10((value / amount) * 100, -2)}%`})</Text>
          </Row> 
        </MiniCard>
      ))}

    </CardPanelContainer>
  );
}