import CommonInput from "@/app/components/CommonInput/CommonInput";
import CustomRadio from "@/app/components/Radiobutton/Radiobutton";
import { Colors, Fonts } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const DocumentDetails = () => {
  const router = useRouter();

  const [docName, setDocName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | number | null>(null);

  const categories = [
    { id: 1, label: "Medical" },
    { id: 2, label: "School" },
    { id: 3, label: "Other" },
  ];

  const saveDocument = () => {
    if (!docName || selectedCategory === null) {
      alert("Please enter document name and select category");
      return;
    }

    const categoryLabel = categories.find(cat => cat.id === selectedCategory)?.label;
    console.log("Document saved:", { docName, category: categoryLabel });

    // Navigate to next screen
    // router.push("/screens/NextScreen");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.eachInputWrap}>
          <Text style={styles.labelText}>Enter Document Details</Text>
          <CommonInput
            placeholder="Document Name"
            onChangeText={setDocName}
            value={docName}
            keyboardType="default"
          />
        </View>

        <View style={styles.eachInputWrap}>
          <Text style={styles.labelText}>Select Category</Text>
          <CustomRadio
            optionStyle={styles.selectBoxOption}
            options={categories}
            selectedValue={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={saveDocument}>
          <Text style={styles.btnText}>Save Document</Text>
        </TouchableOpacity>
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
    marginBottom: 16,
  },
  saveBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
