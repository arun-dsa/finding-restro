import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState();
  const [error, setError] = useState("");

  const filterResultsByPrice = (price) => {
    return results?.filter((result) => result.price === price) || [];
  };

  const costEffective = filterResultsByPrice("$");
  const bitPrice = filterResultsByPrice("$$");
  const bigPrice = filterResultsByPrice("$$$");

  const onTermSubmit = async () => {
    //console.log("calling - ", searchTerm);
    try {
      setLoading(true);
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      //console.log(response);
      setResults(response?.data?.businesses || []);
    } catch (e) {
      setError("Something went wrong. Please try again.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onTermSubmit={onTermSubmit}
      />
      <View style={styles.searchResults}>
        {error && <Text>{error}</Text>}
        {results?.length > 0 && (
          <ScrollView>
            {costEffective?.length > 0 && (
              <ResultsList title="Cost Effect" results={costEffective} />
            )}
            {bitPrice?.length > 0 && (
              <ResultsList title="Bit Pricer" results={bitPrice} />
            )}
            {bigPrice?.length > 0 && (
              <ResultsList title="Big Spender" results={bigPrice} />
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFF",
  },
  searchResults: {
    flex: 1,
  },
});

export default SearchScreen;
