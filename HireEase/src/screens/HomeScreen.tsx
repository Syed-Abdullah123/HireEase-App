import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ATSCheckCard from "../components/ATSCheckCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ATSCheckCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F3",
    padding: 15,
  },
});
