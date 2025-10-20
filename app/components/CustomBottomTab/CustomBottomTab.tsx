import type ITab from "@/app/common/Interface/common";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CustomBottomTabProps {
  tabs: ITab[];
  activeTab: string;
}

const CustomBottomTab: React.FC<CustomBottomTabProps> = ({ tabs, activeTab }) => {
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
            <Image
              source={isFocused && tab.activeIconPath ? tab.activeIconPath : tab.iconPath}
              style={styles.tabIcon}
            />
            <Text
              style={[
                styles.tabNameText,
                { color: isFocused ? Colors.blue_link : "#616161" },
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
    height: 70,
    backgroundColor: Colors.bg,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 0,
    padding: 5,
    paddingBottom: Platform.OS === "ios" ? 20 : 0,
    borderTopWidth: 1,
    borderColor: Colors.background,
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
    fontSize: 10,
    fontFamily: Fonts.Medium,
    color: "#616161",
  },
});
