import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
    },
    topSec: {
        position: 'relative',
        marginTop: -5,
        width: '100%'
    },
    topSecLeft: {
        position: 'relative',
        padding: 24,
        width: 240
    },
    topBg: {
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        height: 150,
        zIndex: -1
    },
    topSecHeading: {
        fontSize: 20,
        fontFamily: Fonts.Bold,
        color: Colors.primary
    },
    para: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.text,
        marginTop: 5
    },
    askPiperWrap: {
        padding: 24
    },
    addItem: {
        position: 'relative',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 30
    },
    eachItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.strokeColor,
        borderRadius: 12,
        paddingVertical: 12,
        width: '48%'
    },
    icon: {
        width: 24,
        height: 24
    },
    eachItemTitle: {
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color: '#141514',
        marginTop: 5
    },
    selectLog: {
        marginTop: 15
    },
    selectText: {
        fontSize: 14,
        color: "#141514",
        fontFamily: Fonts.SemiBold,
        marginBottom: 5
    },
    selectBox: {
        backgroundColor: "#F2F2F7",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    pastLogBtn: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000'
    }
});

export default styles;
