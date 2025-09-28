import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: 15,
    paddingVertical: 25,
    // paddingHorizontal: 15,
    // paddingVertical: 20,
  },
  groupLabelText: {
    fontFamily: Fonts.Bold,
    fontSize: 14,
    marginLeft: 4,
    marginVertical: 5,
  },
  uploadDocSection: {
    padding: 12,
    backgroundColor: "#F3F5F7",
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
  addIcon: {
    color: Colors.blue_link,
    fontSize: 42,
    width: 42,
    height: 42,
  },
  uploadDocText: {
    fontSize: 14,
    fontFamily: Fonts.Bold,
    color: Colors.text,
  },
});
export default styles;
