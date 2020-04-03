import React from 'react';

import Icon from '@expo/vector-icons/Ionicons'

import { Container } from './styles';

export default function BackComponent({ navigation, ...props}) {
  
  return (
    <Container onPress={()=> navigation.goBack()} {...props}>
      <Icon name='ios-arrow-round-back' size={40} color="#666"/>
    </Container>
  )
}
