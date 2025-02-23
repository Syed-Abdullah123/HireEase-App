import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeOutlineIcon from "../../assets/svg/HomeOutline";
import HomeFilledIcon from "../../assets/svg/HomeFilled";
import DocumentOutlineIcon from "../../assets/svg/DocumentOutline";
import DocumentFilledIcon from "../../assets/svg/DocumentFilled";
import SettingOutlineIcon from "../../assets/svg/SettingOutline";
import SettingFilledIcon from "../../assets/svg/SettingFilled";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeOutlineIcon />
      <HomeFilledIcon />
      <DocumentOutlineIcon />
      <DocumentFilledIcon />
      <SettingOutlineIcon />
      <SettingFilledIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F3",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});
