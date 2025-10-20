import { Colors, Fonts } from "@/constants/theme";
import { BlurView } from "expo-blur";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomTopTabbar from "../CustomTopTab/CustomTopTabbar";
import TrackingGraph from "./TrackingGraph";
const topBarTabs = [
  {
    id: "height",
    label: "Height",
    icon: require("../../../assets/icons/status-up.png"),
  },
  {
    id: "weight",
    label: "Weight",
    icon: require("../../../assets/icons/note-2.png"),
  },
  {
    id: "circumference",
    label: "Head Circumference",
    icon: require("../../../assets/icons/health.png"),
  },
];
const GrowthTracking = () => {
  const [activeTab, setActiveTab] = useState<string>("height");
  const [activeDuration, setActiveDuration] = useState<string>("M");
  const heightXAxisLabels = ["May", "June", "July", "August", "Sep", "Oct"];
  const heightYAxisLabels = ["0", "2 ft", "3 ft", "4 ft", "5 ft", "6 ft"];
  const heightData = [
    { value: 2, frontColor: "#C6A6FF" },
    { value: 3, frontColor: "#C7A8FF" },
    { value: 4, frontColor: "#B799FF" },
    { value: 5, frontColor: "#A57CFF" },
    { value: 6, frontColor: "#6A1BE2" },
    { value: 3, frontColor: "#CBB3FF" },
  ];
  const weightYAxisLabels = [
    "0",
    "35 Kgs",
    "40 Kgs",
    "45 Kgs",
    "50 Kgs",
    "55 Kgs",
  ];
  const weightData = [
    { value: 2, frontColor: "#C6A6FF" },
    { value: 3, frontColor: "#C7A8FF" },
    { value: 4, frontColor: "#B799FF" },
    { value: 5, frontColor: "#A57CFF" },
    { value: 6, frontColor: "#6A1BE2" },
    { value: 3, frontColor: "#CBB3FF" },
  ];
  const circumferenceXAxisLabels = [
    "1 Year",
    "2 Years",
    "3 Years",
    "4 Years",
    "5 Years",
    "6 Years",
  ];
  const circumferenceYAxisLabels = [
    "0",
    "30 cm",
    "35 cm",
    "40 cm",
    "45 cm",
    "50 cm",
  ];
  const circumferenceData = [
    { value: 2, frontColor: "#C6A6FF" },
    { value: 3, frontColor: "#C7A8FF" },
    { value: 4, frontColor: "#B799FF" },
    { value: 5, frontColor: "#A57CFF" },
    { value: 6, frontColor: "#6A1BE2" },
    { value: 3, frontColor: "#CBB3FF" },
  ];
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topImageContainer}>
        <ImageBackground
          source={require("../../../assets/images/growth tracking bg.png")}
          style={styles.topImage}
          imageStyle={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <BlurView intensity={36.1} tint="dark" style={styles.blurCard}>
            <LinearGradient
              colors={[
                "rgba(255,255,255,0.1)",
                "transparent",
                "rgba(255,255,255,0.29)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: 20,
              }}
            />
            <View style={styles.orderDetails}>
              <View style={styles.orderRow}>
                <Text style={styles.label}>Height</Text>
                <Text style={styles.value}>4 ft 11 inch</Text>
              </View>
              <View style={styles.orderRow}>
                <Text style={styles.label}>Weight</Text>
                <Text style={styles.value}>41kgs</Text>
              </View>
              <View style={styles.orderRow}>
                <Text style={styles.label}>Head Circumfernece</Text>
                <View style={styles.statusContainer}>
                  <Text style={styles.value}>55cm</Text>
                </View>
              </View>
            </View>
          </BlurView>
        </ImageBackground>
      </View>
      <CustomTopTabbar
        tabs={topBarTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOnlyLabel={true}
        styles={{ paddingTop: 20, alignItems: "center" }}
      />
      <View style={styles.durationTab}>
        {["D", "W", "M", "6M", "Y"].map((duration) => (
          <TouchableOpacity
            key={duration}
            style={[
              styles.durationButton,
              activeDuration === duration && styles.activeDurationButton, // 👈 active style
            ]}
            onPress={() => setActiveDuration(duration)}
          >
            <Text
              style={[
                styles.durationText,
                activeDuration === duration && styles.activeDurationText, // 👈 active text style
              ]}
            >
              {duration}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {activeTab == "height" && (
        <TrackingGraph
          title="Height Tracking"
          xAxisLabel={heightXAxisLabels}
          yAxisLabel={heightYAxisLabels}
          data={heightData}
        />
      )}
      {activeTab == "weight" && (
        <TrackingGraph
          title="Weight Tracking"
          xAxisLabel={heightXAxisLabels}
          yAxisLabel={weightYAxisLabels}
          data={weightData}
        />
      )}
      {activeTab == "circumference" && (
        <TrackingGraph
          title="Head Circumference"
          xAxisLabel={circumferenceXAxisLabels}
          yAxisLabel={circumferenceYAxisLabels}
          data={circumferenceData}
        />
      )}
    </ScrollView>
  );
};

export default GrowthTracking;

const styles = StyleSheet.create({
  topImageContainer: {
    width: "100%",
  },
  topImage: {
    height: 200,
    paddingHorizontal: 12,
    paddingVertical: 17,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  blurCard: {
    borderRadius: 20,
    overflow: "hidden",
    padding: 12,
  },
  orderDetails: {
    position: "relative",
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
  },
  label: {
    color: Colors.bg,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
  value: {
    color: Colors.bg,
    fontSize: 14,
    fontFamily: Fonts.Bold,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  durationTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.surface_bg,
    borderRadius: 8,
    marginTop: 15,
  },
  durationButton: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  activeDurationButton: {
    backgroundColor: Colors.black,
  },
  durationText: {
    color: Colors.grey,
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
  activeDurationText: {
    color: Colors.bg,
  },
});
