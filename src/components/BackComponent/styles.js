import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;

  left: 20px;
  top: 30px;

  background-color: ${({ theme }) => theme.colors.secundary };
  border-radius: 50px;

  justify-content: center;
  align-items: center;

  z-index: 999;
`;
