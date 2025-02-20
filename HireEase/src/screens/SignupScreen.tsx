import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HireEase</Text>
      <Text style={styles.title}>Place where all your Travels begin</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <TextInput placeholder="First Name" style={styles.input} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder="Last Name" style={styles.input} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View style={styles.inputField}>
          <TextInput placeholder="Password" style={styles.input} />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Text style={{ fontSize: 24 }}>✕</Text>
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
    backgroundColor: "#D9E8F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    // color: "#5928D6",
    // color: "#1155CC",
    color: "#5801FF",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  inputContainer: {
    marginTop: 20,
    gap: 15,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
