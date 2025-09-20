import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import FONTS from '../../constants/fonts';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    // padding: 24,
  },
  topImageContainer: {
    position: 'relative',
    width: '100%',
    height: 250, // adjust as needed
  },
  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    backgroundColor: 'rgba(255,255,255,0.6)', // instead of pure white
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: 'relative',
    zIndex: 0,
    paddingTop: 0,
  },
  glassWrapper: {
    position: 'absolute',
    top: -35,
    left: 0,
    right: 0,
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    zIndex: 0,
  },
  glassEffect: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.65)', // light frosted overlay
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
  },

  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 48,
    marginTop: -10,
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
  uploadPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },

  uploadIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },

  uploadText: {
    fontSize: 16,
    color: '#333',
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

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 70,
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
