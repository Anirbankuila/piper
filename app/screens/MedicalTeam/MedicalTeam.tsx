import { primaryTabs } from "@/app/common/primaryTabs";
import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import ADHDTrackingChart from "@/app/components/ProgressTrack/ProgressTrack";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;
const chartWidth = screenWidth - 80; // leave space for left labels

const MedicalTeam = () => {
  const medications = [
    { name: "Tricyclic 5 mg", start: 0, end: 2, color: "#f88" },
    { name: "Adderall (Oral Pill) 5 mg", start: 2, end: 5, color: "#72aaff" },
  ];

  const therapies = [
    { name: "Appointment 1", start: 0, end: 2, color: "#f88" },
    { name: "Appointment 2", start: 2, end: 5, color: "#72aaff" },
  ];

  const chartHeight = 220;
  const months = ["May", "June", "July", "Aug", "Sep", "Oct"];
  const severity = [
    { label: "Minimal", color: "#00B36B" },
    { label: "Moderate", color: "#FFAA00" },
    { label: "Severe", color: "#FF3B30" },
  ];
  const insets = useSafeAreaInsets();
  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header */}
        <StatusBar backgroundColor={Colors.bg} />
        <View style={styles.headingTitleSection}>
          <Text style={styles.headerTitle}>Johnny’s Medical Summary</Text>
          <Text style={styles.headingText}>
            This summary has been collected and organized by Piper, a health and
            care concierge, powered by AI.
          </Text>
        </View>
        <ADHDTrackingChart />

        <View style={styles.lifeLogSection}>
          <Text style={styles.lifeLogTitle}>Life Logs</Text>
          <Text style={styles.lifeLogDesc}>
            Capturing the story between appointments.
          </Text>

          <View style={styles.card}>
            <View style={styles.leftContainer}>
              <Text style={styles.dateText}>23 Sep 2025 • 09:23 AM</Text>
              <Text style={styles.medicineRefText}>Refused to take meds</Text>
              <View style={styles.statusContainer}>
                <View style={styles.statusDot}></View>
                <Text style={styles.statusText}>Meltdown</Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.reactionSection}>
                <Image
                  source={require("../../../assets/images/Emoji.png")}
                  style={styles.angryImg}
                />
              </View>
            </View>
          </View>

          <CommonButton
            title={"Share"}
            style={styles.shareBtn}
            textStyle={{ color: Colors.bg }}
            onPress={() => navigateScreen(Routes.doctorList)}
          />
        </View>
      </ScrollView>
      <CustomBottomTab activeTab="" tabs={primaryTabs} />
    </>
  );
};

export default MedicalTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  headerWrapper: {
    // flex: 1,
    backgroundColor: Colors.bg,
  },
  header: {
    alignItems: "center",
    marginVertical: 15,
  },
  headerText: {
    fontSize: 10.98,
    fontFamily: Fonts.SemiBold,
    fontWeight: "700",
  },
  monthLabels: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 5,
    marginTop: 10,
  },
  monthText: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.main_purple,
  },
  chart: {
    marginVertical: 10,
    alignSelf: "center",
  },
  leftLabels: {
    width: 60,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginRight: 10,
  },
  rotatedLabel: {
    fontSize: 12,
    fontWeight: "500",
    transform: [{ rotate: "-90deg" }],
    marginBottom: 10,
  },
  barContainer: {
    height: 40,
    position: "relative",
    width: chartWidth,
    marginVertical: 10,
  },
  bar: {
    position: "absolute",
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  barText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "500",
  },
  headingTitleSection: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.SemiBold,
    color: Colors.purple_text,
    marginBottom: 11,
  },
  headingText: {
    fontSize: 13,
    fontFamily: Fonts.Regular,
  },
  shareBtn: {
    marginTop: 15,
    backgroundColor: Colors.black,
    marginBottom: 30,
  },
  lifeLogSection: {
    marginTop: 15,
    paddingHorizontal: 24,
  },
  lifeLogTitle: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: Colors.purple_text,
    marginBottom: 10,
  },
  lifeLogDesc: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
  },
  card: {
    backgroundColor: Colors.surface_bg,
    paddingVertical: 15,
    borderRadius: 12,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: " #1E1E1E",
    fontFamily: Fonts.Bold,
  },
  details: { fontSize: 10, color: " #3B3D3B", marginTop: 4 },
  leftContainer: {
    textAlign: "left",
    paddingBottom: 8,
    marginInline: 12,
    color: "#3B3D3B",
    fontFamily: Fonts.Medium,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginInline: 12,
  },
  divider: {
    height: 0.4,
    backgroundColor: Colors.grey,
  },
  time: { fontSize: 16, fontWeight: "600", color: "#000" },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    backgroundColor: Colors.bg,
    padding: 6,
    borderRadius: 6,
    width: 100,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginRight: 6,
    backgroundColor: "#FA1911",
  },
  statusText: {
    fontSize: 10,
    color: Colors.text,
    fontWeight: "600",
    fontFamily: Fonts.Medium,
  },
  reactionSection: {
    backgroundColor: Colors.bg,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  angryImg: {
    width: 30,
    height: 30,
  },
  dateText: {
    fontSize: 10,
    fontFamily: Fonts.Medium,
    color: Colors.grey,
  },
  medicineRefText: {
    fontSize: 16,
    fontFamily: Fonts.Medium,
    lineHeight: 16,
    marginVertical: 8,
  },
});
