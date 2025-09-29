import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CustomRadio from "@/app/components/Radiobutton/Radiobutton";
import { Colors, Fonts } from "@/constants/theme";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DocumentDetails = () => {
  const [docName, setDocName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    string | number | null
  >(null);

  const categories = [
    { id: 1, label: "Psychological Testing" },
    { id: 2, label: "Individualized Education Plan" },
    { id: 3, label: "Report cards" },
    { id: 4, label: "Progress Reports" },
    { id: 5, label: "Academic Therapy Reports" },
    { id: 6, label: "Executive Coaching" },
    { id: 7, label: "Tutor Reports" },
    { id: 8, label: "Standardized Testing Results" },
  ];

  const saveDocument = () => {
    const categoryLabel = categories.find(
      (cat) => cat.id === selectedCategory
    )?.label;
    console.log("Document saved:", { docName, category: categoryLabel });
    navigateScreen(Routes.documentSuccess);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.eachInputWrap}>
          <Text style={styles.labelText}>Select Category</Text>
          <CustomRadio
            optionStyle={styles.selectBoxOption}
            options={categories}
            selectedValue={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </View>

        <CommonButton
          title="Save Document"
          textStyle={styles.saveText}
          style={styles.saveBtn}
          onPress={saveDocument}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DocumentDetails;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    padding: 20,
  },
  eachInputWrap: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.black,
    marginBottom: 8,
  },
  selectBoxOption: {
    backgroundColor: "#F2F2F7",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  saveBtn: {
    backgroundColor: Colors.black,
    color: "#fff",
  },
  saveText: {
    color: "#fff",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
