import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Map_View, { Marker, Callout } from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const MapView = styled(Map_View)`
  width: ${Dimensions.get('window').width}px;
  height: 100%;
`;


export const MarkerComponent = styled(Marker)`
`;
export const CalloutComponent = styled(Callout)`
  width: 250px;
  height: 200px;

  justify-content: center;
  align-items: center;
`;

export const Tooltip = styled.View`
  width: 90%;
  height: 100%;

  padding: 10px;
  elevation: 50;

  background: ${({ theme }) => theme.colors.secundary};
  /* border: 1px solid #f00; */
  border-radius: 10px;
`;

export const Bubble = styled.View`
  width: 10px;
  height: 10px;
  background-color: rgba(255, 92, 77, 0.6);

  /* border: 2px solid rgba(255, 0, 0, 0.8); */
  border-radius: 50000px;
`;

export const Text = styled.Text`
  min-width: 100%;
  font-size: ${({ title, subtitle }) => title ? 18 : subtitle ? 12 : 14}px;
  font-weight: ${({ title }) => title ? 'bold' : '500'};
  line-height: 22px;

  margin-bottom: ${({ subtitle }) => subtitle ? 20 : 0 }px;
  font-style: ${({ subtitle }) => subtitle ? 'italic' : 'normal' };

  color: ${({ featured, theme }) => featured ? theme.colors.primary : theme.colors.text };
`;