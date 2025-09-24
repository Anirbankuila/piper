import { Colors, Fonts } from "@/constants/theme";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AskPiperInput from "../components/AskPiperInput/AskPiperInput";
import CommonButton from "../components/CommonButton/CommonButton";
import Header from "../components/Header/Header";
import PiperModal from "../components/PiperModal/PiperModal";
import CustomRadio from "../components/Radiobutton/Radiobutton";
const LifeLogTab = () => {
  const insets = useSafeAreaInsets();
  console.log(insets)
  const [visible, setVisible] = useState(false);
  const [selectLog, setSelectLog] = useState<string | number>('');

  const options: { id: string; label: string }[] = [
    { id: "1", label: "Medical Summary" },
    { id: "2", label: "Education Summary" },
  ];
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
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
      mediaTypes: 'videos',
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
      <StatusBar
        barStyle="dark-content"   // text/icons will be dark (black/gray)
        backgroundColor="#FFF3E9" // same as your top background
      />
      <View style={{ paddingTop: insets.top - 10, backgroundColor: "#FFF3E9" }}>
        <Header backgroundColor="#FFF3E9" />
      </View>
      <View style={styles.topSec}>
        <View style={styles.topSecLeft}>
          <Text style={styles.topSecHeading}>Big win? Hard day? Log it here.</Text>
          <Text style={styles.para}>Life Log captures the real moments as they happen.</Text>
        </View>
        <Image
          source={require('../../assets/images/topBg.png')} // put your logo inside assets folder
          style={styles.topBg}
          resizeMode='cover'
        />
      </View>
      <View style={styles.askPiperWrap}>
        <AskPiperInput onMicPress={() => setVisible(true)} />
        <PiperModal visible={visible} onClose={() => setVisible(false)} />
        <View style={styles.addItem}>
          <TouchableOpacity style={styles.eachItem} onPress={pickImage}>
            <Image
              source={require('../../assets/icons/gallery.png')} // put your logo inside assets folder
              style={styles.icon}
              resizeMode='cover'
            />
            <Text style={styles.eachItemTitle}>Add Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eachItem} onPress={pickVideo}>
            <Image
              source={require('../../assets/icons/camera.png')} // put your logo inside assets folder
              style={styles.icon}
              resizeMode='cover'
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
          onPress={() => {
            router.push("/screens/LogSuccess/LogSuccess")
          }}
          backgroundColor="#000"
          color="#fff"
          title="Save Entry"
        />
        <CommonButton onPress={() => {
          // function body, e.g. save entry
          router.push("/screens/AllLogs/AllLogs")
        }} style={styles.pastLogBtn} backgroundColor="#fff" color="#000" title="View Past Logs" />
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
    position: 'relative',
    marginTop: -5,
    width: '100%'
  },
  topSecLeft: {
    position: 'relative',
    padding: 24,
    width: 240
  },
  topBg: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    height: 150,
    zIndex: -1
  },
  topSecHeading: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: Colors.primary
  },
  para: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: Colors.text,
    marginTop: 5
  },
  askPiperWrap: {
    padding: 24
  },
  addItem: {
    position: 'relative',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 30
  },
  eachItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingVertical: 12,
    width: '48%'
  },
  icon: {
    width: 24,
    height: 24
  },
  eachItemTitle: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: '#141514',
    marginTop: 5
  },
  selectLog: {
    marginTop: 15
  },
  selectText: {
    fontSize: 14,
    color: "#141514",
    fontFamily: Fonts.SemiBold,
    marginBottom: 5
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
    borderColor: '#000'
  }
});
