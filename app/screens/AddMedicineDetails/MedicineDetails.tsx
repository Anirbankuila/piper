import { IMedicineDetails } from "@/app/common/Interface/Medication";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import DatePicker from "@/app/components/Datepicker/DatePicker";
import GenderSelect from "@/app/components/GenderSelect/GenderSelect";
import { Colors, Fonts } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const MedicineDetails = () => {
  const [medicineDetailsForm, setAppointmentForm] = useState<IMedicineDetails>({
    name: "",
    remainder: undefined,
    dosageAmount: 0,
    chooseDaily: false,
    startDate: undefined,
    endDate: undefined,
    dateTime: undefined,
    notes: "",
  });
  const onChangeField = (
    name: keyof IMedicineDetails,
    value: string | Date | undefined | number
  ) => {
    setAppointmentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSaveMedicineDetails = () => {
    console.log(medicineDetailsForm);
    router.back();
  };
  return (
    <View style={styles.appointmentContainer}>
      <View style={styles.formContainer}>
        <CommonInput
          onChangeText={(text) => {
            onChangeField("name", text);
          }}
          placeholder="Medicine Name"
          value={medicineDetailsForm.name}
        />
        <DatePicker
          placeHolderText="Set Remainder"
          isForTimePicker
          value={medicineDetailsForm.remainder}
          onChange={(dateTime) => {
            onChangeField("remainder", dateTime);
          }}
        />
        <GenderSelect
          onChange={() => {}}
          placeHolderText="Dosage Amount"
          options={["500mg", "250mg", "300mg"]}
          style={{ fontFamily: Fonts.Regular, fontSize: 14 }}
        />
        <GenderSelect
          onChange={() => {}}
          placeHolderText="Choose Daily"
          options={["After Lunch", "Morning", "Before Sleeping"]}
          style={{ fontFamily: Fonts.Regular, fontSize: 14 }}
        />
        {/* <CommonInput
          onChangeText={(text) => {
            onChangeField("dosageAmount", text);
          }}
          placeholder="Dosage Amount"
          value={medicineDetailsForm.dosageAmount.toString()}
        />
        <CommonInput
          onChangeText={(text) => {
            onChangeField("chooseDaily", text);
          }}
          placeholder="Choose Daily"
          value={medicineDetailsForm.chooseDaily.toString()}
        /> */}
        <DatePicker
          placeHolderText="Start Date"
          value={medicineDetailsForm.startDate}
          onChange={(startDate) => {
            onChangeField("startDate", startDate);
          }}
        />
        <DatePicker
          placeHolderText="End Date"
          value={medicineDetailsForm.endDate}
          onChange={(endDate) => {
            onChangeField("endDate", endDate);
          }}
        />
        <CommonInput
          onChangeText={(text) => {
            onChangeField("notes", text);
          }}
          placeholder="Notes"
          value={medicineDetailsForm.notes}
        />
      </View>
      <CommonButton
        title="Save"
        backgroundColor={Colors.black}
        color={Colors.bg}
        onPress={onSaveMedicineDetails}
      />
    </View>
  );
};

export default MedicineDetails;

const styles = StyleSheet.create({
  appointmentContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.bg,
    padding: 18,
  },
  formContainer: {
    marginTop: 20,
  },
});
