import { Button, Text, View, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params ?? {};
  const ratingMessage =
    rating === 5 ? 'Top-rated destination! ⭐️⭐️⭐️⭐️⭐️' : 'Great choice for your next trip!';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {place}</Text>
      <Text style={styles.subtitle}>
        Rating: {rating} {rating === 5 ? 'stars' : 'stars'}
      </Text>
      <Text style={styles.message}>{ratingMessage}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
    marginBottom: 8,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    marginBottom: 16,
  },
});

