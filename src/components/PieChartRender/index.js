import React from 'react';
import { PieChart } from 'react-native-svg-charts';

import { Container, Title } from './styles';

const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

function PieChartRender({ data, children }) {
  const colors = ['#003CBF', '#06CAFD', '#FF5C4D'];

  const pieData = data.map((value, index) => ({
    value,
    svg: {
      fill: colors[index],
      onPress: () => console.log('press', index)
    },
    key: `pie-${index}`,
    arc: { padAngle: 0 }
  }));

  const amount = data.reduce((total, value) => total + value, 0);

  return (
    <Container>
      <PieChart style={{ width: '60%', height: 200 }} innerRadius={70} data={pieData}>

        <Title>
          {formatNumber(amount)}
        </Title>
        
      </PieChart>
      {children}
    </Container>
  );
}

export default PieChartRender;
