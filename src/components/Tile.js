import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

export default function Tile({ letter, feedback }) {
  let backgroundColor = colors.tileAbsent;
  if (feedback === 'green') backgroundColor = colors.tileCorrect;
  else if (feedback === 'yellow') backgroundColor = colors.tilePresent;

  return (
    <View style={[styles.tile, { backgroundColor }]}>
      <Text style={styles.letter}>{letter.trim()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 42,
    height: 42,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  letter: {
    color: colors.tileText,
    fontSize: 20,
    fontWeight: '600',
  },
});
