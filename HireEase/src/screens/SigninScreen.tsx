import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

import PrimaryButton from "../components/PrimaryButton";

export default function SigninScreen({ navigation }: any) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>
        Back Again? Let’s Make Your Resume{" "}
        <Text style={{ color: "#5B2333", textDecorationLine: "underline" }}>
          Even Better!
        </Text>
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          activeOutlineColor="#5B2333"
          theme={{ roundness: 10 }}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry={!passwordVisible}
          right={
            <TextInput.Icon
              icon={!passwordVisible ? "eye-off" : "eye"}
              onPress={() => setPasswordVisible(!passwordVisible)}
              color={"#555"}
              size={20}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            />
          }
          style={styles.input}
          activeOutlineColor="#5B2333"
          theme={{ roundness: 10 }}
        />
      </View>

      <Text style={styles.forgotText}>Forgot Password?</Text>

      <PrimaryButton
        title="Sign In"
        onPress={() => navigation.navigate("TabNavigator", { screen: "Home" })}
      />

      <View style={styles.bottomText}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "92%",
    backgroundColor: "#F7F4F3",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: "Lexend-Medium",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
  inputContainer: {
    marginTop: 20,
    gap: 15,
  },
  input: {
    fontSize: 14,
    backgroundColor: "transparent",
  },
  forgotText: {
    fontFamily: "Lexend-Medium",
    fontSize: 14,
    textAlign: "right",
    marginTop: 10,
    color: "#5B2333",
  },
  bottomText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 3,
  },
  text: {
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    color: "#555",
  },
  buttonText: {
    fontFamily: "Lexend-Medium",
    fontSize: 14,
    color: "#5B2333",
  },
});
