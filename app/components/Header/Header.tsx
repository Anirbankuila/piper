import Routes, { navigateScreen } from "@/app/common/Routes";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  backgroundColor?: string; // optional prop
}

const Header: React.FC<HeaderProps> = ({ backgroundColor = "#FFF3E9" }) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      {/* Left Side Logo */}
      <TouchableOpacity  onPress={() => navigateScreen(Routes.homeTab)}>
        <Image
          source={require("../../../assets/icons/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Right Side Icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigateScreen(Routes.medicationNudge)}>
          <Image
            source={require("../../../assets/icons/medical.png")}
            style={styles.eachIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigateScreen(Routes.notification)}
        >
          <Image
            source={require("../../../assets/icons/notification.png")}
            style={styles.eachIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 27,
    height: 27,
  },
  eachIcon: {
    width: 24,
    height: 24,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBtn: {
    marginLeft: 18,
  },
});
