import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    padding: 24,
    paddingBottom: 60,
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
    fontSize: 17,
    textAlign: "left",
    marginVertical: 10,
    fontFamily: Fonts.bold,
    color: Colors.text,
  },
  formWrap: {
    marginTop: 20,
  },
  paragraph: {
    fontSize: 14,
    color: Colors.text,
    fontFamily: Fonts.medium,
    marginBottom: 15,
    lineHeight: 22,
  },
  boldText: {
    fontFamily: Fonts.bold,
  },

  button: {
    backgroundColor: Colors.black,
    width: "100%",
  },
  buttonText: {
    color: Colors.surface,
  },
  bottomButton: {
    position: "absolute",
    width: "100%",
    right: 0,
    bottom: 0,
    zIndex: 9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white", // optional (for visibility)
    padding: 24,
    paddingTop: 0,
  },

  backButtonText: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: Fonts.bold,
  },
  content: {
    // flex: 1,
    paddingTop: 0, // space for back button
    paddingBottom: 20,
  },
});

export default Styles;
