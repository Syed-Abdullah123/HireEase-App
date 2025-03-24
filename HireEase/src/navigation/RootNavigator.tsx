import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import ResumeTemplate from "../templates/resume1/resume";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Resume" component={ResumeTemplate} />
    </Stack.Navigator>
  );
}
