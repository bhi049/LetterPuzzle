import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tile from './Tile';

export default function GuessRow({ guess, feedback, wordLength }) {
  return (
    <View style={styles.row}>
      {Array.from({ length: wordLength }).map((_, i) => (
        <Tile
          key={i}
          letter={guess ? (guess[i] || '') : ''}
          status={feedback ? feedback[i] : null}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 4,
  },
});
