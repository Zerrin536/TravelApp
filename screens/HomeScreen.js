import { Button, Text, View, StyleSheet } from 'react-native';

const destinations = [
  { place: 'Paris', rating: 5 },
  { place: 'London', rating: 4 },
  { place: 'Tokyo', rating: 5 },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Destination</Text>
      {destinations.map((destination) => (
        <View key={destination.place} style={styles.buttonWrapper}>
          <Button
            title={`Go to ${destination.place}`}
            onPress={() => navigation.navigate('Details', destination)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 12,
  },
});

