import { StyleSheet } from 'react-native';
import FONTS from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 12,
  },
  radioCircle: {
    height: 16,
    width: 16,
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: '#757575',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width:10,
    height:10,
    borderRadius: '50%',
    backgroundColor: '#1E1E1E',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 12,
    fontFamily:FONTS.medium,
    color: '#1E1E1E',
    margin:0,
    paddingRight:16
  },
});
