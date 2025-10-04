import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg
  },
  content: {
    position: 'relative',
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  topSec: {
    position: 'relative',
    marginTop: -15,
    width: '100%',
    backgroundColor: '#d2fff6ff',
    zIndex: 9
  },
  topSecLeft: {
    position: 'relative',
    padding: 24,
    // width: 250,
    zIndex: 9
  },
  topBg: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    height: 170,
    zIndex: 0
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
  chatHistoryWrap: {
        backgroundColor: Colors.surface_bg,
        paddingTop: 24,
        // paddingHorizontal: 12,
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

export default Styles;
