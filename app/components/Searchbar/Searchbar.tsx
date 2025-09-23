import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
interface searchBarInputProps {
  onMicPress?: () => void;
}

const Searchbar: React.FC<searchBarInputProps> = ({
  onMicPress,
  ...searchBarInputProps
}) => {
  return (
    <View style={styles.searchContainer}>
      <Image
        source={require("../../../assets/icons/search.png")}
        style={styles.searchIcon}
      />

      <TextInput
        style={styles.searchInput}
        placeholder="Ask me anything!"
        placeholderTextColor="#AAAAAA"
      />
      <TouchableOpacity style={styles.voiceButton} onPress={onMicPress}>
        <Image
          source={require("../../../assets/icons/mic.png")}
          style={styles.micIcon}
        />
      </TouchableOpacity>
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
    borderBlockColor: Colors.black,
    borderWidth: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginEnd: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.Regular,
  },
  voiceButton: {
    padding: 5,
  },
  micIcon: {
    width: 23,
    height: 23,
    tintColor: Colors.black,
  },
});
