import styled from "styled-components/native";

export const GoBackContainer = styled.TouchableOpacity`
    position: absolute;
    top: ${({theme}) => theme.metrics.px(54)}px;
    padding-left: ${({theme}) => theme.metrics.px(24)}px;

`;
