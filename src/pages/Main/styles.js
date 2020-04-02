import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  padding: 15px;

  background-color: ${({ theme }) => theme.colors.secundary };

  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonCountries = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  padding: 10px;
  /* margin: 30px; */

  background-color: ${({ theme }) => theme.colors.primary };
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const ButtonCountriesText = styled.Text`
  color: ${({ theme }) => theme.colors.secundary };
  text-align: center;
  font-size: 18px;
`;
