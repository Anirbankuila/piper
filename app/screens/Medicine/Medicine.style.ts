import { Colors, Fonts } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
  },
  headerWrapper: {
    backgroundColor: "#D2FFF6",
  },
  piperIntroContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingHorizontal: 22,
  },
  alexPersonalImg: {
    width: 126,
    height: 180,
    resizeMode: "contain",
  },
  piperCard: {
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
  },
  piperContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageWrapper: {
    flex: 1,
    position: "relative",
    flexShrink: 1,
  },
  messageBox: {
    backgroundColor: "white",
    padding: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
  },
  pointer: {
    position: "absolute",
    bottom: -4,
    width: 0,
    left: -7,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white", // same as message box background
    transform: [{ rotate: "160deg" }], // gives diagonal shape
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.SemiBold,
    color: Colors.primary,
    lineHeight: 16,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 10,
    fontFamily: Fonts.Regular,
    color: Colors.text,
    lineHeight: 14,
  },
  mainContent: {
    marginTop: 15,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 0.5,
    paddingHorizontal: 22,
  },
  searchInput: {
    backgroundColor: Colors.surface_bg,
    borderWidth: 0,
    borderRadius: 10,
  },
  btnSection: {
    marginTop: 10,
    marginBottom: 15,
  },
  pushNotification: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pushNotifyText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.SemiBold,
  },
  medicineDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "12%",
  },
  medicineBtn: {
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
  },
  circleBtn: {
    backgroundColor: Colors.surface_bg,
    borderRadius: "50%",
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  reminderIcon: {
    height: 26,
    width: 26,
  },

  // For medicine list container
  medicineListContainer: { flex: 1, backgroundColor: "#FFF", padding: 10 },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  monthText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.text,
    fontFamily: Fonts.Medium,
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  dayContainer: {
    alignItems: "center",
    padding: 6,
    borderRadius: 10,
    width: 42,
    flex: 1,
  },
  selectedDay: {
    backgroundColor: Colors.surface_bg,
  },
  dayText: {
    fontSize: 11,
    color: Colors.grey,
    fontFamily: Fonts.Medium,
    fontWeight: "500",
    marginBottom: 20,
  },
  dateText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: Fonts.Bold,
    color: Colors.grey,
  },
  selectedDayText: { color: Colors.black },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 15,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: Colors.surface_bg,
    marginRight: 5,
  },
  activeFilterButton: { backgroundColor: Colors.black },
  filterText: { fontWeight: "700", fontFamily: Fonts.Medium },
  activeFilterText: { color: Colors.bg },
  noDataText: {
    textAlign: "center",
    color: "#999",
    marginVertical: 15,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
});
export default Styles;
