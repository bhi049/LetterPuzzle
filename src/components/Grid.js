import React from 'react';
import { StyleSheet, View } from 'react-native';
import GuessRow from './GuessRow';

export default function Grid({ guesses, maxRows, wordLength, currentGuess }) {
  const rows = [];

for (let i = 0; i < maxRows; i++) {
    if (i < guesses.length) {
      // previous submitted guesses with feedback
      rows.push(
        <GuessRow
          key={i}
          guess={guesses[i].guess}
          feedback={guesses[i].feedback}
          wordLength={wordLength}
        />
      );
    } else if (i === guesses.length) {
      // active input row
      rows.push(
        <GuessRow
          key={i}
          guess={currentGuess}
          feedback={null}
          wordLength={wordLength}
        />
      );
    } else {
      // empty future rows
      rows.push(
        <GuessRow
          key={i}
          guess=""
          feedback={null}
          wordLength={wordLength}
        />
      );
    }
  }

  return <View style={styles.grid}>{rows}</View>;
}

const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    marginVertical: 16,
  },
});
