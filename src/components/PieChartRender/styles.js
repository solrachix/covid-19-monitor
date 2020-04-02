import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex-direction: column;
    justify-content: center;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const Content = styled.View`
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    height: 300px;
    margin-bottom: 100px;
`;
export const MiniCard = styled.View`
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
    min-width: 45%;
    height: 100px;

    background-color: ${({ theme }) => theme.colors.secundary }

    elevation: 5; 
`;

export const Title = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    line-height: 200px;
`;