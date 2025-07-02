import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GameProvider } from './context/GameContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GameProvider>
  );
}
