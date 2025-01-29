import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { getLevels } from "../../services/api";

export const Teste = () => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      const data = await getLevels();
      setLevels(data);
    };

    fetchLevels();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={levels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.difficulty}>Dificuldade: {item.difficulty}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000",
  },
  card: {
    backgroundColor: "#222",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 16,
  },
  description: {
    color: "#ccc",
    marginTop: 4,
  },
  difficulty: {
    color: "#ff4747",
    marginTop: 4,
    fontWeight: "bold",
  },
});


