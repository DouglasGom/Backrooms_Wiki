import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    alignItems: center;
    justifyContent: center;
    height: ${({theme}) => theme.metrics.px(43)}px;
    width: ${({theme}) => theme.metrics.px(100)}px;
    border-radius: ${({theme}) => theme.metrics.px(8)}px;
    background-color: ${({theme}) => theme.colors.white};
`;