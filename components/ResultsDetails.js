import { Image, StyleSheet, Text, View } from "react-native";

const ResultsDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.reviews} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    marginLeft: 20,
  },
});
