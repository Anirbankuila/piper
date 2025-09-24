import { Colors } from "@/constants/theme";
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
    paddingHorizontal: 10,
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    paddingVertical: 8,
    gap: 5,
  },
  notificationContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  notificationTextPart: {
    width: "72%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationHeader: {
    alignItems: "flex-start",
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#dc3545",
    marginTop: 6,
    marginRight: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    lineHeight: 20,
    marginRight: 8,
  },
  timestamp: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 2,
    width: "40%",
  },
  notificationSubtitle: {
    fontSize: 14,
    color: "#6c757d",
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
