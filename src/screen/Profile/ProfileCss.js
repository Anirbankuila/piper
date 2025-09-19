import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import FONTS from '../../constants/fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    padding: 24,
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
    fontSize: 14,
    textAlign: 'left',
    marginVertical: 10,
    Colors: Colors.text,
  },
  formWrap: {
    marginTop: 20,
  },
  terms: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 18,
    fontFamily: FONTS.medium,
  },
  link: {
    color: Colors.blue_link,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: Colors.black,
  },
  buttonText: {
    color: Colors.surface,
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 20,
    zIndex: 10,
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: FONTS.bold,
  },
  content: {
    flex: 1,
    paddingTop: 60, // space for back button
    paddingBottom: 20,
  },
  passwordWrapper: {
  position: 'relative',
  marginVertical: 10,
},
iconWrapper: {
  position: 'absolute',
  right: 10,
  top: '50%',
  transform: [{ translateY: -10 }],
},
eyeIcon:{
    color:'#0064D2'
}

});

export default Styles;
