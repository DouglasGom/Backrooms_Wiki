import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CustomText } from "../../components";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useDataStore } from "../../services/stores";

export const SearchScreen = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const { setSelectedData } = useDataStore();

    useEffect(() => {
        const fetchResults = async () => {
            if (!query) {
                setResults([]);
                return;
            }

            setLoading(true);

            try {
                const queryLower = query.toLowerCase();

                const levelsSnapshot = await getDocs(collection(db, "levels"));
                const entitiesSnapshot = await getDocs(collection(db, "entities"));

                const filterItems = (item) =>
                    item.title.toLowerCase().includes(queryLower) ||
                    (item.subtitle && item.subtitle.toLowerCase().includes(queryLower));

                const levels = levelsSnapshot.docs
                    .map(doc => ({ id: doc.id, ...doc.data(), type: "Nível" }))
                    .filter(filterItems);

                const entities = entitiesSnapshot.docs
                    .map(doc => ({ id: doc.id, ...doc.data(), type: "Entidade" }))
                    .filter(filterItems);

                setResults([...levels, ...entities]);
            } catch (error) {
                console.error("Erro ao buscar resultados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query]);

    const handleSelectItem = (item) => {
        setSelectedData(item);
        navigation.navigate("Detail");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../../assets/Smiler_simples.png")} style={styles.logo} />
                <CustomText size={22} style={styles.title}>Pesquisar</CustomText>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Nome do Nível ou Entidade"
                placeholderTextColor="#aaa"
                value={query}
                onChangeText={setQuery}
            />
            <CustomText style={styles.resultTitle}>Resultados</CustomText>

            {/* Exibição dos resultados ou mensagem de "Nenhum Resultado" */}
            {loading ? (
                <CustomText style={styles.noResultsText}>Carregando...</CustomText>
            ) : results.length > 0 ? (
                <FlatList
                    data={results}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelectItem(item)}>
                            <Image source={{ uri: item.image_url }} style={styles.image} />
                        </TouchableOpacity>
                    )}
                />
            ) : (
                <View style={styles.noResultsContainer}>
                    <Image source={require("../../../assets/M.E.G.png")} style={styles.noResultsImage} />
                    <CustomText style={styles.noResultsText}>Nenhum Resultado Encontrado</CustomText>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000", padding: 16 },
    header: { flexDirection: "row", alignItems: "center", marginBottom: 16, marginTop: 50 },
    logo: { width: 65, height: 50, marginRight: 10, marginTop: -23 },
    title: { fontFamily: "Bold", color: "#fff", marginBottom: 30 },
    input: { backgroundColor: "#000", borderColor: "#fff", borderWidth: 1, padding: 15, borderRadius: 8, color: "#fff", marginBottom: 15, fontFamily: "Bold" },
    resultTitle: { fontFamily: "Bold", marginTop: 16, color: "#fff", marginBottom: 10 },
    image: { width: 90, height: 130, margin: 5, borderRadius: 8 },
    noResultsContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    noResultsImage: { width: 150, height: 100, marginBottom: 10 },
    noResultsText: { fontFamily: "Bold", color: "#fff", fontSize: 20 }
});
