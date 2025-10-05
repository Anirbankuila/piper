import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
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
  placeholderText?: string; // placeholder prop
  inputStyle?: TextStyle; // custom style prop
  containerStyle?: ViewStyle; // optional container style
  iconTintColor?: string;
  showMicIcon?: boolean;
}

const Searchbar: React.FC<SearchBarInputProps> = ({
  onMicPress,
  placeholderText = "Ask me anything!", // default placeholder
  inputStyle,
  containerStyle,
  iconTintColor,
  showMicIcon = true,
}) => {
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
      />
      {showMicIcon && (
        <TouchableOpacity style={styles.voiceButton} onPress={onMicPress}>
          <Image
            source={require("../../../assets/icons/microphone.png")}
            style={styles.micIcon}
          />
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
    borderColor: Colors.black,
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
    width: 23,
    height: 23,
    tintColor: Colors.black,
  },
});
