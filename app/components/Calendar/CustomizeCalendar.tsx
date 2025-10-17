import { Colors } from "@/constants/theme";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import styles from "./CustomizeCalendar.Style";
const CustomizeCalendar = () => {
  const [selected, setSelected] = useState("");
  const [current, setCurrent] = useState(dayjs().format("YYYY-MM-DD"));
  return (
    <Calendar
      key={current}
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      current={current}
      style={{ height: 356 }}
      markedDates={{
        [selected]: {
          customStyles: {
            container: {
              borderWidth: 1,
              backgroundColor:Colors.surface_bg,
              borderColor: Colors.strokeColor, // ✅ active border color
              borderRadius: 10, // makes it circular
            },
            text: {
              color: Colors.black, // date text color
            },
          },
        },
        "2025-09-02": { marked: true },
      }}
      markingType="custom" // ✅ this enables customStyles
      firstDay={1}
      hideArrows
      renderHeader={(date) => {
        const month = date.toString("MMMM");
        const year = date.getFullYear();
        return (
          <View style={styles.monthHeaderView}>
            <TouchableOpacity
              onPress={() => {
                setCurrent(
                  dayjs(current).subtract(1, "month").format("YYYY-MM-DD")
                );
              }}
              style={styles.arrowBtn}
            >
              <ChevronLeftIcon size={22} color={Colors.primary} />
            </TouchableOpacity>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.monthText}>{month}</Text>
              <Text style={styles.yearText}>{year}</Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                setCurrent(dayjs(current).add(1, "month").format("YYYY-MM-DD"))
              }
              style={styles.arrowBtn}
            >
              <ChevronRightIcon size={22} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        );
      }}
      theme={{
        selectedDayBackgroundColor: Colors.surface_bg,
        dotColor: Colors.blue_link,
        selectedDotColor: Colors.blue_link,
      }}
    />

  );
};

export default CustomizeCalendar;
