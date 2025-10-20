import { SymptomItem } from "@/app/common/Interface/Medication";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CommonButton from "../CommonButton/CommonButton";
import CustomTopTabbar from "../CustomTopTab/CustomTopTabbar";
import ADHDTrackingChart from "../ProgressTrack/ProgressTrack";
import GrowthTracking from "./GrowthTracking";
import Questionnaires from "./Questionnaires";
const topBarTabs = [
  {
    id: "ADHD",
    label: "ADHD",
    icon: require("../../../assets/icons/status-up.png"),
    content: <></>,
  },
  {
    id: "autism",
    label: "Autism",
    icon: require("../../../assets/icons/note-2.png"),
    content: <Questionnaires />,
  },
  {
    id: "depression",
    label: "Depression",
    icon: require("../../../assets/icons/health.png"),
    content: <GrowthTracking />,
  },
];
const symptomData: SymptomItem[] = [
  {
    id: "1",
    name: "Hyperactivity",
    icon: require("../../../assets/icons/health-blue.png"),
    obtainValue: 4,
    totalValue: 21,
    progress: 15,
    progressColor: "#FA1911",
    status: "Severe",
    timeAgo: "5 mins ago",
  },
  {
    id: "2",
    name: "Impulsivity",
    icon: require("../../../assets/icons/airdrop.png"),
    obtainValue: 0.7,
    totalValue: 1,
    progress: 90,
    progressColor: "#01BA38",
    status: "Normal",
    timeAgo: "10 mins ago",
  },
  {
    id: "3",
    name: "Attention",
    icon: require("../../../assets/icons/airdrop.png"),
    obtainValue: 8,
    totalValue: 21,
    progress: 90,
    progressColor: "#01BA38",
    status: "Good",
    timeAgo: "5 mins ago",
  },
];

