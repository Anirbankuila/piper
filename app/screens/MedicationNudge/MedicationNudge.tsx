import { primaryTabs } from "@/app/common/primaryTabs";
import AskPiper from "@/app/components/AskPiper/AskPiper";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import CustomTopTabbar from "@/app/components/CustomTopTab/CustomTopTabbar";
import Header from "@/app/components/Header/Header";
import MyReport from "@/app/components/MyReport/MyReport";
import PgxReport from "@/app/components/PgxReport/PgxReport";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const topBarTabs = [
  {
    id: "myReport",
    label: "My Report",
    icon: require("../../../assets/icons/document-text.png"),
    content: <MyReport />,
  },
  {
    id: "pgxReport",
    label: "PGx Report",
    icon: require("../../../assets/icons/note-2.png"),
    content: <PgxReport />,
  },
  {
    id: "askPiper",
    label: "Ask Piper",
    icon: require("../../../assets/icons/askpiper2.png"),
    content: <AskPiper />,
  },
];
const MedicationNudge = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<string>("myReport");
  const ActiveTabContent = topBarTabs.find((t) => t.id === activeTab)?.content;
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={[Styles.headerWrapper, { paddingTop: insets.top }]}>
        <Header backgroundColor="#fff" />
      </View>
      {/* Sticky top tabs */}
      <CustomTopTabbar
        tabs={topBarTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Render content */}
      <View style={Styles.mainContent}>{ActiveTabContent}</View>

      {/* Bottom Tab */}
      <CustomBottomTab activeTab="" tabs={primaryTabs} />
    </View>
  );
};

export default MedicationNudge;

const Styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    // marginTop: 10,
  },
});
