import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Map_View, { Marker, Callout } from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MapView = styled(Map_View)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;


export const MarkerComponent = styled(Marker)`
`;
export const CalloutComponent = styled(Callout)`
`;

export const Bubble = styled.View`
  width: 10px;
  height: 10px;
  background-color: rgba(255, 92, 77, 0.4);

  /* border: 2px solid rgba(255, 0, 0, 0.8); */
  border-radius: 50000px;
`;