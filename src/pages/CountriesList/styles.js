import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* padding: 15px; */
  background-color: ${({ theme }) => theme.colors.secundary };
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList`
  width: 100%;
`;