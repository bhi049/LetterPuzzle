import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';

export default function HomeScreen({ navigation }) {
  const handleStartGame = () => {
    Alert.alert(
      'Select Difficulty',
      'Choose your level:',
      [
        { text: 'Easy (4-5 letters)', onPress: () => navigation.navigate('Game', { difficulty: 'easy', autoStart: true }) },
        { text: 'Medium (6-7 letters)', onPress: () => navigation.navigate('Game', { difficulty: 'medium', autoStart: true }) },
        { text: 'Expert (8 letters)', onPress: () => navigation.navigate('Game', { difficulty: 'expert', autoStart: true }) },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Letter Puzzle</Text>
      <Text style={styles.subtitle}>Sharpen your mind with words!</Text>

      <TouchableOpacity style={styles.button} onPress={handleStartGame}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => alert('Adventure mode coming soon!')}>
        <Text style={styles.buttonOutlineText}>Adventure</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => alert('Word of the Day coming soon!')}>
        <Text style={styles.buttonOutlineText}>Word of the Day</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Stats')}>
        <Text style={styles.buttonSecondaryText}>Your Stats</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.title,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: colors.subtitle,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.button,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: colors.tileText,
    fontSize: 18,
    fontWeight: '600',
  },
  buttonOutline: {
    borderColor: colors.button,
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: colors.button,
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: colors.accent,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: colors.tileText,
    fontSize: 18,
    fontWeight: '600',
  },
});
