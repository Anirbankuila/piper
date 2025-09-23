import { Colors } from "@/constants/theme";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Searchbar = () => {
  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchIcon}>🔍</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Ask me anything!"
        placeholderTextColor="#8E8E93"
      />
      <TouchableOpacity style={styles.voiceButton}>
        <Text style={styles.micIcon}>🎤</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 20,
    borderBlockColor: Colors.black,
    borderWidth: 1,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  voiceButton: {
    padding: 5,
  },
  micIcon: {
    fontSize: 16,
  },
});
