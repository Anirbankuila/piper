import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    padding: 24,
  },
  groupLabelText: {
    fontFamily: Fonts.Bold,
    fontSize: 14,
    marginLeft: 4,
    marginVertical: 5,
  },
  uploadDocSection: {
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    height: 110,
    justifyContent: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#C1C1C1",
    borderStyle: "dashed",
    marginTop: 18,
    marginBottom: 10,
  },
  uploadDocText: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.text,
  },
  inputText: { fontFamily: Fonts.Regular, fontSize: 14 },
});
export default styles;
