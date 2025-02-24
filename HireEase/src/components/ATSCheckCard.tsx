import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function ATSCheckCard() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>Optimize Your Resume with AI!</Text>
        <Image
          source={require("../../assets/images/star.png")}
          style={styles.starIcon}
        />
      </View>
      <Text style={styles.text1}>
        Upload your resume and get an instant{" "}
        <Text style={{ fontWeight: "bold" }}>ATS Score</Text> to see how well it
        performs for job applications. Let AI help you stand out!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}>Upload Now</Text>
      </TouchableOpacity>

      {/* Icons container */}
      {/* <Image
        source={require("../../assets/images/New Project.png")}
        style={styles.iconImage}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 170,
    backgroundColor: "#5B2333",
    padding: 15,
    borderRadius: 10,
  },
  text: {
    fontFamily: "Lexend-Medium",
    fontSize: 16,
    color: "#F7F4F3",
    zIndex: 1,
  },
  text1: {
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    color: "#F7F4F380",
    zIndex: 1,
  },
  button: {
    width: "100%",
    position: "absolute",
    backgroundColor: "#F7F4F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    bottom: 15,
    zIndex: 1,
  },
  buttonText: {
    fontFamily: "Lexend-Medium",
    fontSize: 16,
    color: "#5B2333",
    zIndex: 1,
  },
  iconImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 10,
    left: 10,
    resizeMode: "contain",
  },
  starIcon: {
    position: "absolute",
    width: 22,
    height: 22,
    right: 15,
    bottom: 5,
  },
});
