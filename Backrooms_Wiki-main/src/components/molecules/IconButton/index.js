import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ButtonContainer } from "./styles";
import { Text } from "@react-navigation/elements";
import { CustomText } from "../../atoms";
import { theme } from "../../../styles/theme";

export const IconButton = ({ iconName, label, onPress}) => {
    return(
        <ButtonContainer onPress={onPress}>
            <Ionicons  name={iconName} size={theme.metrics.px(24)} color={theme.colors.white}/>
            <CustomText style={{fontFamily: 'Fraca'}} size={10} mt={6}>{label}</CustomText>
        </ButtonContainer>
    )
}