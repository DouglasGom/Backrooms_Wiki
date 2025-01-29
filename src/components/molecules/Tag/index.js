import React from "react";
import { TagContainer } from "./styles";
import { CustomText } from "../../atoms";

export const Tag = ({children, ...props}) => (
    <TagContainer{...props}>
        <CustomText style={{fontFamily: 'Bold'}} size={14}>{children}</CustomText>
    </TagContainer>
)