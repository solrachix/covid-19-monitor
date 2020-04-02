import styled from 'styled-components/native';

export const Container = styled.View`
  min-width: 40%;
  height: 200px;

  background-color: ${({ theme }) => theme.colors.secundary };
  border-radius: 10px;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  elevation: 5;
`;

export const Value = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.Text`
  color: #FFF;
  font-size: 16;
  text-align: center;
`;