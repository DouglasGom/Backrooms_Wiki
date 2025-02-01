import { db } from "../../../firebaseConfig"; // Importa db corretamente
import { collection, getDocs } from "firebase/firestore";

export const getLevels = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "levels"));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })).sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error("❌ Erro ao buscar níveis:", error);
    return [];
  }
};

export const getEntities = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "entities"));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })).sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error("❌ Erro ao buscar entidades:", error);
    return [];
  }
};

export const getLevelZeroOne = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "levels"));
    const levels = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Filtra para encontrar o nível 0.1
    return levels.find(level => level.title.includes("0.1")) || null;
  } catch (error) {
    console.error("❌ Erro ao buscar Nível 0.1:", error);
    return null;
  }
};
