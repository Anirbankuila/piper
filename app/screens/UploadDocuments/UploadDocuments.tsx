import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import CustomRadio from "@/app/components/Radiobutton/Radiobutton";
import { Colors, Fonts } from "@/constants/theme";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";

const UploadDocs = () => {
  const router = useRouter();

  const [docName, setDocName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    string | number | null
  >(null);
  const [fileUri, setFileUri] = useState<string | null>(null);

  const categories = [
    { id: 1, label: "School" },
    { id: 2, label: "Medical" },
    { id: 3, label: "Mental Health" },
    { id: 4, label: "Therapy" },
  ];

  const saveDocument = () => {
    // if (!docName || selectedCategory === null || !fileUri) {
    //   alert("Please choose a file, enter document name and select category");
    //   return;
    // }

    const categoryLabel = categories.find(
      (cat) => cat.id === selectedCategory
    )?.label;
    console.log("Document saved:", { docName, category: categoryLabel, fileUri });
    navigateScreen(Routes.documentCategory);
  };

  const addFile = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // not only images
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setFileUri(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <TouchableOpacity style={styles.addAnotherWrap} onPress={addFile}>
            <PlusCircleIcon width={42} height={42} style={styles.addIcon} />
            <Text style={styles.addAnotherText}>
              {fileUri ? "Change File" : "Choose File"}
            </Text>
          </TouchableOpacity>

          {fileUri && (
            <View style={styles.previewWrap}>
              <Image
                source={{ uri: fileUri }}
                style={{ width: 100, height: 100, borderRadius: 8 }}
              />
              <Text numberOfLines={1} style={styles.fileName}>
                {fileUri.split("/").pop()}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.eachInputWrap}>
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

        <CommonButton
          title="Upload Document"
          textStyle={styles.saveText}
          style={styles.saveBtn}
          onPress={saveDocument}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UploadDocs;

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
  addAnotherWrap: {
    padding: 12,
    backgroundColor: "#F3F5F7",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 12,
    borderWidth: 1,
    borderColor: "#C1C1C1",
    borderStyle: "dashed",
    marginTop: 18,
    marginBottom: 10,

  },
  addIcon: {
    color: Colors.blue_link,
    fontSize: 42,
    width: 42,
    height: 42,
  },
  addAnotherText: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.text,
    marginTop:10
  },
  previewWrap: {
    marginTop: 10,
    alignItems: "flex-start",
  },
  fileName: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: Fonts.Medium,
    color: Colors.black,
    maxWidth: 200,
  },
});
