import { Dimensions, StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    paddingBottom: 20,
  },
  content: {
    position: "relative",
  },
  topSec: {
    backgroundColor:Colors.surface_light_pitch,
    position: "relative",
    marginTop: -5,
    width: "100%",
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:25
  },
   topSecLeft: {
    position: "relative",
    paddingLeft: 24,
    width: width * 0.60, // same as "80%" but based on screen width
  },
  topBg: {
    width: 157,
    height: 140,
    textAlign:'center',
    justifyContent:'center',
    position:'absolute',
    right:0,
    bottom:0
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
  logsSummaryWrap: {
    position: "relative",
    padding: 24,
  },
  logsSummary: {
    position: "relative",
    backgroundColor: "#F2F2F7",
    padding: 12,
    borderRadius: 12,
  },
  summaryTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.text,
    fontFamily: Fonts.SemiBold,
  },
  summaryDesc: {
    fontSize: 14,
    color: Colors.text,
    fontFamily: Fonts.Regular,
  },
  modeWrap: {
    position: "relative",
    backgroundColor: "#FFE7ED",
    padding: 12,
    borderRadius: 12,
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  modeImg: {
    width: 56,
    height: 56,
    marginBottom: 8,
  },
  modeTitle: {
    textAlign: "center",
    color: "#940027",
    fontFamily: Fonts.SemiBold,
    fontSize: 20,
  },
  addItem: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  eachItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingVertical: 12,
    width: "48%",
  },
  icon: {
    width: 24,
    height: 24,
  },
  eachItemTitle: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: "#141514",
    marginTop: 5,
  },
  addWrap: {
    position: "relative",
    paddingHorizontal: 24,
    marginBottom: 10,
  },
});

export default Styles;
