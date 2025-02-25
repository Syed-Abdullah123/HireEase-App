import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ATSCheckCard from "../components/ATSCheckCard";
import MyResumeComponent from "../components/MyResumeComponent";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ATSCheckCard />
      <Text style={styles.title}>My Resumes</Text>
      <MyResumeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F3",
    padding: 15,
  },
  title: {
    fontFamily: "Lexend-Medium",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    color: "#333",
  },
});
