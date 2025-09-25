import { Colors, Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
type DividerProps = {
  text: string;
};

export default function Divider({ text }: DividerProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 30,
      }}
    >
      {/* Left Line */}
      <LinearGradient
        colors={["#40B5BD", "#E2FBE0"]} // 👈 gradient left to right
        style={{ flex: 1, height: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />

      {/* Center Text */}
      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 17,
          fontWeight: "600",
          color: Colors.black,
          fontFamily: Fonts.Bold,
        }}
      >
        {text}
      </Text>

      {/* Right Line */}
      <LinearGradient
        colors={["#E2FBE0", "#40B5BD"]} // 👈 gradient left to right
        style={{ flex: 1, height: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </View>
  );
}
