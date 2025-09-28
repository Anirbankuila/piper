import { Colors } from "@/constants/theme";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/outline";
import styles from "./DatePickerCss";
interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeHolderText?: string;
  isForDateTimeBoth?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value = undefined,
  onChange,
  placeHolderText = "Date of birth*",
  isForDateTimeBoth = false,
}) => {
  const [date, setDate] = useState<Date | undefined>(value);
  const [datePickerShow, setDatePickerShow] = useState<boolean>(false);
  const [timePickerShow, setTimePickerShow] = useState<boolean>(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (!selectedDate) {
      setDatePickerShow(false);
      setTimePickerShow(false);
      return;
    }

    let currentDate = date ?? new Date();

    if (timePickerShow) {
      // Update only the hours/minutes for time picker
      currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        selectedDate.getHours(),
        selectedDate.getMinutes()
      );
      setTimePickerShow(false);
    } else {
      // Update date part
      currentDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        currentDate.getHours(),
        currentDate.getMinutes()
      );
      setDatePickerShow(false);

      // If both date & time are needed on Android, show time picker next
      if (isForDateTimeBoth && Platform.OS === "android") {
        setTimePickerShow(true);
        return;
      }
    }

    setDate(currentDate);
    if (onChange) onChange(currentDate);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown style input */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setDatePickerShow(true)}
      >
        <Text style={{ color: date ? Colors.black : Colors.grey }}>
          {date
            ? isForDateTimeBoth
              ? date.toLocaleString([], {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : date.toDateString()
            : placeHolderText}
        </Text>
        <ChevronDownIcon
          fontSize={16}
          color={date ? Colors.black : Colors.grey}
        />
      </TouchableOpacity>

      {/* Show picker when pressed */}
      {datePickerShow && (
        <DateTimePicker
          value={date ?? new Date()}
          mode={Platform.OS === "ios" ? "datetime" : "date"}
          display={Platform.OS === "ios" ? "spinner" : "calendar"}
          onChange={handleChange}
        />
      )}
      {timePickerShow && (
        <DateTimePicker
          value={date ?? new Date()}
          mode="time"
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
