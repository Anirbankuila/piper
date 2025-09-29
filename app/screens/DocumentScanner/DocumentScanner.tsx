import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors } from "@/constants/theme";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, View } from "react-native";

const DocumentScanner = () => {
  const [scannedImages, setScannedImages] = useState<string[]>([]);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const router = useRouter();

  const openCamera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
        aspect: [4, 3],
      });

      if (!result.canceled && result.assets.length > 0) {
        setCapturedImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Error opening camera", String(error));
    }
  };

  useEffect(() => {
    openCamera();
  }, []);

  const saveImage = () => {
    if (capturedImage) {
      setScannedImages([...scannedImages, capturedImage]);
      setCapturedImage(null);

      navigateScreen({
        pathname: `/${Routes.docDetails}`,
        params: { imageUri: capturedImage },
      });
    }
  };

  const retakeImage = () => {
    setCapturedImage(null);
    openCamera();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {capturedImage && (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            source={{ uri: capturedImage }}
            style={styles.preview}
            resizeMode="contain"
          />
          <View style={styles.buttonRow}>
            <CommonButton
              title="Save"
              textStyle={styles.saveText}
              style={styles.saveBtn}
              onPress={saveImage}
            />
            <CommonButton
              title="Retake"
              style={styles.retakeBtn}
              onPress={retakeImage}
            />
          </View>
        </View>
      )}

      {/* Show previously scanned images if needed */}
      {scannedImages.map((uri, index) => (
        <Image
          key={index}
          source={{ uri }}
          style={styles.preview}
          resizeMode="contain"
        />
      ))}
    </ScrollView>
  );
};

export default DocumentScanner;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    alignItems: "center",
    padding: 20,
  },
  preview: {
    width: "100%",
    height: 435,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  retakeBtn: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.black,
    marginTop: 10,
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
