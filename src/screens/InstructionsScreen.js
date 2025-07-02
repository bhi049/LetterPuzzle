import { ScrollView, StyleSheet, Text } from 'react-native';

export default function InstructionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>How to Play</Text>
      <Text style={styles.text}>
        Guess the hidden word in six tries or fewer. Each guess must be a valid word with the correct number of letters.
      </Text>
      <Text style={styles.text}>
        After each guess, tiles change color to show how close you were:
      </Text>
      <Text style={styles.text}>• Teal: Correct letter and position.</Text>
      <Text style={styles.text}>• Coral: Correct letter, wrong position.</Text>
      <Text style={styles.text}>• Gray: Letter not in word.</Text>
      <Text style={styles.text}>
        Try Adventure mode for a longer challenge, or check the Word of the Day!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
  },
});
