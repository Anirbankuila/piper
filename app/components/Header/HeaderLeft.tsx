import Routes, { navigateScreen } from "@/app/common/Routes";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
const HeaderLeft = () => {
  return (
    <TouchableOpacity
      onPress={() => navigateScreen(Routes.homeTab)}
      style={{ paddingLeft: 10 }}
    >
      <Image
        source={require("../../../assets/icons/logo.png")}
        style={styles.logo}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  logo: {
    width: 27,
    height: 27,
  },
});
