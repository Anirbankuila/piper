import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface_bg,
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: " #1E1E1E",
    fontFamily: Fonts.Bold,
  },
  details: { fontSize: 10, color: " #3B3D3B", marginTop: 4 },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    marginInline: 12,
    color: "#3B3D3B",
    fontFamily: Fonts.Medium,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginInline: 12,
  },
  divider: {
    height: 0.4,
    backgroundColor: Colors.grey,
  },
  time: { fontSize: 16, fontWeight: "600", color: "#000" },
  statusContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  statusDot: { width: 8, height: 8, borderRadius: 5, marginRight: 6 },
  statusText: {
    fontSize: 10,
    color: Colors.text,
    fontWeight: "500",
    fontFamily: Fonts.Medium,
  },
});
export default styles;
