import React from "react";

import {
  FlatList,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, { useSharedValue } from "react-native-reanimated";

import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ title, results }) => {
  const ref = React.useRef(null);
  const { width } = useWindowDimensions();

  const renderListItem = ({ item }) => {
    return (
      <Animated.View style={{ flex: 1 }}>
        <ResultsDetails item={item} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Carousel
        ref={ref}
        loop={false}
        width={width}
        height={width / 2}
        snapEnabled={true}
        data={results}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        scrollAnimationDuration={1000}
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
