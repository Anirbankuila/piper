import { primaryTabs } from "@/app/common/primaryTabs";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import CustomTopTabbar from "@/app/components/CustomTopTab/CustomTopTabbar";
import Header from "@/app/components/Header/Header";
import GrowthTracking from "@/app/components/ProgressTracking/GrowthTracking";
import Progress from "@/app/components/ProgressTracking/Progress";
import Questionnaires from "@/app/components/ProgressTracking/Questionnaires";
import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const topBarTabs = [
  {
    id: "progress",
    label: "Progress",
    icon: require("../../../assets/icons/status-up.png"),
    content: <Progress />,
  },
  {
    id: "questionnaire",
    label: "Questionnaire",
    icon: require("../../../assets/icons/note-2.png"),
    content: <Questionnaires />,
  },
  {
    id: "growthTracking",
    label: "Growth Tracking",
    icon: require("../../../assets/icons/health.png"),
    content: <GrowthTracking />,
  },
];
const ProgressTracking = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<string>("progress");
  const ActiveTabContent = topBarTabs.find((t) => t.id === activeTab)?.content;
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={[styles.headerWrapper, { paddingTop: insets.top }]}>
        <Header backgroundColor="#fff" />
      </View>
      {/* Sticky top tabs */}
      <CustomTopTabbar
        tabs={topBarTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Render content */}
      <View style={styles.mainContent}>{ActiveTabContent}</View>

      {/* Bottom Tab */}
      <CustomBottomTab activeTab="" tabs={primaryTabs} />
    </View>
  );
};

export default ProgressTracking;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    backgroundColor: Colors.bg,
    // marginTop: 10,
  },
});
