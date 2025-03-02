import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={"#555"} />
      <TextInput placeholder="Search your template" style={styles.input} />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    padding: 3,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "#333",
    fontFamily: "Lexend-Regular",
  },
});
