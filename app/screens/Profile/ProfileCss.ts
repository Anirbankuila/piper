import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    justifyContent: "space-between",
    flexGrow: 1,
    gap: 10,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: Fonts.Bold,
    fontWeight: "bold",
    color: Colors.primary,
    maxWidth: "80%",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "left",
    marginVertical: 10,
    color: Colors.text,
  },
  formWrap: {
    marginTop: 20,
  },
  terms: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 18,
    fontFamily: Fonts.Medium,
  },
  link: {
    color: Colors.blue_link,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: Colors.black,
  },
  buttonText: {
    color: Colors.surface,
  },
  content: {
    padding: 24,
  },
  passwordWrapper: {
    position: "relative",
    marginBottom: 10,
  },
  iconWrapper: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  eyeIcon: {
    color: "#0064D2",
  },
  bottomButton: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-end",
  },
});

export default Styles;
