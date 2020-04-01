import React from 'react';
import { View, Text as TextRN } from 'react-native';
//import { Text, Circle, G, Line } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';

//import round10 from '../utils/decimalRound';

const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

function PieChartRender({ data }) {
  const colors = ['#ffa500', '#008000', '#ff0000'];

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

  /*const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={16}
          stroke={'black'}
          strokeWidth={0.2}
        >
          {`${round10((data.value / amount) * 100, -2)}%`}
        </Text>
      );
    });
  };

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <G key={index}>
          <Line
            x1={labelCentroid[0]}
            y1={labelCentroid[1]}
            x2={pieCentroid[0]}
            y2={pieCentroid[1]}
            stroke={data.svg.fill}
          />
          <Circle
            cx={labelCentroid[0]}
            cy={labelCentroid[1]}
            r={18}
            fill={data.svg.fill}
          />
          <Text
            key={index}
            x={labelCentroid[0]}
            y={labelCentroid[1]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={10}
            stroke={'black'}
            strokeWidth={0.2}
          >
            {`${round10((data.value / amount) * 100, -2)}%`}
          </Text>
        </G>
      );
    });
  };*/

  return (
    <View style={{ justifyContent: 'center' }}>
      <PieChart style={{ height: 200 }} innerRadius={70} data={pieData}>
        {/* <Labels /> */}
        <TextRN
          style={{
            textAlign: 'center',
            color: '#FFF',
            fontSize: 24,
            lineHeight: 200
          }}
        >
          {formatNumber(amount)}
        </TextRN>
      </PieChart>
    </View>
  );
}

export default PieChartRender;
