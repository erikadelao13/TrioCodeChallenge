import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { Inter_700Bold, Inter_400Regular, useFonts } from '@expo-google-fonts/inter';
import { AppStackRouter } from './src/router/App.stack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <AppStackRouter />
    </NavigationContainer>
  );
}
