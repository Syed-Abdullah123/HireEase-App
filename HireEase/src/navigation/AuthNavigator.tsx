import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import OtpScreen from "../screens/OtpScreen";
import SigninScreen from "../screens/SigninScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          ...TransitionPresets.FadeFromBottomAndroid, // Adds a fade + slight slide-up effect
        }}
      />
      <Stack.Screen
        name="Register"
        component={SignupScreen}
        options={{
          gestureEnabled: true,
          cardStyle: {
            backgroundColor: "transparent",
            ...TransitionPresets.ModalSlideFromBottomIOS,
          },
        }}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{
          gestureEnabled: true,
          cardStyle: {
            backgroundColor: "transparent",
            ...TransitionPresets.ModalSlideFromBottomIOS,
          },
        }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{
          gestureEnabled: true,
          cardStyle: {
            backgroundColor: "transparent",
            ...TransitionPresets.ModalSlideFromBottomIOS,
          },
        }}
      />
    </Stack.Navigator>
  );
}
