import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function LogDetails() {
  const { id, title, date, status, statusType } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Log ID: {id}</Text>
      <Text style={{ marginTop: 8 }}>{date}</Text>
      <Text style={{ marginTop: 8 }}>{title}</Text>
      <Text style={{ marginTop: 8 }}>Status: {status}</Text>
      <Text style={{ marginTop: 8 }}>Type: {statusType}</Text>
    </View>
  );
}
