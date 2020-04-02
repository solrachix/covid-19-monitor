import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
    height: 44px;
    margin-bottom: 10px;
    padding: 10px;

    background-color: ${({ theme }) => theme.colors.secundary };
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.tertiary };

    flex-direction: row;
    justify-content: space-between;
    align-items: ${({ extend }) => extend ? 'center': 'flex-start' };
`;

export const Row = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const Name = styled.Text`
    flex-basis: auto;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 16px;
    line-height: 44px;
    color: #333
`;

export const Flag = styled.Image`
    width: 34px;
    height: 34px;

    resize-mode: center;

    border-radius: 10px;
`;
