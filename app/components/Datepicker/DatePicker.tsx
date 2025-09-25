import { Colors } from "@/constants/theme";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Platform,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/outline";
import styles from "./DatePickerCss";
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
        <ChevronDownIcon fontSize={16} color={Colors.text} />
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

