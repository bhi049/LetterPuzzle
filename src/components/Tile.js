import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

export default function Tile({ letter, feedback }) {
  const backgroundColor = {
    gray: colors.tileGray,
    yellow: colors.tileYellow,
    green: colors.tileGreen,
  }[feedback];

  return (
    <View style={[styles.tile, { backgroundColor }]}>
      <Text style={styles.letter}>{letter.trim()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 40,
    height: 40,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  letter: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
