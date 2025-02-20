import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SigninScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SigninScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Text style={{ fontSize: 18 }}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90%", // Controls the modal height effect
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
