import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ButtonContainer } from "./styles";
import { CustomText } from "../../atoms";
import { theme } from "../../../styles/theme";

export const ReadButton = ({ iconName, label, onPress}) => {
    return(
        <ButtonContainer onPress={onPress}>
            <Ionicons  name='book-outline' size={theme.metrics.px(20)} color={theme.colors.black}/>
            <CustomText style={{fontFamily: 'Bold'}} size={10} mt={6} color={theme.colors.black}>Ler Agora</CustomText>
        </ButtonContainer>
    )
}