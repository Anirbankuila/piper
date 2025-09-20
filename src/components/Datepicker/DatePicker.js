import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../constants/colors';
import FONTS from '../../constants/fonts';
import { ChevronDownIcon } from 'react-native-heroicons/outline';

export default function MyDatePicker() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // Android auto-close, iOS keeps open
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown style input */}
      <TouchableOpacity style={styles.dropdown} onPress={() => setShow(true)}>
        <Text style={{ color: '#000' }}>
          {date ? date.toDateString() : 'Date of birth*'}
        </Text>
        <ChevronDownIcon style={styles.inputBoxIcon} />
      </TouchableOpacity>

      {/* Show picker when pressed */}
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: Colors.text,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputBoxIcon: {
    fontSize: 16,
    color: Colors.text,
  },
});
