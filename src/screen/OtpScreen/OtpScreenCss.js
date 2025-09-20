import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import FONTS from '../../constants/fonts';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    padding: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom:48
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
  },
  buttonText: {
    color: Colors.surface,
  },
  backButton: {
    position: 'absolute',
    top: 50,
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
    paddingTop: 90, // space for back button
    paddingBottom: 20,
    
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom:70
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: '#fff',
  },
});

export default Styles;
