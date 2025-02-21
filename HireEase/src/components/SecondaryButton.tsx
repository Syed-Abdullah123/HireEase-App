import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}
export default function SecondaryButton({
  title,
  onPress,
  backgroundColor = "#F7F4F3",
  textColor = "#5B2333",
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#5B2333",
  },
  buttonText: {
    fontFamily: "Lexend-Regular",
    textAlign: "center",
    fontSize: 16,
  },
});
