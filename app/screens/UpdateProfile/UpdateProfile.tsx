import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import CustomMultiSelect from "@/app/components/CustomCheckbox/CustomCheckbox";
import DatePicker from "@/app/components/Datepicker/DatePicker";
import GenderSelect from "@/app/components/GenderSelect/GenderSelect";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import { launchImageLibrary } from "react-native-image-picker";
import Styles from "./UpdateProfile.style";
interface childForm {
  id: number;
  name: string;
  email: string;
  phone: string;
  diagnosis: string[];
  dob: Date | undefined;
  gender: string;
  imageUri?: string;
}
const options = [
  { id: "adhd", label: "ADHD" },
  { id: "autism", label: "Autism" },
  { id: "depression", label: "Depression" },
  { id: "anxiety", label: "Anxiety" },
  { id: "epilepsy", label: "Epilepsy" },
];
const UpdateProfile = () => {
  const [childForms, setChildForms] = useState<childForm[]>([
    {
      id: 1,
      name: "",
      email: "",
      phone: "",
      diagnosis: [],
      dob: undefined,
      gender: "",
      imageUri: "",
    },
  ]);

  // -------------------------
  // Image picker
  // -------------------------
  const pickImage = async (childId: number) => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      quality: 1,
    });

    if (result.assets?.[0]?.uri) {
      updateChildForm(childId, "imageUri", result.assets[0].uri);
    }
  };

  // -------------------------
  // Add new member
  // -------------------------
  const addChildForm = () => {
    const newId = childForms.length + 1;
    setChildForms([
      ...childForms,
      {
        id: newId,
        name: "",
        email: "",
        phone: "",
        imageUri: "",
        dob: undefined,
        gender: "",
        diagnosis: [],
      },
    ]);
  };

  // -------------------------
  // Update field
  // -------------------------
  const updateChildForm = <K extends keyof childForm>(
    id: number,
    key: K,
    value: childForm[K]
  ) => {
    setChildForms(
      childForms.map((child) =>
        child.id === id ? { ...child, [key]: value } : child
      )
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={Styles.container}
        showsVerticalScrollIndicator={false}
      >
        {childForms.map((child) => (
          <View key={child.id} style={Styles.formWrap}>
            {child.imageUri && <Image source={{ uri: child.imageUri }} />}

            <TouchableOpacity
              style={Styles.uploadPhoto}
              onPress={() => pickImage(child.id)}
            >
              <View style={Styles.uploadIconWrap}>
                <Image
                  source={require("../../../assets/icons/send-square.png")}
                  style={Styles.uploadIcon}
                />
              </View>
              <Text style={Styles.uploadText}>Update Photo</Text>
            </TouchableOpacity>

            <CommonInput
              placeholder="Child's Name"
              style={Styles.eachInput}
              value={child.name}
              onChangeText={(text) => updateChildForm(child.id, "name", text)}
            />
            <CommonInput
              placeholder="Email"
              style={Styles.eachInput}
              value={child.email || ""}
              onChangeText={(text) => updateChildForm(child.id, "email", text)}
            />
            <CommonInput
              placeholder="Mobile Number"
              style={Styles.eachInput}
              value={child.phone || ""}
              keyboardType="phone-pad"
              onChangeText={(text) => updateChildForm(child.id, "phone", text)}
            />

            <Text style={Styles.selectText}>
              What is the medical diagnosis of {"\n"}your child? (Choose all
              that apply)
            </Text>
            <CustomMultiSelect
              optionStyle={Styles.selectBox}
              options={options}
              selectedValues={child.diagnosis} // must be an array
              onSelect={
                (vals: (string | number)[]) =>
                  updateChildForm(child.id, "diagnosis", vals as string[]) // pass array back
              }
            />
            <DatePicker placeHolderText="Date of Birth" />
            <GenderSelect
              value={child.gender || ""}
              placeHolderText="Child's Gender"
              style={{ fontSize: 14, fontFamily: Fonts.Regular }}
              onChange={(val: string) =>
                updateChildForm(child.id, "gender", val)
              }
            />
            <CommonInput
              placeholder="What is your child's superpower?"
              style={Styles.eachInput}
              value={child.name}
              onChangeText={(text) => updateChildForm(child.id, "name", text)}
            />
          </View>
        ))}

        <TouchableOpacity style={Styles.addAnotherWrap} onPress={addChildForm}>
          <PlusCircleIcon size={42} color={Colors.blue_link} />
          <Text style={Styles.addAnotherText}>Add Another Child</Text>
        </TouchableOpacity>
        <CommonButton
          title="Save Details"
          textStyle={Styles.buttonText}
          style={Styles.button}
          onPress={() => router.back()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;
