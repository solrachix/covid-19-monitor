import styled from 'styled-components/native';
import icon from '@expo/vector-icons/Ionicons';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* padding: 15px; */
  background-color: ${({ theme }) => theme.colors.secundary };
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(icon)`

`;

export const GlobalButton = styled.TouchableOpacity`
  width: 15%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.secundary };

  border-radius: 5px;

  justify-content: space-between;
  align-items: center;
`;

