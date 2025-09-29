import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
  },
  topImageContainer: {
    width: "100%",
  },
  topImage: {
    height: 286,
    paddingHorizontal: 12,
    paddingVertical: 17,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  blurCard: {
    borderRadius: 20,
    overflow: "hidden",
    padding: 12,
  },
  orderDetails: {
    position: "relative",
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
  },
  label: {
    color: Colors.bg,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
  value: {
    color: Colors.bg,
    fontSize: 14,
    fontFamily: Fonts.Bold,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FECE00",
  },
  //STEPS
  orderSteps: {
    padding: 24,
    zIndex: 1,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  leftSide: {
    alignItems: "center",
    width: 40,
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
  },
  completedCircle: {
    backgroundColor: Colors.black,
    borderColor: Colors.black,
  },
  incompleteCircle: {
    backgroundColor: Colors.bg,
    borderColor: Colors.strokeColor,
  },
  progressCircle: {
    backgroundColor: Colors.blue_link,
    borderColor: Colors.blue_link,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.strokeColor,
  },
  rightSide: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  stepLabel: {
    fontFamily: Fonts.Bold,
    fontSize: 15,
    marginBottom: 6,
    marginTop: -4,
    color: Colors.black,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
});
export default styles;
