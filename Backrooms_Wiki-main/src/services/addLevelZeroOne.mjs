import { db } from "../../firebaseConfig"; // Caminho pode variar
import { collection, addDoc } from "firebase/firestore";

const addLevelZeroOne = async () => {
  try {
    const docRef = await addDoc(collection(db, "levels"), {
      title: "Nível 0.1 - O Zênite",
      subtitle: "Uma realidade distorcida dentro do Nível 0",
      type: "Nível",
      image_url: "https://exemplo.com/imagem-nivel-0-1.jpg",
      description: "O Nível 0.1 é uma subdimensão do Nível 0, caracterizada por corredores infinitos e uma estranha distorção do espaço-tempo.",
      difficulty: "Extremamente Perigoso"
    });

    console.log("✅ Nível 0.1 adicionado com ID:", docRef.id);
  } catch (error) {
    console.error("❌ Erro ao adicionar Nível 0.1:", error);
  }
};

// ⚠️ Apenas execute esta função uma vez para adicionar o nível 0.1 ao Firestore.
addLevelZeroOne();
