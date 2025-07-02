import { Button, StyleSheet, Text, View } from 'react-native';

export default function StatsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Stats Screen</Text>
      <Button
        title="Back to Game"
        onPress={() => navigation.navigate('Play')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
