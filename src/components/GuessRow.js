import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tile from './Tile';

export default function GuessRow({ guess, feedback }) {
  return (
    <View style={styles.row}>
      {guess.split('').map((letter, idx) => (
        <Tile key={idx} letter={letter} feedback={feedback[idx]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
  },
});
