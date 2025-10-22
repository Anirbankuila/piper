import { Colors, Fonts } from "@/constants/theme";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Routes, { navigateScreen } from "../common/Routes";
import AskPiperInput from "../components/AskPiperInput/AskPiperInput";
import CommonButton from "../components/CommonButton/CommonButton";
import PiperModal from "../components/PiperModal/PiperModal";
import CustomRadio from "../components/Radiobutton/Radiobutton";
const { width, height } = Dimensions.get("window");
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

// Horizontal and vertical scaling
export const scale = (size: number) => (width / BASE_WIDTH) * size;
export const verticalScale = (size: number) => (height / BASE_HEIGHT) * size;
const LifeLogTab = () => {
  const [visible, setVisible] = useState(false);
  const [selectLog, setSelectLog] = useState<string | number>("");

  const options: { id: string; label: string }[] = [
    { id: "1", label: "Medical Summary" },
    { id: "2", label: "Education Summary" },
  ];
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Selected image:", result.assets[0].uri);
      // Upload or use the image here
    }
  };
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "videos",
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Selected video:", result.assets[0].uri);
      // Upload or use the video here
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topSec}>
        {/* <View style={styles.topSecLeft}>
          <Text style={styles.topSecHeading}>Big win? Hard day?</Text>
          <Text style={styles.topSecHeading}>Log it here .</Text>
          <Text style={styles.para}>
            Life Log captures the real moments as they happen.
          </Text>
        </View>
        <Image
          source={require("../../assets/images/log-img.png")} // put your logo inside assets folder
          style={styles.topBg}
          resizeMode="cover"
        /> */}
        <Image
          source={require("../../assets/images/lifelog-banner-image.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 136, // adjust banner height as needed
            resizeMode: "cover",
          }}
        />
      </View>
      <View style={styles.askPiperWrap}>
        <AskPiperInput onMicPress={() => setVisible(true)} />
        <PiperModal visible={visible} onClose={() => setVisible(false)} />
        <View style={styles.addItem}>
          <TouchableOpacity style={styles.eachItem} onPress={pickImage}>
            <Image
              source={require("../../assets/icons/gallery.png")} // put your logo inside assets folder
              style={[styles.icon, { tintColor: Colors.primary }]}
              resizeMode="cover"
            />
            <Text style={styles.eachItemTitle}>Add Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eachItem} onPress={pickVideo}>
            <Image
              source={require("../../assets/icons/camera.png")} // put your logo inside assets folder
              style={styles.icon}
              resizeMode="cover"
            />
            <Text style={styles.eachItemTitle}>Add Video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectLog}>
          <Text style={styles.selectText}>
            Select summary for this Life Log
          </Text>
          <CustomRadio
            options={options}
            selectedValue={selectLog}
            onSelect={(val: string | number) => setSelectLog(val)} // type match korbe
            optionStyle={styles.selectBox}
          />
        </View>
        <CommonButton
          onPress={() => navigateScreen(Routes.logSuccess)}
          backgroundColor="#000"
          color="#fff"
          title="Save Entry"
        />
        <CommonButton
          onPress={() => navigateScreen(Routes.allLogs)}
          style={styles.pastLogBtn}
          backgroundColor="#fff"
          color="#000"
          title="View Past Logs"
        />
      </View>
    </ScrollView>
  );
};

export default LifeLogTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  topSec: {
    backgroundColor: "#FFF3E9",
    // position: "relative",
    width: "100%",
    // flexDirection: "row",
    // alignItems: "center",
    // paddingVertical: verticalScale(20),
  },
  topSecLeft: {
    position: "relative",
    padding: scale(24),
    width: width * 0.7, // ✅ 70% of the screen width dynamically
  },
  topBg: {
    textAlign: "center",
    width: width * 0.42, // 30% of screen width
    height: height * 0.22, // 20% of screen height (adjust as needed)
    justifyContent: "flex-end",
    position: "absolute",
    alignItems: "flex-end",
    right: 0,
    bottom: 0,
  },
  topSecHeading: {
    fontSize: scale(19),
    fontFamily: Fonts.Bold,
    color: Colors.primary,
    fontWeight: "600",
    lineHeight: scale(25),
  },
  para: {
    fontSize: scale(14),
    fontFamily: Fonts.Regular,
    color: Colors.text,
    marginTop: verticalScale(4),
    lineHeight: scale(17),
  },
  askPiperWrap: {
    padding: 24,
  },
  addItem: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  eachItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingVertical: 12,
    width: "48%",
  },
  icon: {
    width: 24,
    height: 24,
  },
  eachItemTitle: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: "#141514",
    marginTop: 5,
  },
  selectLog: {
    marginTop: 15,
  },
  selectText: {
    fontSize: 14,
    color: "#141514",
    fontFamily: Fonts.SemiBold,
    marginBottom: 5,
  },
  selectBox: {
    backgroundColor: "#F2F2F7",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  pastLogBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
});
