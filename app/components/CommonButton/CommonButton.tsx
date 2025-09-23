import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Fonts } from "../../../constants/theme";
type CommonButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#fff", // default background
  color = "#000", // default text color
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, { color, fontFamily: Fonts.Medium }, textStyle]}
      >
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
    fontFamily: Fonts.SemiBold,
  },
});
