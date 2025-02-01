import React from 'react';
import { ScreenScrollContainer, Hero, GoBack } from '../../components';
import { useDataStore } from '../../services/stores';
import { CustomText } from '../../components';
import { StyleSheet, View } from 'react-native';

export const Detail = () => {
  const { selectedData } = useDataStore(); 
  
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} withoutLogo />
      
      {/* Adicionando a descrição abaixo do Hero */}
      <View style={styles.descriptionContainer}>
        <CustomText style={styles.title}>Descrição</CustomText>
        <CustomText style={styles.descriptionText}>
          {selectedData?.description}
        </CustomText>
      </View>
      
      <GoBack />
    </ScreenScrollContainer>
  );
};

// Estilos para o texto da descrição
const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: 20, // Espaço acima da descrição
    paddingHorizontal: 20, // Espaço nas laterais
  },
  descriptionText: {
    fontFamily: 'Regular', // Usando a fonte Regular
    fontSize: 17, // Tamanho de fonte adequado
    color: '#fff', // Cor branca para o texto
    lineHeight: 25, // Altura da linha para melhor legibilidade,
    textAlign: 'justify'
  },
  title:{
    fontFamily: 'Bold',
    marginBottom: 15,
    marginTop: -10
  }
});
