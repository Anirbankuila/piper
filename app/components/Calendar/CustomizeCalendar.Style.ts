import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  monthHeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.surface_bg,
    borderRadius: 12,
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    fontFamily: Fonts.Bold,
  },
  yearText: { fontSize: 14, color: Colors.grey },
  arrowBtn: {
    backgroundColor: Colors.bg,
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: "center", // centers vertically
    alignItems: "center",
  },
});
export default styles;
