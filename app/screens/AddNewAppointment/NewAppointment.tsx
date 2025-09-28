import { IAppointmentForm } from "@/app/common/Interface/Calendar";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import DatePicker from "@/app/components/Datepicker/DatePicker";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import styles from "./NewAppointment.style";
const NewAppointment = () => {
  const [appointmentForm, setAppointmentForm] = useState<IAppointmentForm>({
    title: "",
    dateTime: undefined,
    remainder: undefined,
  });
  const onChangeField = (
    name: keyof IAppointmentForm,
    value: string | Date | undefined
  ) => {
    setAppointmentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSaveAppointment = () => {
    console.log(appointmentForm);
    router.back();
  };
  return (
    <View style={styles.appointmentContainer}>
      <View style={styles.formContainer}>
        <CommonInput
          onChangeText={(text) => {
            onChangeField("title", text);
          }}
          placeholder="Title"
          value={appointmentForm.title}
        />
        <DatePicker
          placeHolderText="Choose date and time"
          isForDateTimeBoth
          value={appointmentForm.dateTime}
          onChange={(dateTime) => {
            onChangeField("dateTime", dateTime);
          }}
        />
        <DatePicker
          placeHolderText="Set Remainder"
          isForDateTimeBoth
          value={appointmentForm.remainder}
          onChange={(remainder) => {
            onChangeField("remainder", remainder);
          }}
        />
      </View>
      <CommonButton
        title="Save"
        backgroundColor={Colors.black}
        color={Colors.bg}
        onPress={onSaveAppointment}
      />
    </View>
  );
};

export default NewAppointment;
