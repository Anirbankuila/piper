import { AddAllergyDoc } from "@/app/common/Interface/AddSchoolDoc";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const MedicineDetails = () => {
  const [medicineDetailsForm, setAppointmentForm] = useState<AddAllergyDoc>({
    type: "",
    notes: "",
  });
  const onChangeField = (
    name: keyof AddAllergyDoc,
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
            onChangeField("type", text);
          }}
          placeholder="Allergy Type"
          value={medicineDetailsForm.type}
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
