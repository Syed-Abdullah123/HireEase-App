import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";

import PrimaryButton from "../components/PrimaryButton";

export default function SignupScreen({ navigation }: any) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HireEase</Text>
      <Text style={styles.title}>
        Land Your Dream Job with a Winning Resume!
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="First Name"
          mode="outlined"
          style={styles.input}
          // activeOutlineColor="#5801FF"
          activeOutlineColor="#5B2333"
          theme={{ roundness: 10 }}
        />
        <TextInput
          label="Last Name"
          mode="outlined"
          style={styles.input}
          activeOutlineColor="#5B2333"
          theme={{ roundness: 10 }}
        />
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
        <Text style={styles.passwordHint}>
          At least 8 characters, containing a letter and a number
        </Text>

        <Text style={styles.termsText}>
          By creating an account, you agree to our{" "}
          <Text style={styles.privacyPolicyLink}>Terms of Service</Text> and{" "}
          <Text style={styles.privacyPolicyLink}>Privacy Policy.</Text>
        </Text>

        {/* Create Account Button */}
        <PrimaryButton
          title="Create Account"
          onPress={() => navigation.navigate("Otp")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "92%", // Controls the modal height effect
    backgroundColor: "#F7F4F3",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  logo: {
    fontFamily: "Lexend-Bold",
    fontSize: 24,
    textAlign: "center",
    // color: "#5928D6",
    // color: "#1155CC",
    // color: "#5801FF",
    color: "#5B2333",
    marginTop: 20,
  },
  title: {
    fontFamily: "Lexend-Medium",
    fontSize: 20,
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
  input: {
    fontSize: 14,
    backgroundColor: "transparent",
  },
  passwordHint: {
    fontFamily: "Lexend-Regular",
    fontSize: 12,
    color: "#555",
    bottom: 10,
    left: 5,
  },
  termsText: {
    fontFamily: "Lexend-Regular",
    fontSize: 12,
    width: "75%",
    alignSelf: "center",
    textAlign: "center",
    marginTop: "7%",
    top: 15,
  },
  privacyPolicyLink: {
    textDecorationLine: "underline",
    color: "#5B2333",
  },
});
