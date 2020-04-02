import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
    height: 44px;
    margin-bottom: 10px;
    padding: 6px;

    background-color: ${({ theme }) => theme.colors.secundary };
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.tertiary };

    flex-direction: column;
    /* justify-content: flex-start */
    justify-content: flex-start;
    align-items: ${({ extend }) => extend ? 'center': 'flex-start' };
`;

export const Header = styled.TouchableOpacity`
    /* flex: 1; */
    width: 90%;
    max-width: 90%;
    height: 44px;

    /* background-color: ${({ theme }) => theme.colors.primary }; */

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Body = styled.View`
    flex: 1;
    width: 100%;
    max-width: 100%;
    height: 44px;

    /* background-color: ${({ theme }) => theme.colors.primary }; */

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Row = styled.TouchableOpacity`
    position: relative;
    /* width: 100%; */
    /* height: 100%; */
    padding-bottom: 22px;

    /* background-color: ${({ theme }) => theme.colors.primary }; */

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.TouchableOpacity`
    position: relative;
    /* width: 100%; */
    /* height: 100%; */
    margin-bottom: -30px;

    /* background-color: ${({ theme }) => theme.colors.primary }; */

    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.Text`
    flex-basis: auto;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 16px;
    line-height: 44px;
    color: #333;
`;

export const Flag = styled.Image`
    width: 34px;
    height: 34px;

    resize-mode: center;

    border-radius: 10px;
`;
