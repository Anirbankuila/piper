import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function LogSummary() {
  const { title, date, status } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{date}</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>
      <Text style={{ fontSize: 16, color: "gray" }}>{status}</Text>
    </View>
  );
}
