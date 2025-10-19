import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
interface CustomTopTabbarProps {
  tabs: { id: string; label: string; icon: any; content?: React.ReactNode }[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  isOnlyLabel?: boolean;
  styles?: ViewStyle;
}
const CustomTopTabbar: React.FC<CustomTopTabbarProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  isOnlyLabel = false,
  styles,
}) => {
  return (
    <View style={[Styles.topTab, styles]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={isActive ? Styles.activeTab : Styles.inactiveTab}
            onPress={() => setActiveTab(tab.id)}
          >
            {!isOnlyLabel && <Image source={tab.icon} style={Styles.tabIcon} />}

            <Text
              style={isActive ? Styles.activeTabText : Styles.inactiveTabText}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTopTabbar;

const Styles = StyleSheet.create({
  topTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.strokeColor,
    backgroundColor: "#fff",
  },
  activeTab: {
    flexDirection: "column",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: Colors.blue_link,
    paddingBottom: 10,
  },
  inactiveTab: {
    flexDirection: "column",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.bg,
    paddingBottom: 6,
  },
  activeTabText: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: Colors.text,
  },
  inactiveTabText: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: Colors.textLight,
  },
  tabIcon: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  mainContent: {
    flex: 1,
  },
});
