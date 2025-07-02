import { createContext, useEffect, useState } from 'react';
import { loadStatsFromStorage, saveStatsToStorage } from '../storage/stats';

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [stats, setStats] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0,
    failures: 0
  });

  useEffect(() => {
    loadStatsFromStorage().then(setStats);
  }, []);

  const updateStats = (result) => {
    const updated = { ...stats };
    if (result >= 1 && result <= 6) {
      updated[result]++;
    } else {
      updated.failures++;
    }
    setStats(updated);
    saveStatsToStorage(updated);
  };

  return (
    <GameContext.Provider value={{ stats, updateStats }}>
      {children}
    </GameContext.Provider>
  );
}
