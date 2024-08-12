import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const ResultsDetails = ({ item }) => {
  const { width } = useWindowDimensions();
  const height = width / 2 - 40;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image_url }}
        style={[styles.image, { height: "80%", width: "100%" }]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>
          {item.rating} Stars, {item.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
    marginBottom: 5,
    position: "absolute",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
});
