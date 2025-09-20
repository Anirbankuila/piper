import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import FONTS from "../../constants/fonts";

const CommonButton = ({
  title,
  onPress,
  backgroundColor = "#fff", // default iOS blue
  color = "#000", // text color
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      
    >
      <Text style={[styles.text, { color, fontFamily: FONTS.semiBold }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
});
