import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { useFonts } from '@expo-google-fonts/special-elite';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import { Routes } from './src/routes';
import { ActivityIndicator, View } from 'react-native';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Regular': require('./assets/Fonts/SmithyXT-Regular.ttf'),
    'Bold': require('./assets/Fonts/SmithyXT-Bold.ttf'),
    'Fraca': require('./assets/Fonts/SmithyXT-Faded.ttf'),
    'Extrabold': require('./assets/Fonts/SmithyXT-ExtraBold.ttf'),
  });

  
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
