import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface SearchComponentProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  onClear?: () => void;
  placeholder?: string;
}

const SearchComponent = ({
  searchText,
  onSearchChange,
  onClear,
  placeholder = "Search your template",
}: SearchComponentProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={"#555"} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={searchText}
        onChangeText={onSearchChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <Ionicons name="close-circle" size={20} color="#666" />
        </TouchableOpacity>
      )}
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
  clearButton: {
    padding: 4,
  },
});
