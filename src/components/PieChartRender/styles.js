import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    line-height: 200px;
`;
