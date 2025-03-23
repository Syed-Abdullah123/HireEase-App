import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface TemplateRendererProps {
  id: number;
  title: string;
  style: string;
}

const TemplateRenderer: React.FC<TemplateRendererProps> = ({
  id,
  title,
  style,
}) => {
  // Function to render different templates based on style or id
  const renderTemplate = () => {
    switch (style) {
      case "Minimalist":
        return (
          <View style={[styles.templateContainer, styles.modern]}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.contact}>
              johndoe@email.com | +123 456 7890
            </Text>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              <Text style={styles.sectionContent}>
                Software Engineer at XYZ Corp.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.sectionContent}>
                B.Sc. in Computer Science
              </Text>
            </View>
          </View>
        );

      case "Professional":
        return (
          <View style={[styles.templateContainer, styles.classic]}>
            <Text style={styles.name}>Jane Doe</Text>
            <Text style={styles.contact}>
              jane.doe@email.com | +987 654 3210
            </Text>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              <Text style={styles.sectionContent}>
                Senior Manager at ABC Ltd.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.sectionContent}>MBA in Finance</Text>
            </View>
          </View>
        );

      default:
        return (
          <View style={[styles.templateContainer, styles.defaultTemplate]}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.contact}>
              contact@example.com | +000 000 0000
            </Text>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              <Text style={styles.sectionContent}>Job Role & Company</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.sectionContent}>Degree & University</Text>
            </View>
          </View>
        );
    }
  };

  return <>{renderTemplate()}</>;
};

const styles = StyleSheet.create({
  templateContainer: {
    width: width / 2.3,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 10,
  },
  modern: {
    borderLeftWidth: 5,
    borderLeftColor: "#3498db",
  },
  classic: {
    borderLeftWidth: 5,
    borderLeftColor: "#e74c3c",
  },
  defaultTemplate: {
    borderLeftWidth: 5,
    borderLeftColor: "#95a5a6",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  contact: {
    fontSize: 10,
    color: "#555",
  },
  section: {
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#222",
  },
  sectionContent: {
    fontSize: 10,
    color: "#444",
  },
});

export default TemplateRenderer;
