import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.text,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  inputBoxIcon: {
    fontSize: 16,
    color: Colors.text,
  },
  placeholderText: {
    color: Colors.placeholder,
    fontSize: 16,
  },
  selectedText: {
    fontSize: 16,
    color: Colors.text,
  },
});
export default styles;
