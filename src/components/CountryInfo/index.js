import React, { useContext, useState } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import Icon from '@expo/vector-icons/MaterialIcons'

import WithLine from '../Charts/WithLine'
import { Container, Header, Body, Column, Row, Flag, Name } from './styles'

function CountryInfo({ countryData, onPress }) {
  const themeContext = useContext(ThemeContext).colors;
  const navigation = useNavigation();
  const { active, cases, recovered, deaths } = countryData;
  const amount = active + recovered + deaths;

  const animationValue = new Animated.Value(44);
  const [ extend, setExtend ] = useState(true);

  function handlerClick(event){
    if(extend == true){
      Animated.timing(animationValue, {
        toValue : 325,
        timing : 1500
      }).start(()=>{
        setExtend(false)
      });
    }
    else{
      Animated.timing(animationValue, {
        toValue : 44,
        timing : 1500
      }).start(()=>{
        setExtend(true)
      });
    }
  }

  function navidateLineChart(data) {
    navigation.navigate('LineChart', { outbreakData: data });
  }

  return (
    <Container 
      extend      
      style={{ 
        height: animationValue,
      }}
    >
      <Header onPress={handlerClick} >
        <Row >
          <Flag
            source={{ uri: countryData.countryInfo.flag }}
          />
          <Name>
            {countryData.country.length > 14
              ? `${countryData.country.substr(0, 14)}...`
              : countryData.country}
          </Name>
        </Row>

        <Row onPress={() => onPress(countryData.countryInfo)}>
          <Icon name="my-location" size={24} color={themeContext.text}/>
          {/* <WithLine/> */}
        </Row>
      </Header>
      
      {!extend && 
        <Body onPress={handlerClick}>
          <Row onPress={handlerClick}>
            <Column>
              <Name style={{opacity: 0.3}}>Confirmed</Name>
              <Name>74.0011</Name>
            </Column>
            
            <WithLine width="50%" />

            <Column>
              <Name style={{opacity: 0.3}}>+25.6%</Name>
              <Name>+7.005%</Name>
            </Column>
          </Row>

          <Row onPress={handlerClick}>
            <Column>
              <Name style={{opacity: 0.3}}>Recovered</Name>
              <Name>74.0011</Name>
            </Column>
            
            <WithLine width="50%" />

            <Column>
              <Name style={{opacity: 0.3}}>+25.6%</Name>
              <Name>+7.005%</Name>
            </Column>
          </Row>

          <Row onPress={handlerClick}>
            <Column>
              <Name style={{opacity: 0.3}}>Death</Name>
              <Name>74.0011</Name>
            </Column>
            
            <WithLine width="50%" />

            <Column>
              <Name style={{opacity: 0.3}}>+25.6%</Name>
              <Name>+7.005%</Name>
            </Column>
          </Row>
        </Body>   
      }
    </Container>
  );
}

export default React.memo(CountryInfo);