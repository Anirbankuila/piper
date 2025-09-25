import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    chatHistoryWrap: {
        backgroundColor: Colors.surface_bg,
        paddingTop: 24,
        paddingHorizontal: 12,
        borderTopWidth: 1,
        borderTopColor: Colors.strokeColor,
        paddingBottom: 100,
    },
    chatList: {
        flex: 1,
    },
    chatBubble: {
        maxWidth: "75%",
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 8,
        marginBottom: 4,
    },
    userBubble: {
        backgroundColor: Colors.blue_link, // WhatsApp green
        alignSelf: "flex-end",

    },
    piperBubble: {
        alignSelf: "flex-start",
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#E5E7EB",

    },
    chatText: {
        fontSize: 12,
        color: Colors.text,
        fontFamily: Fonts.Medium
    },
    userChat: {
        color: '#fff',
    },
    piperChat: {

        color: Colors.text,
        fontFamily: Fonts.Medium
    },
    chatTime: {
        fontSize: 11,
        color: "#555",
        marginTop: 4,
        alignSelf: "flex-end",
    },
    chatSearchWrap: {
        // position: "absolute",
        width: "100%",
        right: 0,
        bottom: 0,
        zIndex: 9,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical:12,
        backgroundColor: Colors.surface_bg,
    },
    listHeading: {
        fontSize: 12,
        fontFamily: Fonts.SemiBold,
        color: Colors.text,
        marginBottom: 8
    },
    listItem: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: Colors.text
    },
    feedbackWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 8
    },
    feedbackText: {
        width: 16,
        height: 16,
        marginLeft: 12
    },
    feedbackSelected: {
        position: 'relative'
    }
});

export default styles;