import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFF9F2',
    padding: 24,
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: Fonts.SemiBold,
    color: Colors.primary,
    maxWidth: "100%",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
    fontFamily: Fonts.Medium,
    color: Colors.text,
  },
  content: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 12,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#F1ECF8",
    width: "100%",
  },
  topWrap: {
    paddingTop: 15,
    textAlign: "center",
    paddingHorizontal: 20,
    borderBottomWidth:1,
    borderBottomColor:"#F1ECF8",
  },
  topBg: {
    width: '100%',
    height: 200,
    marginHorizontal: "auto",
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },

  doneBtn: {
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 0,
    width: "100%"
  },
  btnText: {
    fontSize: 14,
  },
  piperStar: {
    position: 'absolute',
    bottom: 50,
    left: 40
  },
  piperStarImg: {
    width: 120,
    height: 120
  }
});

export default Styles;
