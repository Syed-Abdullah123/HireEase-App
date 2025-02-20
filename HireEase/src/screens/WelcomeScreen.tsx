import React, { useEffect, useRef } from "react";
import { Button, StyleSheet, Text, View, Animated } from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const translateYAnim = useRef(new Animated.Value(30)).current; // Start a little lower

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // 0.5 sec fade-in
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
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
      ]}
    >
      <Text style={styles.title}>Welcome to the AI Resume Builder</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("Register")} />
      <Button title="Sign In" onPress={() => navigation.navigate("Signin")} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
