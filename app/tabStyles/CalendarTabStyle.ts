import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  btnLeftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
  },
  tabBtn: {
    borderRadius: 12,
    textAlign: "center",
    padding: 12,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
  },
  appointmentContainer: {
    marginVertical: 20,
  },
  appointmentRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.strokeColor,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    alignItems: "center",
  },
  rowLeft: {
    flex: 1,
  },
  dateText: { fontSize: 14, fontFamily: Fonts.Bold },
  detailsRow: {
    marginTop: 5,
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-start",
  },
  statusMarker: {
    height: 40,
    width: 5,
    borderRadius: 8,
  },
  doctorName: {
    color: Colors.black,
    fontFamily: Fonts.Medium,
    fontSize: 13,
    marginBottom: 2,
  },
  appointmentTime: {
    color: "#AAAAAA",
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
  doctorImg: {
    height: 52,
    width: 52,
    borderRadius: 26,
    resizeMode: "cover",
    marginRight: 5,
  },
  calendarView: {
    marginVertical: 15,
    paddingHorizontal: 12,
  },
  treatMentBooking: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.surface_bg,
    borderRadius: 12,
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    marginInline: 8,
  },
  statusDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.blue_link,
    marginBottom: 3,
  },
  doctorNameText: {
    fontSize: 14,
    fontFamily: Fonts.Bold,
    color: Colors.text,
    lineHeight: 19,
    marginBottom: 3,
  },
  treatmentNameText: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: Colors.grey,
    letterSpacing: 0.75,
  },
});
export default styles;
