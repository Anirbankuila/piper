import PiperModal from "@/app/components/PiperModal/PiperModal";
import PiperSearch from "@/app/components/PiperSearch/PiperSearch";
import { FontAwesome } from '@expo/vector-icons';
import React, { useRef, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from './ChatDetailsCss';


interface ChatMessage {
    id: string;
    message: string;
    time: string;
    sender: "user" | "piper";
    type?: "text" | "list"; // optional type
    heading?: string;
    listItems?: string[];
}

const chats: ChatMessage[] = [
    { id: "1", message: "Hey Piper, provide me with some tools, strategies and a behavior plan...", time: "09:00 AM", sender: "user" },
    { id: "2", message: "Here is the breakdown and some ideas to support him and info...", time: "09:01 AM", sender: "piper" },
    {
        id: "3",
        sender: "piper",
        type: "list",
        heading: "Assessments Conducted",
        listItems: [
            "Consistent with moderate autism",
            "Receptive and expressive language at age equivalent of 3.5 years",
            "High sensory sensitivity in auditory and tactile domains",
            "Below average cognitive abilities (FSIQ: 75)",
        ],
        time: "09:05 AM",
        message: ""
    },
    {
        id: "4",
        sender: "piper",
        type: "list",
        heading: "Behavioral Observations",
        listItems: [
            "Eye contact is limited but improving.",
            "Demonstrates strong preference for routine; reacts negatively to unexpected changes.",
            "Meltdowns occur 3–4 times per week, lasting 15–45 minutes.",
            "Triggers identified: transitions, sensory overload, denied access to preferred item",
        ],
        time: "09:05 AM",
        message: ""
    },
    {
        id: "5",
        sender: "piper",
        type: "list",
        heading: "Behavioral Observations",
        listItems: [
            "Eye contact is limited but improving.",
            "Demonstrates strong preference for routine; reacts negatively to unexpected changes.",
            "Meltdowns occur 3–4 times per week, lasting 15–45 minutes.",
            "Triggers identified: transitions, sensory overload, denied access to preferred item",
        ],
        time: "09:05 AM",
        message: ""
    },
    { id: "6", message: "You mentioned meltdowns last week. I’ve pulled a few tips to try...", time: "09:10 AM", sender: "piper" },
];

const ChatHistoryScreen: React.FC = () => {
    const insets = useSafeAreaInsets();
    const [visible, setVisible] = useState(false);
    const [feedback, setFeedback] = useState<{ [key: string]: "like" | "dislike" | null }>({});
    const flatListRef = useRef<FlatList<ChatMessage>>(null);

    const handleFeedback = (id: string, type: "like" | "dislike") => {
        setFeedback((prev) => ({ ...prev, [id]: prev[id] === type ? null : type }));
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
        >

            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={{ flex: 1 }}>
                <FlatList
                    ref={flatListRef}
                    data={chats}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.chatHistoryWrap}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const isPiper = item.sender === "piper";
                        return (
                            <View style={[styles.chatBubble, isPiper ? styles.piperBubble : styles.userBubble]}>
                                {item.type === "list" ? (
                                    <>
                                        {item.heading && <Text style={styles.listHeading}>{item.heading}</Text>}
                                        {item.listItems?.map((li, index) => (
                                            <Text key={index} style={styles.listItem}>• {li}</Text>
                                        ))}
                                    </>
                                ) : (
                                    <Text style={[styles.chatText, isPiper ? styles.piperChat : styles.userChat]}>
                                        {item.message}
                                    </Text>
                                )}

                                {/* Only for Piper messages */}
                                {isPiper && (
                                    <View style={styles.feedbackWrap}>
                                        <TouchableOpacity style={styles.feedbackText} onPress={() => handleFeedback(item.id, "like")}>
                                            <FontAwesome
                                                name={feedback[item.id] === "like" ? "thumbs-up" : "thumbs-o-up"}
                                                size={16}
                                                color={feedback[item.id] === "like" ? "#007AFF" : "#222"}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.feedbackText} onPress={() => handleFeedback(item.id, "dislike")}>
                                            <FontAwesome
                                                name={feedback[item.id] === "dislike" ? "thumbs-down" : "thumbs-o-down"}
                                                size={16}
                                                color={feedback[item.id] === "dislike" ? "#FF3B30" : "#222"}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        );
                    }}
                    onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                />

                {/* Fixed search/mic input */}
                <View style={[styles.chatSearchWrap]}>
                    <PiperSearch onMicPress={() => setVisible(true)} />
                    <PiperModal visible={visible} onClose={() => setVisible(false)} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ChatHistoryScreen;
