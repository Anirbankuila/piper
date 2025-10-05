import Routes, { navigateScreen } from "@/app/common/Routes";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import Header from "@/app/components/Header/Header";
import Searchbar from "@/app/components/Searchbar/Searchbar";
import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
const { width } = Dimensions.get("window");
const tabs = [
  {
    name: "Home",
    iconPath: require("../../../assets/icons/home.png"),
    onTabPress: () => {
      navigateScreen(Routes.homeTab);
    },
  },
  {
    name: "LifeLog",
    iconPath: require("../../../assets/icons/booknew.png"),
    onTabPress: () => {
      navigateScreen(Routes.lifeLogTab);
    },
  },
  {
    name: "Piper",
    iconPath: require("../../../assets/icons/pipertabicon.png"),
    onTabPress: () => {
      navigateScreen(Routes.lifeLogTab);
    },
  },
  {
    name: "Calendar",
    iconPath: require("../../../assets/icons/calendartab.png"),
    onTabPress: () => {
      navigateScreen(Routes.calendarTab);
    },
  },
  {
    name: "Profile",
    iconPath: require("../../../assets/images/profile.png"),
    onTabPress: () => {
      navigateScreen(Routes.profileTab);
    },
  },
];
const Medicine = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const insets = useSafeAreaInsets();
  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.container}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor={"#D2FFF6"} translucent={true} />
        <View
          style={[
            Styles.headerWrapper,
            {
              paddingTop: insets.top - 10,
            },
          ]}
        >
          <Header backgroundColor={"#D2FFF6"} />
          <ImageBackground
            source={require("../../../assets/images/medicine-bg-header.png")}
            style={Styles.piperIntroContainer}
            contentFit="cover"
          >
            <Image
              source={require("../../../assets/images/Alex-personal 1.png")}
              style={Styles.alexPersonalImg}
            />
            <View style={Styles.messageWrapper}>
              <View style={Styles.messageBox}>
                <Text style={Styles.title}>
                  Track and Manage Medications in One Spot
                </Text>
                <Text style={Styles.subtitle}>
                  Start by adding medicines here, I can set reminders to take
                  them or refill them.
                </Text>
              </View>
              <View style={Styles.pointer} />
            </View>
          </ImageBackground>
        </View>
        <View style={Styles.mainContent}>
          <Searchbar
            placeholderText="Search Medicine"
            iconTintColor={Colors.grey}
            containerStyle={Styles.searchInput}
            showMicIcon={false}
          />
          <View style={Styles.btnSection}>
            <View style={Styles.pushNotification}>
              <Text style={Styles.pushNotifyText}>
                Enable Push Notification
              </Text>
              <Switch
                trackColor={{ false: "#d3d3d3", true: "#34C759" }}
                thumbColor={isEnabled ? "#34C759" : "#f4f3f4"}
                ios_backgroundColor="#d3d3d3"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={Styles.medicineDetails}>
              <View style={Styles.medicineBtn}>
                <TouchableOpacity style={Styles.circleBtn}>
                  <Ionicons name="add" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text>Add Medicine</Text>
              </View>
              <View style={Styles.medicineBtn}>
                <TouchableOpacity style={Styles.circleBtn}>
                  <Image
                    source={require("../../../assets/icons/finger-circle.png")}
                    style={Styles.reminderIcon}
                    tintColor={"#FA114F"}
                  ></Image>
                </TouchableOpacity>
                <Text>Set Reminder</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <CustomBottomTab activeTab={""} tabs={tabs} />
    </>
  );
};

export default Medicine;

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
  },
  headerWrapper: {
    backgroundColor: "#D2FFF6",
  },
  piperIntroContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingHorizontal: 22,
  },
  alexPersonalImg: {
    width: 126,
    height: 180,
    resizeMode: "contain",
  },
  piperCard: {
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
  },
  piperContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageWrapper: {
    flex: 1,
    position: "relative",
    flexShrink: 1,
  },
  messageBox: {
    backgroundColor: "white",
    padding: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
  },
  pointer: {
    position: "absolute",
    bottom: -4,
    width: 0,
    left: -7,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white", // same as message box background
    transform: [{ rotate: "160deg" }], // gives diagonal shape
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.SemiBold,
    color: Colors.primary,
    lineHeight: 16,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 10,
    fontFamily: Fonts.Regular,
    color: Colors.text,
    lineHeight: 14,
  },
  mainContent: {
    marginTop: 15,
    paddingHorizontal: 22,
  },
  searchInput: {
    backgroundColor: Colors.surface_bg,
    borderWidth: 0,
    borderRadius: 10,
  },
  btnSection: {
    marginVertical: 10,
  },
  pushNotification: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pushNotifyText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.SemiBold,
  },
  medicineDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "12%",
  },
  medicineBtn: {
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
  },
  circleBtn: {
    backgroundColor: Colors.surface_bg,
    borderRadius: "50%",
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  reminderIcon: {
    height: 26,
    width: 26,
  },
});
