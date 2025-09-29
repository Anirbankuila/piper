import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    padding: 24,
    paddingTop: 0,
  },
  formWrap: {
    marginTop: 10,
  },
  uploadPhoto: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    paddingVertical: 20,
  },

  uploadIconWrap: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#66A2E4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6F0FB",
    width: 32,
    height: 32,
    borderRadius: "50%",
  },
  uploadIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  uploadText: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.text,
  },
  addChild: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  eachInput: {
    padding: 16,
    marginTop: 4,
    fontSize: 14,
    fontFamily: Fonts.Regular,
  },
  button: {
    backgroundColor: Colors.black,
  },
  buttonText: {
    color: Colors.surface,
  },
  selectText: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.Bold,
  },
  selectBox: {
    backgroundColor: Colors.surface_bg,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  addAnotherWrap: {
    padding: 12,
    backgroundColor: "#F3F5F7",
    borderRadius: 20,
    alignItems: "center",
    height: 66,
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderStyle: "dashed",
    marginTop: 14,
    marginBottom: 20,
  },
  addAnotherText: {
    fontFamily: Fonts.Bold,
    color: Colors.text,
    fontWeight: "600",
  },
  bottomButton: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default Styles;
