import Routes, { navigateScreen } from "@/app/common/Routes";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const HeaderRight = () => {
  return (
    <View style={styles.rightIcons}>
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => navigateScreen(Routes.medicationNudge)}
      >
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
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  eachIcon: {
    width: 24,
    height: 24,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  iconBtn: {
    marginLeft: 18,
  },
});
