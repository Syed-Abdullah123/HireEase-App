import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ATSCheckCard from "../components/ATSCheckCard";
import MyResumeComponent from "../components/MyResumeComponent";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ATSCheckCard />
      <View style={styles.midContainer}>
        <TouchableOpacity
          style={styles.mid1}
          onPress={() => navigation.navigate("Template")}
        >
          <Image
            source={require("../../assets/images/CV-pic-2.jpg")}
            style={styles.midImage}
          />
          <Text style={styles.text}>New resume</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mid1}
          onPress={() => navigation.navigate("Template")}
        >
          <Image
            source={require("../../assets/images/CV-pic-3.jpg")}
            style={styles.midImage}
          />
          <Text style={styles.text}>Cover letter</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>My Resumes</Text>
      <MyResumeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F3",
    padding: 15,
  },
  title: {
    fontFamily: "Lexend-Medium",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    color: "#333",
  },
  midContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    gap: 10,
  },
  mid1: {
    padding: 5,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#55555510",
  },
  midImage: {
    width: 40,
    height: 50,
    resizeMode: "contain",
  },
  text: {
    fontFamily: "Lexend-Regular",
    fontSize: 15,
    color: "#333",
  },
});
