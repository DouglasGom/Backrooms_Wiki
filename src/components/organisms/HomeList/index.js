import React from "react";
import { FlatList } from 'react-native'
import { Card } from '../../molecules';
import { CustomText, Text } from '../../atoms';
import { ListContainer } from "./styles";
import { theme } from "../../../styles";

export const HomeList = ({ data, title }) => {
    return (
        <ListContainer>
            <CustomText ml={16} style={{fontFamily: 'Bold'}} size={18}>{title}</CustomText>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={{
                    paddingLeft: theme.metrics.px(15),
                    paddingTop: theme.metrics.px(12),
                    paddingBottom: theme.metrics.px(24),
                }}
            />
        </ListContainer>
    )
}