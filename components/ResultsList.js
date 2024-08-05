import { FlatList, StyleSheet, View, Text } from "react-native";
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ title, results }) => {
  const renderListItem = ({ item }) => {
    return <ResultsDetails item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
