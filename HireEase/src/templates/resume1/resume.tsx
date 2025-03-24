import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResumeTemplate = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>OLIVIA WILSON</Text>
        <Text style={styles.jobTitle}>MARKETING MANAGER</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <View style={[styles.section, { paddingRight: 18 }]}>
            <Text style={styles.sectionTitle}>CONTACT</Text>
            <Text style={styles.text}>+123-456-7890</Text>
            <Text style={styles.text}>hello@reallygreatsite.com</Text>
            <Text style={styles.text}>123 Anywhere St., Any City</Text>
            <Text style={styles.text}>www.reallygreatsite.com</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <Text style={[styles.subTitle, { marginBottom: -7 }]}>
              2029 - 2030
            </Text>
            <Text style={styles.subTitle}>BORCELLE UNIVERSITY</Text>
            <Text style={styles.text}>Master of Business Management</Text>
            <Text style={[styles.subTitle, { marginBottom: -7 }]}>
              2025 - 2029
            </Text>
            <Text style={styles.subTitle}>BORCELLE UNIVERSITY</Text>
            <Text style={styles.text}>Bachelor of Business Management</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <Text style={styles.text}>• Project Management</Text>
            <Text style={styles.text}>• Public Relations</Text>
            <Text style={styles.text}>• Leadership</Text>
            <Text style={styles.text}>• Effective Communication</Text>
          </View>

          <View style={[styles.section, { borderBottomWidth: 0 }]}>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            <Text style={styles.text}>English: Fluent</Text>
            <Text style={styles.text}>French: Fluent</Text>
            <Text style={styles.text}>German: Basics</Text>
            <Text style={styles.text}>Spanish: Intermediate</Text>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROFILE SUMMARY</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate consectetur ipsum praesentium minima quas vero nobis!
              Ut, nemo omnis, consectetur assumenda asperiores ad ipsam
              provident odio nesciunt, beatae nobis repellat? Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Quisquam, a recusandae
              dolorum, quaerat impedit aliquam quae molestiae fugit similique
              quibusdam sequi tenetur ratione? Iusto alias voluptate quos
              consequatur aut eligendi.
            </Text>
          </View>

          <View style={[styles.section, { borderBottomWidth: 0 }]}>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
            <Text style={[styles.subTitle, { fontSize: 9 }]}>
              Borchelle Studio (2030 - Present)
            </Text>
            <Text style={styles.subTitleRole}>
              Marketing Manager & Specialist
            </Text>
            <Text style={styles.text}>
              • Led successful marketing strategies.
            </Text>
            <Text style={styles.text}>• Managed cross-channel campaigns.</Text>
            <Text style={styles.text}>• Managed social media accounts.</Text>

            <Text style={styles.subTitle}>Fauget Studio (2025 - 2029)</Text>
            <Text style={styles.subTitleRole}>
              Marketing Manager & Specialist
            </Text>
            <Text style={styles.text}>• Conducted market research.</Text>
            <Text style={styles.text}>• Developed marketing content.</Text>
            <Text style={styles.text}>• Managed social media accounts.</Text>

            <Text style={styles.subTitle}>Fauget Studio (2020 - 2024)</Text>
            <Text style={styles.subTitleRole}>
              Marketing Manager & Specialist
            </Text>
            <Text style={styles.text}>• Conducted market research.</Text>
            <Text style={styles.text}>• Developed marketing content.</Text>
            <Text style={styles.text}>• Managed social media accounts.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fafafa",
    borderRadius: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    borderTopWidth: 1.5,
    borderColor: "#ccc",
    paddingTop: 20,
  },
  name: {
    fontFamily: "Lexend-Bold",
    fontSize: 24,
  },
  jobTitle: {
    fontFamily: "Lexend-Regular",
    fontSize: 16,
    color: "#999",
  },
  content: {
    flexDirection: "row",
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: "#ccc",
  },
  leftColumn: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    borderRightWidth: 1.5,
    borderColor: "#ccc",
  },
  rightColumn: {
    flex: 2,
    paddingLeft: 10,
    paddingTop: 10,
  },
  section: {
    borderBottomWidth: 1.5,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontFamily: "Lexend-Bold",
    fontSize: 12,
    marginBottom: 5,
    color: "#0a0a0a",
  },
  subTitle: {
    fontFamily: "Lexend-Medium",
    fontSize: 8,
    marginTop: 5,
    color: "#555",
  },
  text: {
    fontFamily: "Lexend-Regular",
    fontSize: 8,
    color: "#999",
  },
  subTitleRole: {
    fontFamily: "Lexend-Medium",
    fontSize: 8,
    color: "#999",
    marginBottom: 5,
  },
});

export default ResumeTemplate;
