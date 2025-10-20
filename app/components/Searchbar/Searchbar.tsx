import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface SearchBarInputProps {
  onMicPress?: () => void;
  onFocusInput?: () => void;
  clearSearchInput?: () => void;
  onChangeText?: (value: string) => void;
  placeholderText?: string; // placeholder prop
  inputStyle?: TextStyle; // custom style prop
  containerStyle?: ViewStyle; // optional container style
  iconTintColor?: string;
  showMicIcon?: boolean;
  showCrossIcon?: boolean;
}

const Searchbar: React.FC<SearchBarInputProps> = ({
  onMicPress,
  onFocusInput,
  onChangeText,
  clearSearchInput,
  placeholderText = "Ask me anything!", // default placeholder
  inputStyle,
  containerStyle,
  iconTintColor,
  showMicIcon = true,
  showCrossIcon = false,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleChangeText = (text: string) => {
    setSearchText(text);
    onChangeText && onChangeText(text);
  };

  const clearSearch = () => {
    setSearchText("");
    onChangeText && onChangeText("");
  };
  return (
    <View style={[styles.searchContainer, containerStyle]}>
      <Image
        source={require("../../../assets/icons/search.png")}
        style={styles.searchIcon}
        tintColor={iconTintColor}
      />

      <TextInput
        style={[styles.searchInput, inputStyle]}
        placeholder={placeholderText}
        placeholderTextColor={Colors.textLight}
        onFocus={onFocusInput}
        value={searchText}
        onChangeText={handleChangeText}
        cursorColor={Colors.black}
      />
      {showMicIcon && (
        <TouchableOpacity style={styles.voiceButton} onPress={onMicPress}>
          <Image
            source={require("../../../assets/icons/microphone.png")}
            style={styles.micIcon}
          />
        </TouchableOpacity>
      )}
      {showCrossIcon && (
        <TouchableOpacity onPress={clearSearch}>
          <Ionicons name="close-circle-outline" size={25} color={Colors.grey} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.bg,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 20,
    borderColor: Colors.primary_blue,
    borderWidth: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginEnd: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.Regular,
  },
  voiceButton: {
    padding: 5,
    borderLeftWidth: 1,
    borderLeftColor: Colors.strokeColor,
  },
  micIcon: {
    width: 16,
    height: 16,
    tintColor: Colors.black,
  },
});
