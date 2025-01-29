import styled from "styled-components";

export const TitleText = styled.Text`
    color: ${({color, theme}) => color || theme.colors[color || 'white']};
    fontSize: ${({theme, size}) => theme.metrics.px(size || 24)};
    marginTop: ${({theme, mt}) => theme.metrics.px(mt || 0)};
    marginBottom: ${({theme, mb}) => theme.metrics.px(mb || 0)};
    marginLeft: ${({theme, ml}) => theme.metrics.px(ml || 0)};
    marginRight: ${({theme, mr}) => theme.metrics.px(mr || 0)};

`;