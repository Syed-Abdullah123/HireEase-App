import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";

import { Provider as PaperProvider } from "react-native-paper";

const theme = {
  fonts: {
    regular: { fontFamily: "Lexend-Regular" },
    medium: { fontFamily: "Lexend-Medium" },
    light: { fontFamily: "Lexend-Light" },
    bold: { fontFamily: "Lexend-Bold" },
    bodySmall: { fontFamily: "Lexend-Regular" },
    bodyMedium: { fontFamily: "Lexend-Regular" },
    bodyLarge: { fontFamily: "Lexend-Regular" },
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lexend-Light": require("./assets/fonts/Lexend-Light.ttf"),
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-Medium": require("./assets/fonts/Lexend-Medium.ttf"),
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" backgroundColor="#F7F4F3" />
      </NavigationContainer>
    </PaperProvider>
  );
}
