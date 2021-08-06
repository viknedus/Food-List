import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";

// imports from local file
import data from "./Data";
import StarRating from "./StarRating";

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
export default function Gridlistt() {
  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Image style={styles.itemImg} source={item.uri} />
        <Text style={styles.itemText}>{item.key}</Text>
        <StarRating />
        <Text style={styles.itemNum}>{item.num}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={formatData(data, numColumns)}
        renderItem={renderItem}
        numColumns={numColumns}
        horizontal={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 1,
  },
  item: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: "#fff",
    fontWeight: "600",
  },
  itemImg: {
    alignItems: "center",
    width: 50,
    height: 50,
  },
  itemNum: {
    color: "white",
    fontSize: 10,
  },
  itemRate: {
    alignItems: "center",
    margin: 10,
  },
});
