import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import CountryPickerBottomSheet from "@/app/components/CountryPickerBottomSheet/CountryPickerBottomSheet";
import DatePicker from "@/app/components/Datepicker/DatePicker";
import GenderSelect from "@/app/components/GenderSelect/GenderSelect";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import styles from "./PatientDetails.style";
const country = [
  {
    id: "India",
    label: "India",
  },
  {
    id: "China",
    label: "China",
  },
  {
    id: "Pakistan",
    label: "Pakistan",
  },
];
const PatientDetails = () => {
  const handleValueChange = (name: string, value: any) => {};
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={[styles.container]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <Text style={styles.groupLabelText}>Enter Patient Details</Text>
        <CommonInput
          placeholder="First Name"
          onChangeText={(firstName) =>
            handleValueChange("firstName", firstName)
          }
          style={styles.inputText}
        />
        <CommonInput
          placeholder="Last Name"
          onChangeText={(lastName) => handleValueChange("lastName", lastName)}
          style={styles.inputText}
        />
        <CommonInput
          placeholder="E-Mail"
          keyboardType={"email-address"}
          onChangeText={(email) => handleValueChange("email", email)}
          style={styles.inputText}
        />
        <CommonInput
          placeholder="Age"
          keyboardType={"decimal-pad"}
          onChangeText={(age) => handleValueChange("age", age)}
          style={styles.inputText}
        />
        <DatePicker
          placeHolderText="Date of birth"
          onChange={(dob) => handleValueChange("dob", dob)}
        />
        <GenderSelect
          onChange={() => {}}
          placeHolderText="Gender"
          style={styles.inputText}
        />
        <CountryPickerBottomSheet style={styles.inputText} />
        {/* <GenderSelect onChange={() => {}} placeHolderText="Country" /> */}
        {/* <GenderSelect onChange={() => {}} value="male" /> */}
        <CommonInput
          placeholder="Mobile Number"
          keyboardType={"number-pad"}
          onChangeText={(mobileNo) => handleValueChange("mobileNo", mobileNo)}
          style={styles.inputText}
        />
        <Text style={[styles.groupLabelText]}>Medical Details</Text>
        <CommonInput
          placeholder="Doctor's Name"
          onChangeText={(doctorName) =>
            handleValueChange("doctorName", doctorName)
          }
          style={styles.inputText}
        />
        <CommonInput
          placeholder="Hospital Name"
          onChangeText={(hospitalName) =>
            handleValueChange("hospitalName", hospitalName)
          }
          style={styles.inputText}
        />
        <TouchableOpacity style={styles.uploadDocSection}>
          <PlusCircleIcon size={35} color={Colors.blue_link} />
          <Text style={styles.uploadDocText}>Upload Documents</Text>
        </TouchableOpacity>
        <CommonButton
          title="Save"
          onPress={() => router.back()}
          color={Colors.bg}
          backgroundColor={Colors.black}
          style={{ marginVertical: 20 }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PatientDetails;
