import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
  profileImageContainer: {
    marginBottom: 15,
  },
  profileNameContainer: {
    marginLeft: 15,
    textAlign: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileImageText: {
    fontSize: 24,
    color: Colors.text,
    fontFamily: Fonts.Bold,
    fontWeight: "bold",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
});
export default styles;
