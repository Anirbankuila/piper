import { Colors, Fonts } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/outline";
interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  isLast?: boolean;
}
const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  onPress,
  isLast = false,
}) => (
  <View style={[styles.menuItem, isLast && styles.menuItemLast]}>
    <View style={styles.menuItemLeft}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.menuItemText}>{title}</Text>
    </View>
    <TouchableOpacity style={styles.arrowButton} onPress={onPress}>
      <ChevronRightIcon size={26} color={Colors.blue_link} />
    </TouchableOpacity>
  </View>
);

export default MenuItem;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.strokeColor,
  },
  menuItemLast: {
    borderBottomWidth: 0,
    borderBottomColor: "#F3F5F7",
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
    fontSize: 18,
    color: Colors.text,
    fontFamily: Fonts.Bold,
    flex: 1,
  },
  arrowButton: {
    padding: 8,
    marginLeft: 8,
    cursor: "pointer",
  },
});
