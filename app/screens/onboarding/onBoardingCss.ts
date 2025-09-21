import { StyleSheet } from "react-native";
import { Fonts } from "../../../constants/theme";
const Styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  onboardWrapper: {
    height: "60%",
    justifyContent: "flex-end",
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontFamily: Fonts.semiBold,
    marginBottom: 10,
    color: "#fff", // text stands out on background
  },
  subtitle: {
    fontSize: 15,
    fontFamily: Fonts.medium,
    color: "#fff",
    marginBottom: 30,
  },
});

export default Styles;
