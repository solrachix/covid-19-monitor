import styled from 'styled-components/native';

export const Container = styled.View`
  min-width: 40%;
  width: 40%;
  height: 200px;
  padding-left: 20px;
  
  background-color: ${({ theme }) => theme.colors.secundary };
  border-radius: 10px;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  /* elevation: 5; */
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;

  /* background-color: ${({ theme }) => theme.colors.primary }; */
`;

export const Column = styled.View`
  width: 60%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Color = styled.View`
  width: 20px;
  height: 6px;
  margin-top: 5%;
  margin-right: 5%;

  border-radius: 5px;
`;

export const Value = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text };
  font-size: 12px;
  text-align: justify;
`;

