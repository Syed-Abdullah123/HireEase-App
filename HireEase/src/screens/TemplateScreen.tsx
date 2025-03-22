import React, { useState, useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Modal,
  Dimensions,
  Pressable,
  Keyboard,
} from "react-native";
import SearchComponent from "../components/SearchComponent";
import { templates } from "../dummydata/resumeTemplates";
import PrimaryButton from "../components/PrimaryButton";

const { width, height } = Dimensions.get("window");

interface Template {
  id: number;
  title: string;
  style: string;
  image: any;
}

const templateStyles = [
  { id: 1, name: "All" },
  { id: 2, name: "Professional" },
  { id: 3, name: "Minimalist" },
  { id: 4, name: "Modern" },
  { id: 5, name: "Simple" },
];

export default function TemplateScreen() {
  const [activeId, setActiveId] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  // Function to clear all filters
  const handleClearFilters = () => {
    setSearchText("");
    setActiveId(1); // Reset to "All" category
  };

  // Filter templates based on selected category and search text
  const filteredTemplates = useMemo(() => {
    return templates.filter((template: Template) => {
      const matchesCategory =
        activeId === 1 ||
        template.style ===
          templateStyles.find((style) => style.id === activeId)?.name;

      const matchesSearch =
        searchText === "" ||
        template.title.toLowerCase().includes(searchText.toLowerCase()) ||
        template.style.toLowerCase().includes(searchText.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeId, searchText]);

  const renderItem = ({ item }: { item: Template }) => (
    <Pressable
      style={styles.templateContainer}
      onPress={() => setSelectedTemplate(item)}
    >
      <View style={styles.template}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.templateStyle}>{item.style}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <SearchComponent
        searchText={searchText}
        onSearchChange={setSearchText}
        onClear={handleClearFilters}
        placeholder="Search by template name or style"
      />

      {/* Scrollable category row */}
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
        >
          {templateStyles.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.item, activeId === item.id && styles.activeItem]}
              onPress={() => setActiveId(item.id)}
            >
              <Text
                style={[styles.text, activeId === item.id && styles.activeText]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Grid layout for templates */}
      <FlatList
        data={filteredTemplates}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No templates found</Text>
            <Text style={styles.emptySubtext}>
              Try adjusting your search or category filter
            </Text>
          </View>
        )}
        keyboardShouldPersistTaps="handled"
        overScrollMode="never"
      />

      {/* Template Detail Modal */}
      <Modal
        visible={selectedTemplate !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedTemplate(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedTemplate?.title}</Text>
              <TouchableOpacity
                onPress={() => setSelectedTemplate(null)}
                style={styles.closeButton}
                hitSlop={15}
              >
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={selectedTemplate?.image}
              style={styles.modalImage}
              resizeMode="contain"
            />
            <View style={styles.modalFooter}>
              <Text style={styles.modalStyle}>
                Style: {selectedTemplate?.style}
              </Text>
              <PrimaryButton
                title="Use This Template"
                onPress={() => {}}
                backgroundColor="#5B2333"
                textColor="#fff"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4F3",
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 10,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#55555510",
    marginBottom: 10,
  },
  activeItem: {
    backgroundColor: "#5B2333",
  },
  text: {
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    color: "#999",
  },
  activeText: {
    fontFamily: "Lexend-Regular",
    color: "#fff",
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 10,
  },
  templateContainer: {
    flex: 1,
    marginBottom: 15,
  },
  template: {
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Lexend-Bold",
    fontSize: 14,
    color: "#5b2333",
    textAlign: "center",
  },
  templateStyle: {
    fontFamily: "Lexend-Regular",
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  emptyText: {
    fontFamily: "Lexend-Medium",
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  emptySubtext: {
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    color: "#666",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: width * 0.95,
    maxHeight: height * 0.8,
    borderRadius: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  modalTitle: {
    fontFamily: "Lexend-Bold",
    fontSize: 20,
    color: "#333",
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    fontSize: 24,
    color: "#666",
  },
  modalImage: {
    width: "100%",
    height: height * 0.5,
    marginBottom: 20,
  },
  modalFooter: {
    alignItems: "center",
  },
  modalStyle: {
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
});
