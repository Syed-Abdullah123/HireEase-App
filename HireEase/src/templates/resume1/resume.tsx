import React, { forwardRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ResumeTemplateProps {
  name?: string;
  jobTitle?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
    website?: string;
  };
  education?: Array<{
    period: string;
    institution: string;
    degree: string;
  }>;
  skills?: string[];
  languages?: Array<{
    language: string;
    proficiency: string;
  }>;
  profileSummary?: string;
  workExperience?: Array<{
    company: string;
    period: string;
    role: string;
    responsibilities: string[];
  }>;
}

const ResumeTemplate = forwardRef<View, ResumeTemplateProps>(
  (
    {
      name = "YOUR NAME HERE",
      jobTitle = "MARKETING MANAGER",
      contactInfo = {
        phone: "+123-456-7890",
        email: "hello@reallygreatsite.com",
        address: "123 Anywhere St., Any City",
        website: "www.reallygreatsite.com",
      },
      education = [
        {
          period: "2029 - 2030",
          institution: "UNIVERSITY NAME",
          degree: "Master of Business Management",
        },
        {
          period: "2025 - 2029",
          institution: "UNIVERSITY NAME",
          degree: "Bachelor of Business Management",
        },
      ],
      skills = [
        "Project Management",
        "Public Relations",
        "Leadership",
        "Effective Communication",
      ],
      languages = [
        { language: "English", proficiency: "Fluent" },
        { language: "French", proficiency: "Fluent" },
        { language: "German", proficiency: "Basics" },
        { language: "Spanish", proficiency: "Intermediate" },
      ],
      profileSummary = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate consectetur ipsum praesentium minima quas vero nobis! Ut, nemo omnis, consectetur assumenda asperiores ad ipsam provident odio nesciunt, beatae nobis repellat?",
      workExperience = [
        {
          company: "CURRENT COMPANY NAME",
          period: "2030 - Present",
          role: "Marketing Manager & Specialist",
          responsibilities: [
            ". Led successful marketing strategies.",
            ". Managed cross-channel campaigns.",
            ". Managed social media accounts.",
          ],
        },
        {
          company: "PREVIOUS COMPANY NAME",
          period: "2025 - 2029",
          role: "Marketing Manager & Specialist",
          responsibilities: [
            ". Conducted market research.",
            ". Developed marketing content.",
            ". Managed social media accounts.",
          ],
        },
        {
          company: "PREVIOUS COMPANY NAME",
          period: "2020 - 2024",
          role: "Marketing Manager & Specialist",
          responsibilities: [
            ". Led successful marketing strategies.",
            ". Managed cross-channel campaigns.",
            ". Managed social media accounts.",
          ],
        },
      ],
    },
    ref
  ) => {
    return (
      <SafeAreaView ref={ref} style={styles.page}>
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            {/* Left Column */}
            <View style={styles.leftColumn}>
              <View style={[styles.section, { paddingRight: 18 }]}>
                <Text style={styles.sectionTitle}>CONTACT</Text>
                <Text style={styles.text}>{contactInfo.phone}</Text>
                <Text style={styles.text}>{contactInfo.email}</Text>
                <Text style={styles.text}>{contactInfo.address}</Text>
                <Text style={styles.text}>{contactInfo.website}</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>EDUCATION</Text>
                {education.map((edu, index) => (
                  <React.Fragment key={index}>
                    <Text style={[styles.subTitle, { marginBottom: -7 }]}>
                      {edu.period}
                    </Text>
                    <Text style={styles.subTitle}>{edu.institution}</Text>
                    <Text style={styles.text}>{edu.degree}</Text>
                  </React.Fragment>
                ))}
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>SKILLS</Text>
                {skills.map((skill, index) => (
                  <Text key={index} style={styles.text}>
                    • {skill}
                  </Text>
                ))}
              </View>

              <View style={[styles.section, { borderBottomWidth: 0 }]}>
                <Text style={styles.sectionTitle}>LANGUAGES</Text>
                {languages.map((lang, index) => (
                  <Text key={index} style={styles.text}>
                    {lang.language}: {lang.proficiency}
                  </Text>
                ))}
              </View>
            </View>

            {/* Right Column */}
            <View style={styles.rightColumn}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>PROFILE SUMMARY</Text>
                <Text style={styles.text}>{profileSummary}</Text>
              </View>

              <View style={[styles.section, { borderBottomWidth: 0 }]}>
                <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
                {workExperience.map((exp, index) => (
                  <React.Fragment key={index}>
                    <Text style={[styles.subTitle, { fontSize: 9 }]}>
                      {exp.company} ({exp.period})
                    </Text>
                    <Text style={styles.subTitleRole}>{exp.role}</Text>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <Text key={respIndex} style={styles.text}>
                        {resp}
                      </Text>
                    ))}
                  </React.Fragment>
                ))}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 50,
  },
  container: {
    padding: 20,
    backgroundColor: "#f7f7f7",
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
