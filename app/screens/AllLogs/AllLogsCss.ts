import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.bg,
    paddingBottom: 20,
  },
  content: {
    position: "relative",
  },
  topSec: {
    backgroundColor: Colors.surface_light_pitch,
    position: "relative",
    marginTop: -5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
  },
  topSecLeft: {
    position: "relative",
    paddingLeft: 10,
    width: "78%",
  },
  topBg: {
    width: 157,
    height: 140,
    textAlign: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    marginLeft: 5,
  },
  topSecHeading: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: Colors.primary,
  },
  para: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: Colors.text,
    marginTop: 5,
  },
  logWrapper: {
    position: "relative",
    marginTop: 10,
    padding: 24,
  },
  dateTime: {
    fontSize: 8,
    color: Colors.textLight,
    fontFamily: Fonts.Medium,
  },
  logTitle: {
    fontSize: 16,
    color: "#141514",
    fontFamily: Fonts.Medium,
  },
  eachLogTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  eachLogTopLeft: {
    position: "relative",
  },
  eachLogTopRight: {
    position: "relative",
  },
  eachLog: {
    position: "relative",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F2F2F7",
    borderRadius: 8,
    marginTop: 5,
  },
  logStatus: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: 75,
    marginTop: 10,
  },
  logStatusIndicator: {
    width: 11,
    height: 11,
    backgroundColor: "#FA1911",
    borderRadius: "50%",
  },
  success: {
    backgroundColor: "#01BA38",
  },
  status: {
    fontSize: 10,
    color: Colors.text,
    fontFamily: Fonts.Medium,
  },
  mode: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  shareBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: 70,
    height: 30,
    justifyContent: "center",
  },
  modeShare: {
    width: 16,
    height: 16,
  },
  shareTitle: {
    fontSize: 10,
    color: Colors.text,
    fontFamily: Fonts.Medium,
  },
  shareText: {
    fontSize: 10,
    color: Colors.blue_link,
    fontFamily: Fonts.Medium,
  },
});

export default Styles;
