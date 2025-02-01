import React, { useEffect, useState } from "react";
import { getLevels, getEntities } from "../../services/api";
import { ScreenScrollContainer, Hero, HomeList, CustomText } from "../../components";
import { useDataStore } from "../../services/stores";

export const Home = () => {
    const [levels, setLevels] = useState([]);
    const [entities, setEntities] = useState([]);
    const { addFavorite } = useDataStore();

    useEffect(() => {
        const fetchData = async () => {
            const levelsData = await getLevels();
            const entitiesData = await getEntities();
            
            // Aqui garantimos que o nível 0.1 será tratado separadamente
            const levelZeroOne = levelsData.find(level => level.id === 0.1);
            
            // Mantemos os outros níveis em levels, mas incluímos o 0.1 no Hero
            const filteredLevels = levelsData.filter(level => level.id !== 0.1).sort((a, b) => a.id - b.id);
            const sortedEntities = entitiesData.sort((a, b) => a.id - b.id);
            
            setLevels(filteredLevels);
            setEntities(sortedEntities);

            if (levelZeroOne) {
                setLevels(prevLevels => [levelZeroOne, ...prevLevels]); // Coloca o Nível 0.1 no início da lista
            }
        };
        fetchData();
    }, []);

    // Verifica se o nível 0.1 foi carregado corretamente
    const levelZeroOne = levels.find(level => level.id === 0.1);

    return (
        <ScreenScrollContainer>
            {levelZeroOne ? (
                <Hero item={levelZeroOne} /> // Exibe o Nível 0.1 no Hero
            ) : (
                <CustomText>Carregando Nível 0.1...</CustomText>
            )}

            <HomeList 
                title="Níveis" 
                data={levels.filter(level => level.id !== 0.1)} // Filtra novamente o Nível 0.1 da lista
                onFavorite={(item) => handleAddToFavorites(item, 'level')} 
            />
            
            <HomeList 
                title="Entidades" 
                data={entities} 
                onFavorite={(item) => handleAddToFavorites(item, 'entity')} 
            />
        </ScreenScrollContainer>
    );
};
