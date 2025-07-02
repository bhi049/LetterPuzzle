import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'gameStats';

export async function saveStatsToStorage(stats) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Saving stats failed', e);
  }
}

export async function loadStatsFromStorage() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : getDefaultStats();
  } catch (e) {
    console.error('Loading stats failed', e);
    return getDefaultStats();
  }
}

function getDefaultStats() {
  return {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0,
    failures: 0
  };
}
