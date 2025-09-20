import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ChevronDownIcon } from 'react-native-heroicons/outline';
import Colors from '../../constants/colors';
import FONTS from '../../constants/fonts';

const CustomSelect = ({ 
  value, 
  onChange, 
  options = [], 
  title = "Select Option", 
  placeholder = "Select" 
}) => {
  const refRBSheet = useRef();

  return (
    <View>
      {/* Selected Value */}
      <TouchableOpacity
        style={styles.inputBox}
        onPress={() => refRBSheet.current.open()}
      >
        <Text style={value ? styles.selectedText : styles.placeholderText}>
          {value || placeholder}
        </Text>
        <ChevronDownIcon style={styles.inputBoxIcon} />
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
        customStyles={{
          wrapper: { backgroundColor: 'rgba(0,0,0,0.5)' },
          container: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        }}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>{title}</Text>
          {options.map((opt, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => {
                onChange(opt);
                refRBSheet.current.close();
              }}
            >
              <Text style={{ fontSize: 16 }}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </RBSheet>
    </View>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: Colors.text,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  inputBoxIcon: {
    fontSize: 16,
    color: Colors.text,
  },
  placeholderText: {
    color: "#aaaaaa",
    fontSize: 16,
  },
  selectedText: {
    fontSize: 16,
    color: Colors.text,
  }
});
