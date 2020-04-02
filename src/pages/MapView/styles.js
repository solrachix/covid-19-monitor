import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Map_View from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MapView = styled(Map_View)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;
