import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../constants/theme";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#D8DFF7',
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
    paddingHorizontal:20
  },
  topBg: {
    marginTop:-30,
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
  }


});

export default Styles;
