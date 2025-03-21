import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { PlatformPressable } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import your Custom SVG's
import HomeOutlineIcon from "../../assets/svg/HomeOutline";
import HomeFilledIcon from "../../assets/svg/HomeFilled";
import DocumentOutlineIcon from "../../assets/svg/DocumentOutline";
import DocumentFilledIcon from "../../assets/svg/DocumentFilled";
import SettingOutlineIcon from "../../assets/svg/SettingOutline";
import SettingFilledIcon from "../../assets/svg/SettingFilled";

import HomeScreen from "../screens/HomeScreen";
import TemplateScreen from "../screens/TemplateScreen";
import SettingScreen from "../screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused ? (
              <HomeFilledIcon width={size} height={size} fill={color} />
            ) : (
              <HomeOutlineIcon width={size} height={size} fill={color} />
            );
          } else if (route.name === "Template") {
            icon = focused ? (
              <DocumentFilledIcon width={size} height={size} fill={color} />
            ) : (
              <DocumentOutlineIcon width={size} height={size} fill={color} />
            );
          } else if (route.name === "Settings") {
            icon = focused ? (
              <SettingFilledIcon width={size} height={size} fill={color} />
            ) : (
              <SettingOutlineIcon width={size} height={size} fill={color} />
            );
          }

          return icon;
        },
        tabBarActiveTintColor: "#5B2333",
        tabBarInactiveTintColor: "#aaa",
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            android_ripple={{ color: "transparent" }} // Disables the ripple effect for Android
          />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.headerIcon}
              onPress={() => console.log("Notification icon pressed")}
            >
              <Ionicons name="notifications-outline" size={20} color="#555" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Template"
        component={TemplateScreen}
        options={{ title: "Templates" }}
      />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#F7F4F3",
    height: 55,
    borderRadius: 30,
    // shadowColor: "#5B2333",
    elevation: 3,
    width: "60%",
    alignSelf: "center",
    bottom: 10,
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    fontFamily: "Lexend-Regular",
    fontSize: 12,
  },
  headerStyle: {
    elevation: 0,
    backgroundColor: "#F7F4F3",
  },
  headerTitleStyle: {
    fontFamily: "Lexend-Bold",
    color: "#333",
  },
  headerIcon: {
    padding: 10,
    right: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#55555530",
  },
});
