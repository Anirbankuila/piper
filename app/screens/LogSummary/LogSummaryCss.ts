import { Dimensions, StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";
const { width, height } = Dimensions.get("window");
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

// Horizontal and vertical scaling
export const scale = (size: number) => (width / BASE_WIDTH) * size;
export const verticalScale = (size: number) => (height / BASE_HEIGHT) * size;
const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    paddingBottom: 20,
  },
  content: {
    position: "relative",
  },
  // topSec: {
  //   backgroundColor: Colors.surface_light_pitch,
  //   position: "relative",
  //   marginTop: -5,
  //   gap: 2,
  //   width: "100%",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   paddingVertical: scale(25),
  //   overflow: "hidden",
  // },
  // topSecLeft: {
  //   paddingLeft: scale(20),
  //   width: "55%",
  //   flexShrink: 1,
  // },
  // topBg: {
  //   width: "30%",
  //   height: verticalScale(height * 0.18),
  //   textAlign: "center",
  //   justifyContent: "flex-end",

  //   alignItems: "flex-end",
  //   right: 0,
  //   bottom: 0,
  //   resizeMode: "contain",
  // },
  // topSecHeading: {
  //   fontSize: scale(19),
  //   fontFamily: Fonts.Bold,
  //   color: Colors.primary,
  //   fontWeight: "600",
  //   lineHeight: scale(25),
  // },
  // para: {
  //   fontSize: scale(14),
  //   fontFamily: Fonts.Regular,
  //   color: Colors.text,
  //   marginTop: verticalScale(4),
  //   lineHeight: scale(17),
  // },

  topSec: {
    // flexDirection: "row",
    width: "100%",
    // paddingVertical: verticalScale(20),
    // paddingHorizontal: scale(16),
    backgroundColor: Colors.surface_light_pitch,
    // alignItems: "flex-start",
  },

  topSecLeft: {
    flex: 0.65, // 65% of horizontal space for text
    flexShrink: 1, // allows text to shrink on small devices
    marginRight: scale(8),
    marginLeft: scale(10),
  },

  topSecRight: {
    flex: 0.35, // 35% of horizontal space for image
    justifyContent: "flex-end", // anchor to bottom
    alignItems: "flex-end",
  },

  topBg: {
    width: "100%",
    maxHeight: verticalScale(height * 0.22), // scales on smaller devices
    resizeMode: "contain",
  },

  topSecHeading: {
    fontSize: scale(18),
    fontFamily: Fonts.Bold,
    color: Colors.primary,
    lineHeight: scale(22),
  },

  para: {
    fontSize: scale(14),
    fontFamily: Fonts.Regular,
    color: Colors.text,
    marginTop: verticalScale(4),
    lineHeight: scale(18),
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
