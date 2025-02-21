import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../components/PrimaryButton";

export default function OtpScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Back Screen Icon */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>
        Verify your{" "}
        <Text style={{ color: "#5B2333", textDecorationLine: "underline" }}>
          email
        </Text>
      </Text>
      <View>
        <Text style={styles.enterCodeText}>
          Enter the code we've sent to your inbox
        </Text>
        <Text style={[styles.enterCodeText, { marginTop: 0 }]}>
          hello@abc123.agency.com
        </Text>
      </View>

      {/* Otp numbers container */}
      <View style={styles.boxContainer}>
        <TextInput style={styles.box} maxLength={1} />
        <TextInput style={styles.box} maxLength={1} />
        <TextInput style={styles.box} maxLength={1} />
        <TextInput style={styles.box} maxLength={1} />
        <TextInput style={styles.box} maxLength={1} />
        <TextInput style={styles.box} maxLength={1} />
      </View>

      <Text style={styles.enterCodeText}>
        Didn't receive the email?{" "}
        <Text style={{ color: "#5B2333" }}>Resend it.</Text>
      </Text>

      {/* Continue Button */}
      <PrimaryButton
        title="Continue"
        onPress={() => navigation.navigate("Signin")}
      />
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
  text: {
    fontFamily: "Lexend-Medium",
    fontSize: 24,
    textAlign: "center",
  },
  enterCodeText: {
    fontFamily: "Lexend-Medium",
    fontSize: 14,
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  box: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#5B2333",
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "Lexend-Bold",
    fontSize: 20,
  },
});
