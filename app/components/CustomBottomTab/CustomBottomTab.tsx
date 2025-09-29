import { ITab } from "@/app/common/Interface/common";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomBottomTabProps {
  tabs: ITab[];
  activeTab: string;
}
const CustomBottomTab: React.FC<CustomBottomTabProps> = ({
  tabs,
  activeTab,
}) => {
  return (
    <View style={styles.tabBarContainer}>
      {tabs.map((tab, index) => {
        const isFocused = activeTab === tab.name;
        return (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            onPress={() => tab.onTabPress(tab.name)}
          >
            <Image source={tab.iconPath} style={styles.tabIcon} />
            <Text
              style={[
                styles.tabNameText,
                {
                  color: isFocused ? Colors.blue_link : "#616161",
                },
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Platform.OS === "ios" ? 86 : 60,
    backgroundColor: Colors.bg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    paddingBottom: Platform.OS === "ios" ? 20 : 0,
    padding: 5,
    borderTopWidth: 1,
    borderColor: Colors.strokeColor,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    height: 24,
    width: 24,
  },
  tabNameText: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: "#616161",
  },
});
