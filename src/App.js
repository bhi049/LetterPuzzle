import { GameProvider } from './context/GameContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <GameProvider>
      <AppNavigator />
    </GameProvider>
  );
}
