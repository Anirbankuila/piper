import { Colors, Fonts } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/outline";
interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
}
const MenuItem: React.FC<MenuItemProps> = ({ icon, title, onPress }) => (
  <TouchableOpacity style={[styles.menuItem]} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.menuItemText}>{title}</Text>
    </View>
    <ChevronRightIcon size={26} color={Colors.blue_link} />
  </TouchableOpacity>
);

export default MenuItem;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.strokeColor,
  },
  menuItemLast: {
    borderBottomWidth: 0,
    borderBottomColor: "#F3F5F7",
    paddingHorizontal: 24,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.Medium,
    flex: 1,
  },
  arrowButton: {
    padding: 8,
    marginLeft: 8,
    cursor: "pointer",
  },
});
