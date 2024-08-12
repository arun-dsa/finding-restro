import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
