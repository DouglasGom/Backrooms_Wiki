import React from "react";
import { FlatList, TouchableOpacity } from 'react-native';
import { Card } from '../../molecules';
import { CustomText } from '../../atoms';
import { ListContainer } from "./styles";
import { theme } from "../../../styles";
import { useDataStore } from "../../../services/stores"; // Importa o estado global para favoritos

export const HomeList = ({ data, title, type }) => {
    const { addFavorite } = useDataStore(); // Obtém a função de adicionar aos favoritos

    const handleAddToFavorites = (item) => {
        addFavorite(item, type); // Passa o tipo (level ou entity) ao adicionar aos favoritos
    };

    return (
        <ListContainer>
            <CustomText ml={16} style={{ fontFamily: 'Bold' }} size={18}>{title}</CustomText>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleAddToFavorites(item)}>
                        <Card item={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={{
                    paddingLeft: theme.metrics.px(15),
                    paddingTop: theme.metrics.px(12),
                    paddingBottom: theme.metrics.px(24),
                }}
            />
        </ListContainer>
    );
};
