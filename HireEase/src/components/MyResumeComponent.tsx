import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import resumes from "../dummydata/resumes";

const renderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.resumesContainer}>
        <View style={styles.resumesContainer}>
          <View style={styles.resumeBackground}>
            <Image source={item.image} style={styles.resumeImage} />
          </View>
          <View>
            <Text style={styles.resumeTitle}>{item.title}</Text>
            <Text style={styles.resumeStyle}>{item.style}</Text>
          </View>
        </View>
        <Text style={[styles.resumeStyle, { textAlign: "right" }]}>
          {item.lastupdate}
        </Text>
      </View>
    </View>
  );
};
const MyResumeComponent = () => {
  return (
    <FlatList
      data={resumes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 10 }}
    />
  );
};

export default MyResumeComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#F7F4F3",
    // backgroundColor: "red",
    elevation: 1,
    width: "100%",
    height: 80,
    padding: 10,
  },
  resumesContainer: {
    // backgroundColor: "yellow",
    // elevation: 3,
    // width: "100%",
    // height: 80,
    // padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  resumeBackground: {
    backgroundColor: "#ccc",
    width: 50,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  resumeImage: {
    width: "100%",
    height: "90%",
    resizeMode: "contain",
    // alignSelf: "center",
  },
  resumeTitle: {
    fontFamily: "Lexend-Medium",
    fontSize: 14,
    color: "#333",
  },
  resumeStyle: {
    fontFamily: "Lexend-Regular",
    fontSize: 12,
    color: "#bbb",
  },
});