const Progress = () => {
  const [activeTab, setActiveTab] = useState<string>("ADHD");
  const [activeDuration, setActiveDuration] = useState<string>("M");
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tabBarContainer}></View>
      <CustomTopTabbar
        tabs={topBarTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOnlyLabel={true}
        styles={{ paddingTop: 20, alignItems: "center" }}
      />
      <ScrollView contentContainerStyle={{ marginBottom: 10 }}>
        <View style={styles.progressBanner}>
          <View style={styles.heading}>
            <Image
              source={require("../../../assets/icons/pipersmall.png")}
              style={styles.headingImg}
            />
            <Text style={styles.title}>How Johnny is doing</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.description}>
              Johnny’s results show that there is an increase in hyperactivity
              since his last assessment. Next time you visit his doctor you may
              like to mention these results.
            </Text>
          </View>
        </View>
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
        <ADHDTrackingChart />
        <View style={styles.symptomSection}>
          <Text style={styles.breakDownText}>Symptom Breakdown</Text>
          {symptomData.map((item) => (
            <View key={item.id} style={styles.symptomItem}>
              {/* Upper Content */}
              <View style={styles.upperContent}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <View style={styles.iconWrapper}>
                    <Image source={item.icon} style={styles.symptomIconImg} />
                  </View>
                  <Text style={styles.symptomName}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.valueScore}>
                    <Text style={styles.obtainValue}>{item.obtainValue}</Text>
                    <Text style={styles.totalValue}>/{item.totalValue}</Text>
                  </Text>
                  <Text>Score</Text>
                </View>
              </View>

              <View style={styles.divider}></View>

              {/* Lower Content */}
              <View style={styles.lowerContent}>
                <View
                  style={[styles.progressBar, { backgroundColor: Colors.bg }]}
                >
                  <View
                    style={[
                      styles.filled,
                      {
                        width: `${item.progress}%`,
                        backgroundColor: item.progressColor || "green",
                      },
                    ]}
                  />
                </View>

                <View style={styles.symptomStatus}>
                  <View style={styles.statusButton}>
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: item.progressColor },
                      ]}
                    ></View>
                    <Text style={styles.statusText}>{item.status}</Text>
                  </View>
                  <View>
                    <Text style={styles.timeSectionText}>{item.timeAgo}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
          {/* <View style={styles.symptomItem}>
            <View style={styles.upperContent}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <View style={styles.iconWrapper}>
                  <Image
                    source={require("../../../assets/icons/health.png")}
                    style={styles.symptomIconImg}
                  />
                </View>
                <Text style={styles.symptomName}>Hyperactivity</Text>
              </View>
              <View>
                <Text style={styles.valueScore}>
                  <Text style={styles.obtainValue}>04</Text>
                  <Text style={styles.totalValue}>/21</Text>
                </Text>
                <Text>Score</Text>
              </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.lowerContent}>
              <View
                style={[styles.progressBar, { backgroundColor: Colors.bg }]}
              >
                <View
                  style={[
                    styles.filled,
                    { width: `${80}%`, backgroundColor: "green" },
                  ]}
                />
              </View>
              <View style={styles.symptomStatus}>
                <View style={styles.statusButton}>
                  <View style={styles.statusDot}></View>
                  <Text style={styles.statusText}>Normal</Text>
                </View>
                <View>
                  <Text style={styles.timeSectionText}>5 mins ago</Text>
                </View>
              </View>
            </View>
          </View> */}
        </View>
        <CommonButton
          title="Share With Care Team"
          onPress={() => {}}
          backgroundColor={Colors.black}
          textStyle={{ color: Colors.bg }}
          style={{ marginHorizontal: 20, marginVertical: 20 }}
        />
      </ScrollView>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  tabBarContainer: {
    // paddingVertical: 10,
  },
  mainContent: {
    flex: 1,
    backgroundColor: Colors.bg,
    // marginTop: 10,
  },
  progressBanner: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: Colors.surface_bg,
    padding: 16,
    marginBottom: 24,
    alignItems: "center",
    elevation: 1,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 4,
    marginBottom: 15,
    alignItems: "center",
  },
  imageWrapper: {
    height: 30,
    width: 30,
    borderRadius: 15,
    overflow: "hidden",
  },
  headingImg: {
    height: 28,
    width: 28,
  },
  title: {
    color: Colors.purple_text,
    fontSize: 20,
    fontFamily: Fonts.Bold,
  },
  contentWrapper: {
    borderRadius: 8,
    backgroundColor: Colors.bg,
    padding: 15,
  },
  description: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: Colors.text,
    letterSpacing: 0.5,
  },
  durationTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.surface_bg,
    borderRadius: 8,
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
  symptomSection: {
    paddingHorizontal: 20,
    marginVertical: 12,
  },
  breakDownText: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    lineHeight: 16,
    marginVertical: 10,
  },
  symptomItem: {
    backgroundColor: Colors.surface_bg,
    borderRadius: 12,
    marginTop: 10,
    flex: 1,
  },
  upperContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: Colors.bg,
    padding: 4,
    borderRadius: 8,
  },
  symptomIconImg: {
    width: 16,
    height: 16,
  },
  symptomName: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: Fonts.Bold,
    color: Colors.black,
  },
  valueScore: {
    flexDirection: "row",
  },
  obtainValue: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
  },
  totalValue: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: Colors.grey,
  },
  divider: {
    height: 0.7,
    backgroundColor: Colors.strokeColor,
  },
  lowerContent: { padding: 10, flex: 1 },
  progressBar: {
    height: 6,
    backgroundColor: Colors.main_purple,
    position: "relative",
    width: "100%",
    borderRadius: 3,
    marginBottom: 12,
    overflow: "hidden",
  },
  filled: {
    height: "100%",
    borderRadius: 4,
  },
  symptomStatus: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusButton: {
    backgroundColor: Colors.bg,
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    justifyContent: "flex-start",
  },
  statusDot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    marginRight: 6,
    backgroundColor: "green",
  },
  statusText: {
    fontSize: 10,
    color: Colors.text,
    fontFamily: Fonts.Medium,
    lineHeight: 22,
  },
  timeSectionText: {
    fontSize: 11,
    color: Colors.grey,
    fontFamily: Fonts.Regular,
  },
});
