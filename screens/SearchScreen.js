import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const onTermSubmit = async () => {
    //console.log("calling - ", searchTerm);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      //console.log(response);
      setResults(response?.data?.businesses);
    } catch (e) {
      setError("Something went wrong. Please try again.");
      console.log(e);
    }
  };

  const filterResultsByPrice = (price) => {
    return results?.filter((result) => result.price === price) || [];
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

        <ScrollView>
          <ResultsList
            title="Cost Effect"
            results={filterResultsByPrice("$")}
          />
          <ResultsList
            title="Bit Pricer"
            results={filterResultsByPrice("$$")}
          />
          <ResultsList
            title="Big Spender"
            results={filterResultsByPrice("$$$")}
          />
        </ScrollView>
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
    padding: 15,
  },
});

export default SearchScreen;
