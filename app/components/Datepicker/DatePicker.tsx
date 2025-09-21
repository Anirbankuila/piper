import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/outline";
import { Colors, Fonts } from "../../../constants/theme";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const [date, setDate] = useState<Date>(value || new Date());
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // Android auto-close, iOS keeps open
    setDate(currentDate);
    if (onChange) onChange(currentDate);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown style input */}
      <TouchableOpacity style={styles.dropdown} onPress={() => setShow(true)}>
        <Text style={{ color: "#000" }}>
          {date ? date.toDateString() : "Date of birth*"}
        </Text>
        <ChevronDownIcon style={styles.inputBoxIcon} />
      </TouchableOpacity>

      {/* Show picker when pressed */}
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "calendar"}
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.text,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputBoxIcon: {
    fontSize: 16,
    color: Colors.text,
  },
});
