import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  /* flex: 1; */
  margin-bottom: 50px;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: ${({ theme, Featured }) => Featured ? theme.colors.primary : theme.colors.text };
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 24px;
`;

export const CountryInfo = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const CountryFlag = styled.Image`
  width: 35px;
  height: 35px;
  /* resize-mode: center; */
  margin-right: 10px;
`;

export const CountryName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secundary };
  line-height: 35px;
`;