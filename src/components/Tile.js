import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

export default function Tile({ letter, status }) {
  let backgroundColor = colors.tileBackground;
  let textColor = colors.tileText;

  if (status === 'correct') {
    backgroundColor = colors.correct;
    textColor = '#FFF';
  } else if (status === 'present') {
    backgroundColor = colors.present;
    textColor = '#FFF';
  } else if (status === 'absent') {
    backgroundColor = colors.absent;
    textColor = '#FFF';
  } else {
    backgroundColor = colors.tileBackground;
    textColor = colors.tileText;
  }

  return (
    <View style={[styles.tile, { backgroundColor }]}>
      <Text style={[styles.letter, { color: textColor }]}>
        {letter.trim()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  letter: {
    fontSize: 24,
    fontWeight: 'bold',
  },

});
