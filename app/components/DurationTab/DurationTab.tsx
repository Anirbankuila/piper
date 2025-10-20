import { Colors, Fonts } from "@/constants/theme";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
interface DurationTabProps {
  activeTab: string;
  options: string[];
  setActiveTab: (tab: string) => void;
  viewStyle?: ViewStyle;
}
const DurationTab: React.FC<DurationTabProps> = ({
  activeTab,
  options,
  setActiveTab,
  viewStyle,
}) => {
  return (
    <View style={[styles.durationTab, viewStyle]}>
      {options.map((duration) => (
        <TouchableOpacity
          key={duration}
          style={[
            styles.durationButton,
            activeTab === duration && styles.activeDurationButton, // 👈 active style
          ]}
          onPress={() => setActiveTab(duration)}
        >
          <Text
            style={[
              styles.durationText,
              activeTab === duration && styles.activeDurationText, // 👈 active text style
            ]}
          >
            {duration}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DurationTab;

const styles = StyleSheet.create({
  durationTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.surface_bg,
    borderRadius: 8,
    height: 40,
  },
  durationButton: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  activeDurationButton: {
    backgroundColor: Colors.black,
  },
  durationText: {
    color: Colors.grey,
    fontSize: 12,
    fontFamily: Fonts.Regular,
  },
  activeDurationText: {
    color: Colors.bg,
  },
});
