import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CustomText, Logo_Simples, Container, HomeList, ScreenScrollContainer ,Hero } from '../../components';

export const Home = () => {
    const [levels, setLevels] = useState([]);
    const [entities, setEntities] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const levelsResponse = await axios.get('http://192.168.1.2:3000/levels');
                const entitiesResponse = await axios.get('http://192.168.1.2:3000/entities');
                
                setLevels(levelsResponse.data.slice(0, 10)); 
                setEntities(entitiesResponse.data.slice(0, 10)); 
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <ScreenScrollContainer>
            <Hero item={{
                title: 'Nível 0.1',
                subtitle: 'Estação Zenith',
                type: 'Nível',
                image_url: 'https://th.bing.com/th/id/R.b9f2091f0d0497aa4f3a94003c63bdc5?rik=udmiArAnjnLhqg&riu=http%3a%2f%2fbackrooms-wiki.wdfiles.com%2flocal--files%2flevel-0-1%2fzenith-station.jpg&ehk=VZwB%2fSaD%2fJFSSmF25F1q1xkUraO1KfWK1isWsp3DKJo%3d&risl=&pid=ImgRaw&r=0',
            }}/>
            <HomeList title="Níveis" data={levels} />
            <HomeList title="Entidades" data={entities} />
        </ScreenScrollContainer>
    );
};
