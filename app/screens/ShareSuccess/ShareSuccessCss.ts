import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.warm,
    padding: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: Fonts.Bold,
    color: Colors.primary,
    maxWidth: "100%",
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: Fonts.Medium,
    color: Colors.text,
  },
  content: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 12,
    textAlign: 'center'
  },
  topWrap: {
    paddingTop: 15,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  topBg: {
    marginTop: 0,
    width: '100%',
    height: 200
  },
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.strokeColor,
    padding: 12
  },
  pastLogBtn: {
    borderWidth: 1,
    borderColor: '#000'
  },
  piperStar: {
    position: 'absolute',
    bottom: 50,
    left: 40
  },
  piperStarImg: {
    width: 120,
    height: 120
  }


});

export default Styles;
