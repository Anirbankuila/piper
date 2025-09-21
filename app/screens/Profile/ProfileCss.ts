import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    padding: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: Fonts.bold,
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
    fontFamily: Fonts.medium,
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    display: "flex",
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: Fonts.bold,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  passwordWrapper: {
    position: "relative",
    marginVertical: 10,
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
});

export default Styles;
