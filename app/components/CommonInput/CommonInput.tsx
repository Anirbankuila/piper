import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from "react-native";
import { Colors } from "../../../constants/theme";

interface CommonInputProps {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  style?: StyleProp<TextStyle>;
  placeholderTextColor?: string;
}

const CommonInput: React.FC<CommonInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  style,
  placeholderTextColor = "#aaaaaa",
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  input: {
    // height: 50,
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: Colors.text,
    marginVertical: 8,
    paddingVertical: 14,
    textAlignVertical: "center",
  },
});
