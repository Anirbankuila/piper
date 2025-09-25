import React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from "react-native";
import { Fonts } from "../../../constants/theme";
import styles from "./CommonButtonCss";
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


