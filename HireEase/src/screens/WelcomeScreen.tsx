import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, Animated, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function WelcomeScreen({ navigation }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const translateYAnim = useRef(new Animated.Value(30)).current; // Start a little lower

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // 1 sec fade-in
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 500, // 0.5 sec slide-up
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/CV-pic.png")} // Make sure this exists
      style={styles.background}
      resizeMode="contain"
    >
      {/* Gradient Overlay */}
      <LinearGradient
        colors={["transparent", "#F7F4F3", "#F7F4F3"]}
        style={styles.gradient}
      />

      {/* Content */}
      <Animated.View
        style={[
          styles.container,
          { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
        ]}
      >
        <Text style={styles.title}>
          Welcome to{" "}
          <Text style={{ color: "#5B2333", fontFamily: "Lexend-Bold" }}>
            HireEase
          </Text>
        </Text>
        <Text style={styles.subtitle}>Your Next Opportunity Starts Here!</Text>
        {/* Buttons */}

        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.navigate("Register")}
        />
        <SecondaryButton
          title="Already have an account"
          onPress={() => navigation.navigate("Signin")}
        />
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#F7F4F3",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
  },
  container: {
    alignItems: "center",
    paddingBottom: 60,
    paddingHorizontal: 20,
    width: "100%",
  },
  title: {
    fontFamily: "Lexend-Medium",
    fontSize: 28,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Lexend-Regular",
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
});
