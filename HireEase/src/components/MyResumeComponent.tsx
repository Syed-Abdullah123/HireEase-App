import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import resumes from "../dummydata/resumes";

const renderItem = ({ item }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => console.log("Presed resume")}
    >
      <View style={styles.resumesContainer}>
        <View style={styles.resumesInnerContainer}>
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
    </Pressable>
  );
};
const MyResumeComponent = () => {
  return (
    <FlatList
      data={resumes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 2 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => {
        return (
          <>
            <Text style={styles.emptyText}>No recent resumes yet!</Text>
            <Text style={[styles.emptyText, { marginTop: 10 }]}>
              Click on New resume or the Templates in the bottom tab to get
              started.
            </Text>
          </>
        );
      }}
    />
  );
};

export default MyResumeComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#F7F4F3",
    // backgroundColor: "red",
    // elevation: 1,
    width: "100%",
    height: 80,
  },
  resumesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: "#ccc",
    backgroundColor: "#55555510",
    padding: 5,
    paddingHorizontal: 10,
  },
  resumesInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    color: "#aaa",
  },
  emptyText: {
    fontFamily: "Lexend-Medium",
    fontSize: 14,
    color: "#555",
  },
});
