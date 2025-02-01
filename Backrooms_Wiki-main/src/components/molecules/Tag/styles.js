import styled from "styled-components/native";

export const TagContainer = styled.View`
    display: flex;
    alignItems: center;
    justifyContent: center;
    background-color: ${({theme}) => theme.colors.orange};
    height: ${({theme}) => theme.metrics.px(24)}px;
    width: auto;
    padding-horizontal: ${({theme}) => theme.metrics.px(6)}px;
    border-radius: ${({theme}) => theme.metrics.px(24)}px;
    max-width: ${({theme}) => theme.metrics.px(80)}px;
    marginTop: ${({theme, mt}) => theme.metrics.px(mt || 0)};
    marginBottom: ${({theme, mb}) => theme.metrics.px(mb || 0)};
    marginLeft: ${({theme, ml}) => theme.metrics.px(ml || 0)};
    marginRight: ${({theme, mr}) => theme.metrics.px(mr || 0)};
`