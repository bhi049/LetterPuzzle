import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Grid from '../components/Grid';
import { WORD_LIST } from '../data/wordList';
import { checkGuess } from '../logic/checkGuess';
import colors from '../theme/colors';

export default function GameScreen({ route, navigation }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [targetWord, setTargetWord] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);

  const MAX_ATTEMPTS = 6;

    useEffect(() => {
    if (route.params?.autoStart) {
      handleStartGame();
    }
  }, [route.params]);

  const handleStartGame = () => {
    const randomWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    setTargetWord(randomWord.toUpperCase());
    setGameStarted(true);
    setGuesses([]);
    setCurrentGuess('');
  };

  const handleSubmitGuess = () => {
    if (currentGuess.length !== targetWord.length) {
      Alert.alert(`Guess must be ${targetWord.length} letters long!`);
      return;
    }

    const feedback = checkGuess(currentGuess.toUpperCase(), targetWord);
    setGuesses([...guesses, { guess: currentGuess.toUpperCase(), feedback }]);
    setCurrentGuess('');

    if (currentGuess.toUpperCase() === targetWord) {
      Alert.alert('You Win!', 'You guessed the word!', [
        { text: 'OK', onPress: () => setGameStarted(false) }
      ]);
    } else if (guesses.length + 1 >= MAX_ATTEMPTS) {
      Alert.alert('Game Over', `The word was: ${targetWord}`, [
        { text: 'OK', onPress: () => setGameStarted(false) }
      ]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Letter Puzzle</Text>

      {!gameStarted ? (
        <>
          <Text style={styles.subtitle}>Press start to begin guessing!</Text>
          <Button
            title="Start Game"
            color={colors.button}
            onPress={handleStartGame}
          />
        </>
      ) : (
        <>
          <Text style={styles.subtitle}>Guess the {targetWord.length}-letter word</Text>

          <Grid
            guesses={guesses}
            maxRows={MAX_ATTEMPTS}
            wordLength={targetWord.length}
            currentGuess={currentGuess.toUpperCase()}
          />

          <TextInput
            style={styles.input}
            value={currentGuess}
            onChangeText={(text) => setCurrentGuess(text.toUpperCase())}
            placeholder="Type your guess"
            autoCapitalize="characters"
            maxLength={targetWord.length}
          />

          <Button
            title="Submit Guess"
            color={colors.button}
            onPress={handleSubmitGuess}
          />

          <View style={{ marginTop: 10 }}>
            <Button title="End Game" color={colors.accent} onPress={() => navigation.navigate('Home')} />
          </View>
        </>
      )}
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
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.title,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: colors.subtitle,
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#adb5bd',
    padding: 10,
    width: '80%',
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
});
