import { AddDocs } from "@/app/common/Interface/AddSchoolDoc";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const AddDocument = () => {
  const [medicineDetailsForm, setAppointmentForm] = useState<AddDocs>({
    name: "",
    teachername:"",
    notes: "",
  });
  const onChangeField = (
    name: keyof AddDocs,
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
        <CommonInput
          onChangeText={(text) => {
            onChangeField("teachername", text);
          }}
          placeholder="Teacher Name"
          value={medicineDetailsForm.teachername}
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

export default AddDocument;

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
