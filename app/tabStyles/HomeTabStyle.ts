import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F4FD",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  headerLeft: {
    flex: 1,
  },
  logoIcon: {
    width: 24,
    height: 24,
    tintColor: "#FF6B35",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerButton: {
    marginLeft: 15,
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: "#666",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  profilePhoto: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginRight: 5,
  },
  dropdownIcon: {
    width: 12,
    height: 12,
    tintColor: "#666",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
  },
  searchIcon: {
    width: 16,
    height: 16,
    tintColor: "#8E8E93",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  voiceButton: {
    padding: 5,
  },
  micIcon: {
    width: 18,
    height: 18,
    tintColor: "#8E8E93",
  },
  piperCard: {
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
  },
  piperContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  piperTextContainer: {
    flex: 1,
  },
  piperGreeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 5,
  },
  piperDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 18,
    marginBottom: 15,
  },
  tourButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "flex-start",
  },
  tourButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  piperCharacter: {
    width: 120,
    height: 120,
    marginLeft: 10,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  progressCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  progressStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF9500",
    marginRight: 5,
  },
  statusText: {
    fontSize: 14,
    color: "#666",
    marginRight: 5,
  },
  chevronRight: {
    width: 12,
    height: 12,
    tintColor: "#C7C7CC",
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "end",
    justifyContent: "space-between",
    height: 100,
  },
  chartItem: {
    alignItems: "center",
    flex: 1,
  },
  barContainer: {
    height: 80,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  progressBar: {
    width: 8,
    borderRadius: 4,
    minHeight: 8,
  },
  dayLabel: {
    fontSize: 12,
    color: "#8E8E93",
    fontWeight: "500",
  },
});
export default Styles;
