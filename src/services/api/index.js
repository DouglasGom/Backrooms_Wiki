import axios from "axios";

const API_URL = "http://192.168.1.2:3000/levels"; 

export const getLevels = async () => {
  try {
    const response = await axios.get(`${API_URL}/levels`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar níveis:", error);
    return [];
  }
};

export const getEntities = async () => {
  try {
    const response = await axios.get(`${API_URL}/entities`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar entidades:", error);
    return [];
  }
};
