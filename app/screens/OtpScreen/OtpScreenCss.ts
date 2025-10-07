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
    fontFamily: Fonts.Bold,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 48,
  },
  subtitle: {
    fontSize: 17,
    textAlign: "left",
    marginVertical: 10,
    fontFamily: Fonts.Bold,
    color: Colors.text,
  },
  formWrap: {
    marginTop: 20,
  },
  paragraph: {
    fontSize: 14,
    color: Colors.text,
    // lineHeight: 18,
    fontFamily: Fonts.Medium,
    marginBottom: 15,
    lineHeight: 22,
  },
  boldText: {
    fontFamily: Fonts.Bold,
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
    fontFamily: Fonts.Bold,
  },
  content: {
    flex: 1,
    paddingTop: 90, // space for back button
    paddingBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 70,
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    textAlign: "center",
    fontSize: 14,
    backgroundColor: "#fff",
  },
});

export default Styles;
