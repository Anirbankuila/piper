import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9F2',
    padding: 24,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: Fonts.Bold,
    color: Colors.primary,
    maxWidth: "100%",
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
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
    paddingVertical: 15,
    textAlign: 'center',
    paddingHorizontal: 12,
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  topBg: {
    width: 24,
    height: 24
  },
  bottomWrap: {
    borderTopWidth: 1,
    borderTopColor: Colors.strokeColor,
    padding: 12
  },
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,

  },
  pastLogBtn: {
    borderWidth: 1,
    borderColor: Colors.primary,
    width: "48%"
  },
  deleteBtn: {
    width: "48%"
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
