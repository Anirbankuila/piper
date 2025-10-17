import { AddMedicalDoc } from "@/app/common/Interface/AddSchoolDoc";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import DatePicker from "@/app/components/Datepicker/DatePicker";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const MedicineDetails = () => {
  const [medicineDetailsForm, setAppointmentForm] = useState<AddMedicalDoc>({
    name: "",
    doctorName:"",
    startDate: undefined,
    endDate: undefined,
    notes: "",
  });
  const onChangeField = (
    name: keyof AddMedicalDoc,
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
          placeholder="Document Name"
          value={medicineDetailsForm.name}
        />
        
      
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
            onChangeField("doctorName", text);
          }}
          placeholder="Doctors Name"
          value={medicineDetailsForm.doctorName}
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
