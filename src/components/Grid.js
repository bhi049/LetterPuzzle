import React from 'react';
import { StyleSheet, View } from 'react-native';
import GuessRow from './GuessRow';

export default function Grid({ guesses, maxRows, wordLength, currentGuess }) {
  const rows = [...guesses];

  if (currentGuess && rows.length < maxRows) {
    rows.push({
      guess: currentGuess.padEnd(wordLength, ' '),
      feedback: Array(wordLength).fill('gray')
    });
  }

  return (
    <View style={styles.grid}>
      {rows.map((item, idx) => (
        <GuessRow
          key={idx}
          guess={item.guess}
          feedback={item.feedback}
        />
      ))}

      {Array.from({ length: maxRows - rows.length }).map((_, idx) => (
        <View key={idx} style={styles.emptyRow}>
          {Array.from({ length: wordLength }).map((_, idx2) => (
            <View key={idx2} style={styles.emptyTile} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginVertical: 16,
  },
  emptyRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 6,
  },
  emptyTile: {
    width: 42,
    height: 42,
    margin: 3,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
  },
});
