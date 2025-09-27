import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },

  flatList: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  listHeader: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#6c757d",
    lineHeight: 18,
  },
  separator: {
    height: 12,
  },
  notificationCard: {
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    paddingVertical: 8,
    gap: 5,
    paddingHorizontal:8
  },
  notificationContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 15,
  },
  notificationTextPart: {
    width: "72%",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  notificationHeader: {
    alignItems: "flex-start",
  },
  redDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#FA1911",
    marginTop: 6,
    marginRight: 5,
  },
  notificationTitle: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    marginRight: 8,
  },
  timestamp: {
    fontSize: 8,
    color: Colors.textLight,
    marginTop: 2,
    width: "28%",
    textAlign:'right'
  },
  notificationSubtitle: {
    fontSize: 10,
    color: Colors.text,
    lineHeight: 18,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  emptyStateSubtitle: {
    fontSize: 14,
    color: "#6c757d",
    lineHeight: 20,
    textAlign: "center",
  },
});
export default styles;
