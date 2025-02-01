import React, { useState } from "react";
import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from './styles';
import { Tag, IconButton, ReadButton } from "../../molecules";
import { colors } from '../../../styles/colors';
import { CustomText, Logo_Simples } from "../../atoms";
import { useDataStore } from "../../../services/stores";
import { FloatingPopup } from "../../molecules";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet } from "react-native";


export const Hero = ({ item, withoutLogo }) => {
    const { favorites, addFavorite, setSelectedData } = useDataStore();
    const [popupMessage, setPopupMessage] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    const navigation = useNavigation();

    // Verifica se o nível está nos favoritos
    const isFavorite = favorites.some(fav => fav.id === item.id);

    const showPopup = (message) => {
        setPopupMessage(message);
        setPopupVisible(true);
    };

    const handleAddFavorite = () => {
        if (item && item.id && !isFavorite) {
            addFavorite(item);
            showPopup("Favorito adicionado!");
        } else {
            showPopup("Este item já está nos favoritos!");
        }
    };

    const handleReadMore = () => {
        setSelectedData(item);
        navigation.navigate("Detail");
    };

    // Mapeamento das dificuldades (somente se `withoutLogo` for verdadeiro)
    const difficultyImages = {
        0: require('../../../../assets/Difficulties/dificuldade0.png'),
        1: require('../../../../assets/Difficulties/dificuldade1.png'),
        2: require('../../../../assets/Difficulties/dificuldade2.png'),
        3: require('../../../../assets/Difficulties/dificuldade3.png'),
        4: require('../../../../assets/Difficulties/dificuldade4.png'),
        5: require('../../../../assets/Difficulties/dificuldade5.png'),
        6: require('../../../../assets/Difficulties/dificuldade6.png'),
        7: require('../../../../assets/Difficulties/dificuldade7.png'),
        8: require('../../../../assets/Difficulties/dificuldade8.png'),
        9: require('../../../../assets/Difficulties/dificuldade9.png'),
    };

    return (
        <HeroContainer>
            <HeroImageBackground source={{ uri: item?.image_url || '' }}>
                <HeroGradient colors={[colors.dark, "transparent", colors.dark]}>
                    {!withoutLogo && <Logo_Simples />}

                    {/* Exibe o tipo (Nível ou Entidade) */}
                    <Tag mt={withoutLogo ? 240 : 150}>{item?.type}</Tag>

                    {/* Exibe o título e subtítulo */}
                    <CustomText style={{ fontFamily: "Regular" }} size={28} mt={12}>{item?.title}</CustomText>
                    <CustomText style={{ fontFamily: "Regular" }} size={18}>{item?.subtitle}</CustomText>

                    {/* Exibe a dificuldade apenas na tela de detalhes */}
                    {withoutLogo && (
                        <View style={styles.difficultyContainer}>
                            <Image source={difficultyImages[item?.difficulty]} style={styles.difficultyImage} />
                        </View>
                    )}

                    <ButtonsView style={withoutLogo ? styles.buttonsAdjusted : null}>
                        <IconButton
                            label="Favoritos"
                            iconName="add-circle-outline"
                            onPress={handleAddFavorite}
                            disabled={isFavorite}
                        />
                        {!withoutLogo && <ReadButton onPress={handleReadMore} />}
                        {!withoutLogo && <IconButton label="Saiba Mais" iconName="information-circle-outline" />}
                    </ButtonsView>

                </HeroGradient>
            </HeroImageBackground>
            <FloatingPopup visible={popupVisible} message={popupMessage} onClose={() => setPopupVisible(false)} />
        </HeroContainer>
    );
};

// Estilos da dificuldade
const styles = StyleSheet.create({
    difficultyContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    difficultyText: {
        fontFamily: "Bold",
        fontSize: 16,
        color: "#fff",
        marginRight: 10,
    },
    difficultyImage: {
        width: 220,
        height: 150,
        resizeMode: "contain",
        marginLeft: 170,
        marginTop: -140
    },
    buttonsAdjusted: {
        marginTop: -10, // Ajuste fino para subir o botão
    }
    
});
