import React from "react";
import {HeroContainer, HeroImageBackground, HeroGradient, ButtonsView} from './styles';
import { Tag, IconButton, ReadButton } from "../../molecules"; 
import {colors} from '../../../styles/colors'
import { CustomText, Logo_Simples } from "../../atoms";

export const Hero = ({item, withoutLogo }) => {
    const {image_url, title, subtitle, type} = item;
    return(
    <HeroContainer>
        <HeroImageBackground source={{uri: image_url}}>
        
            <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
                {
                    !withoutLogo && <Logo_Simples/>
                }
                <Tag mt={withoutLogo ? 240 : 150}>{type}</Tag>
                <CustomText style={{fontFamily: 'Regular'}}size="28" mt={12}>{title}</CustomText>
                <CustomText style={{fontFamily: 'Regular'}}size="18">{subtitle}</CustomText>
              
                <ButtonsView>
                    <IconButton label="Favoritos" iconName="add-circle-outline"/>
                    
                    {
                    !withoutLogo && (
                        <ReadButton />
                        
                    )
                    }

                    {
                    !withoutLogo && (
                        <IconButton label="Saiba Mais" iconName="information-circle-outline"/>
                        
                    )
                    }
                </ButtonsView>
            
            </HeroGradient>
        </HeroImageBackground>
    </HeroContainer>
        )   
}
