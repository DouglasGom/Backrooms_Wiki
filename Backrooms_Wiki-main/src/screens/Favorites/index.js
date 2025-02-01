import React, { useState } from "react";
import { Image } from "react-native";
import { View, FlatList, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useDataStore } from "../../services/stores";
import { CustomText } from "../../components";
import { FloatingPopup } from "../../components/molecules";
import logo from './../../../assets/Smiler_simples.png';
import { LogoImageFav } from './styles.js';
import { useNavigation } from "@react-navigation/native";

export const FavoritesScreen = () => {
    const { favorites = [], removeFavorite, setSelectedData } = useDataStore();
    const numColumns = 3;
    const [popupMessage, setPopupMessage] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    const navigation = useNavigation();

    const showPopup = (message) => {
        setPopupMessage(message);
        setPopupVisible(true);
    };

    const renderItem = ({ item }) => (
        <View style={styles.cardWrapper}>
            <TouchableOpacity
                style={styles.cardTouchable}
                onPress={() => handleCardPress(item)}
                onLongPress={() => handleRemoveFavorite(item)}
            >
                <View style={styles.cardContainer}>
                    <View style={styles.imageWrapper}>
                        <Image source={{ uri: item.image_url }} style={styles.cardImage} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
    
    // Função de remoção de favorito
    const handleRemoveFavorite = (item) => {
        Alert.alert(
            "Remover Favorito",
            `Deseja remover "${item.title}" dos favoritos?`,
            [
                { text: "Cancelar", style: "cancel" },
                { 
                    text: "Remover", 
                    onPress: () => {
                        removeFavorite(item.id, item.type); // Passa o tipo ao remover
                        showPopup("Favorito removido!");
                    },
                    style: "destructive"
                }
            ]
        );
    };
    

    const handleCardPress = (item) => {
        setSelectedData(item);
        navigation.navigate("Detail");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoImageFav source={logo} />
                <CustomText size={22} style={styles.title}>Favoritos</CustomText>
            </View>
            <FlatList
                data={favorites.slice().reverse()}
                keyExtractor={(item) => String(item.id)}
                numColumns={numColumns}
                renderItem={renderItem}
            />
            <FloatingPopup visible={popupVisible} message={popupMessage} onClose={() => setPopupVisible(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000", padding: 20, display: 'flex' },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    title: { fontFamily: "Bold", marginLeft: 10, color: "#fff", marginTop: 20 },
    cardWrapper: { flex: 1, padding: 7, alignItems: "center" },
    cardTouchable: {
        justifyContent: "center", // Centra o conteúdo
        alignItems: "center", // Centra o conteúdo
        width: 100, // Garante que o TouchableOpacity ocupe toda a área do card
        height: 140,//Define uma altura fixa para o card (ajustável conforme necessário)
        padding: 0, // Remove o padding do TouchableOpacity
    },
    cardContainer: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",
    },
    imageWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cardImage: {
        width: '100%', // Garante que a imagem ocupe a largura total
        height: '100%', // Garante que a imagem ocupe a altura total
        borderRadius: 8, // Estilo opcional para bordas arredondadas
    },
});
