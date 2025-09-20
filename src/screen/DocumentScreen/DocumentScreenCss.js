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
    height: 275, // adjust as needed
  },
  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    backgroundColor: Colors.surface, // less white
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    position: 'relative',
    zIndex: 1, // make sure it's above blur if needed
  },

  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 28,
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

  button: {
    backgroundColor: '#000',
    marginTop:20
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

  optionWrap: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  selectBox: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },

  reminderDropdown: {
    paddingHorizontal: 16,
    height: 47,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputBoxIcon: {
    fontSize: 16,
    color: Colors.text,
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textUnselected:{
    fontSize: 16,
    color:Colors.text
  },
  textSelected:{
    fontSize: 16,
    color:Colors.text
  }
});

export default Styles;
