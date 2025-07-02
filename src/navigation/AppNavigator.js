import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from 'react-native';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import InstructionsScreen from '../screens/InstructionsScreen';
import StatsScreen from '../screens/StatsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Letter Puzzle',
          headerRight: () => (
            <Button
              title="Instructions"
              onPress={() => navigation.navigate('Instructions')}
            />
          )
        })}
      />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{ title: 'Play' }}
      />
      <Stack.Screen name="Stats" component={StatsScreen} />
      <Stack.Screen name="Instructions" component={InstructionsScreen} />
    </Stack.Navigator>
  );
}
