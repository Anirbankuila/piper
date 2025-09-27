import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingTop:0
  },

  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 20,
    paddingBottom:20
  },
  menuList:{
    paddingVertical:20
  },
  profileImageContainer: {
    marginBottom: 0,
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
    marginLeft:20,
    fontWeight: "600",
    color: "#000",
  },
  icon: {
    height: 24,
    width: 24,
  },
});
export default styles;
