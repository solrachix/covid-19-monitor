import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.secundary };
  justify-content: space-evenly;
`;

export const ButtonCountries = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secundary };
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonCountriesText = styled.Text`
  color: ${({ theme }) => theme.colors.text };
  text-align: center;
  font-size: 18px;
`;
