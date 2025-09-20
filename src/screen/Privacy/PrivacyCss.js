import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import FONTS from '../../constants/fonts';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    padding: 24,
    paddingBottom:60
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    color: Colors.primary,
    maxWidth: '80%',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'left',
    marginVertical: 10,
    fontFamily: FONTS.bold,
    color: Colors.text,
  },
  formWrap: {
    marginTop: 20,
  },
  paragraph: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 18,
    fontFamily: FONTS.medium,
    marginBottom: 15,
    lineHeight: 22,
  },
  boldText: {
    fontFamily: FONTS.bold,
  },

  button: {
    backgroundColor: Colors.black,
    width:'100%'
  },
  buttonText: {
    color: Colors.surface,
  },
  bottomButton: {
    position: 'absolute',
    width:'100%',
    right:0,
    bottom: 0,
    zIndex: 9,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white', // optional (for visibility)
    padding: 24,
    paddingTop:0
  },

  backButtonText: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: FONTS.bold,
  },
  content: {
    // flex: 1,
    paddingTop: 0, // space for back button
    paddingBottom: 20,
  },
});

export default Styles;
