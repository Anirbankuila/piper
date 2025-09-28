import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import DatePicker from "@/app/components/Datepicker/DatePicker";
import GenderSelect from "@/app/components/GenderSelect/GenderSelect";
import { Colors } from "@/constants/theme";
import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import styles from "./PatientDetails.style";
const PatientDetails = () => {
  const handleValueChange = (name: string, value: any) => {};
  return (
    <ScrollView
      contentContainerStyle={[styles.container]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <Text style={styles.groupLabelText}>Enter Patient Details</Text>
      <CommonInput
        placeholder="First Name"
        onChangeText={(firstName) => handleValueChange("firstName", firstName)}
      />
      <CommonInput
        placeholder="Last Name"
        onChangeText={(lastName) => handleValueChange("lastName", lastName)}
      />
      <CommonInput
        placeholder="E-Mail"
        keyboardType={"email-address"}
        onChangeText={(email) => handleValueChange("email", email)}
      />
      <CommonInput
        placeholder="Age"
        keyboardType={"decimal-pad"}
        onChangeText={(age) => handleValueChange("age", age)}
      />
      <DatePicker
        placeHolderText="Date of birth"
        onChange={(dob) => handleValueChange("dob", dob)}
      />
      <GenderSelect onChange={() => {}} value="male" />
      <GenderSelect onChange={() => {}} value="male" />
      <CommonInput
        placeholder="Mobile Number"
        keyboardType={"number-pad"}
        onChangeText={(mobileNo) => handleValueChange("mobileNo", mobileNo)}
      />
      <Text style={[styles.groupLabelText]}>Medical Details</Text>
      <CommonInput
        placeholder="Doctor's Name"
        onChangeText={(doctorName) =>
          handleValueChange("doctorName", doctorName)
        }
      />
      <CommonInput
        placeholder="Hospital Name"
        onChangeText={(hospitalName) =>
          handleValueChange("hospitalName", hospitalName)
        }
      />
      <TouchableOpacity style={styles.uploadDocSection}>
        <PlusCircleIcon size={42} style={styles.addIcon} />
        <Text style={styles.uploadDocText}>Upload Documents</Text>
      </TouchableOpacity>
      <CommonButton
        title="Save"
        onPress={() => {}}
        color={Colors.bg}
        backgroundColor={Colors.black}
        style={{ marginVertical: 20 }}
      />
    </ScrollView>
  );
};

export default PatientDetails;
