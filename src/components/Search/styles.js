import styled from 'styled-components/native';
import icon from '@expo/vector-icons/Ionicons';

export const Container = styled.View`
  width: 90%;

  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 44px;
  padding-left: 20px;
  padding-right: 50px;
  margin-bottom: 15px;

  background-color: ${({ theme }) => theme.colors.tertiary };
  color: ${({ theme }) => theme.colors.text };
  border-radius: 50px;

  font-size: 16px;
`;

export const ContainerIcon = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  margin-left: -45px;

  background-color: ${({ theme }) => theme.colors.primary };
  border-radius: 50px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(icon)`
  color: ${({ theme }) => theme.colors.secundary };
`;