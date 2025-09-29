import Routes, { navigateScreen } from "@/app/common/Routes";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./ChatHistoryCss";

interface ChatItem {
  id: string;
  message: string;
  date: string;
}

const chatData: ChatItem[] = [
  { id: "1", message: "Health report of Johnny", date: "12 June 2025" },
  {
    id: "2",
    message: "Reminder: Parent-teacher meeting",
    date: "10 June 2025",
  },
  { id: "3", message: "Homework submission pending", date: "08 June 2025" },
  { id: "4", message: "Math practice test available", date: "05 June 2025" },
];

const ChatListScreen: React.FC = () => {
  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity
      style={styles.eachChat}
      onPress={() => navigateScreen(Routes.chatDetails)}
    >
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChatListScreen;
