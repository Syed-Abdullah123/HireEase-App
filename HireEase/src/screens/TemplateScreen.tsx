import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import SearchComponent from "../components/SearchComponent";
import { templates } from "../dummydata/resumeTemplates";

const templateStyles = [
  { id: 1, name: "All" },
  { id: 2, name: "Professional" },
  { id: 3, name: "Minimalist" },
  { id: 4, name: "Modern" },
  { id: 5, name: "Simple" },
];

const renderItem = ({ item }) => (
  <Pressable style={styles.templateContainer}>
    <View style={styles.template}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.templateStyle}>{item.style}</Text>
    </View>
  </Pressable>
);

export default function TemplateScreen() {
  const [activeId, setActiveId] = useState<number>(1);
  return (
    <View style={styles.container}>
      <SearchComponent />
      {/* Scrollable category row */}
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
        >
          {templateStyles.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.item, activeId === item.id && styles.activeItem]}
              onPress={() => setActiveId(item.id)}
            >
              <Text
                style={[styles.text, activeId === item.id && styles.activeText]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Grid layout for templates */}
      <FlatList
        data={templates}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        key={activeId} // Ensures FlatList updates when category changes
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F3",
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 10,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "transparent", // Default background
  },
  activeItem: {
    backgroundColor: "#5B2333", // Active background
  },
  text: {
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    color: "#999", // Default text color
  },
  activeText: {
    fontFamily: "Lexend-Regular",
    color: "#fff", // Active text color
  },
  columnWrapper: {
    justifyContent: "space-between",
    // paddingHorizontal: 5,
    // marginBottom: 5,
    gap: 10,
  },
  templateContainer: {
    flex: 1,
    marginBottom: 10,
  },
  template: {
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Lexend-Medium",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  templateStyle: {
    fontFamily: "Lexend-Regular",
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});
