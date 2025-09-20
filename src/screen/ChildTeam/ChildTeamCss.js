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
    backgroundColor: 'rgba(255,255,255,0,4)', // less white
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    position: 'relative',
    zIndex: 1, // make sure it's above blur if needed
    paddingTop:0
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
    backgroundColor: 'rgba(255,255,255,0.5)', // lighter white
  },

  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 28,
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
    marginTop: 0,
  },
  uploadPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  uploadIconWrap: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#66A2E4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F0FB',
    width: 32,
    height: 32,
    borderRadius: '50%',
  },
  uploadIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  uploadText: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: Colors.text,
  },
  eachInput: {
    padding: 16,
    marginTop: 0,
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
  selectText: {
    fontSize: 16,
    color: '#141514',
    fontFamily: FONTS.bold,
  },
  selectBox: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  addAnotherWrap: {
    padding: 12,
    backgroundColor: '#F3F5F7',
    borderRadius: 20,
    alignItems: 'center',
    height: 66,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
    borderWidth: 1,
    borderColor: '#C1C1C1',
    borderStyle: 'dashed',
    marginTop: 18,
    marginBottom: 10,
  },
  addAnotherText: {
    fontFamily: FONTS.bold,
    color: Colors.text,
    fontWeight: '600',
  },
  addIcon: {
    color: Colors.blue_link,
    fontSize: 42,
    width: 42,
    height: 42,
  },
});

export default Styles;
