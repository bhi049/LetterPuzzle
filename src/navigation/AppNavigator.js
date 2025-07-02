import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from '../screens/GameScreen';
import StatsScreen from '../screens/StatsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Play"
          component={GameScreen}
          options={{ title: 'Letter Puzzle' }}
        />
        <Stack.Screen
          name="Stats"
          component={StatsScreen}
          options={{ title: 'Your Stats' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
