import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FONTS } from "../constants/fonts";
import Colors from "../constants/colors";

const CommonInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
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
    height: 50,
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    // fontFamily: FONTS.regular,
    color: Colors.text,
    marginVertical: 8,
  },
});
