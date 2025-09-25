import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface_bg,
        padding: 12,
        borderTopWidth:1,
        borderTopColor:Colors.strokeColor
    },
    eachChat: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.strokeColor,
        marginBottom:4
    },
    message: {
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color: Colors.text,
        marginBottom: 6
    },
    date: {
        fontSize: 10,
        color: Colors.textLight,
    },
});

export default styles;