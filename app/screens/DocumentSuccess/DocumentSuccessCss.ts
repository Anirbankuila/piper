import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D8DFF7",
    padding: 24,
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: Fonts.SemiBold,
    color: Colors.black,
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
    borderColor: "#B3D1F2",
    width: "100%",
  },
  topWrap: {
    paddingTop: 15,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  topBg: {
    width: 78,
    height: 78,
    marginHorizontal: "auto",
    marginBottom: 10,
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },

  pastLogBtn: {
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 0,
  },
  btnText: {
    fontSize: 14,
  },
});

export default Styles;
