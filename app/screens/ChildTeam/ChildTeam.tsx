import CommonInput from "@/app/components/CommonInput/CommonInput";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import CommonButton from "../../components/CommonButton/CommonButton";
import CustomSelect from "../../components/GenderSelect/GenderSelect";
import Styles from "./ChildTeamCss";

// -------------------------
// Types
// -------------------------
interface ChildForm {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  gender?: string;
  imageUri?: string;
}

const ChildTeam: React.FC = () => {
  const [childForms, setChildForms] = useState<ChildForm[]>([
    { id: 1, name: "" },
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

  const takePhoto = async (childId: number) => {
    const result = await launchCamera({ mediaType: "photo", quality: 1 });

    if (result.assets?.[0]?.uri) {
      updateChildForm(childId, "imageUri", result.assets[0].uri);
    }
  };

  // -------------------------
  // Add new member
  // -------------------------
  const addChildForm = () => {
    const newId = childForms.length + 1;
    setChildForms([...childForms, { id: newId, name: "" }]);
  };

  // -------------------------
  // Update field
  // -------------------------
  const updateChildForm = <K extends keyof ChildForm>(
    id: number,
    key: K,
    value: ChildForm[K]
  ) => {
    setChildForms(
      childForms.map((child) =>
        child.id === id ? { ...child, [key]: value } : child
      )
    );
  };

  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={Styles.content}>
        {/* Top */}
        <View style={Styles.contentTop}>
          <View style={Styles.contentTopText}>
            <Text style={Styles.title}>
              Add the people in your {"\n"}child’s circle below.
            </Text>
            <Text style={Styles.subtitle}>
              I’ll keep them in the loop, promise!
            </Text>
          </View>
          <View style={Styles.contentTopImg}>
            <Image
              source={require("../../../assets/images/new.png")}
              style={Styles.topImg}
            />
          </View>
        </View>

        {/* Add Child Header */}
        <View style={Styles.addChild}>
          <Text style={Styles.addtitle}>Add your child’s team</Text>
          <Image
            source={require("../../../assets/icons/contact.png")}
            style={{ width: 24, height: 24, resizeMode: "contain" }}
          />
        </View>

        {/* Child Forms */}
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
              <Text style={Styles.uploadText}>Upload Photo</Text>
            </TouchableOpacity>

            <CommonInput
              placeholder="Full Name"
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
              placeholder="Mobile phone (for sharing via text)"
              style={Styles.eachInput}
              value={child.phone || ""}
              keyboardType="phone-pad"
              onChangeText={(text) => updateChildForm(child.id, "phone", text)}
            />

            <CustomSelect
              value={child.gender || ""}
              options={["Mother", "Father", "Teacher", "Doctor", "Other"]}
              title="Choose Role"
              placeholder="Role in your child's life"
              onChange={(val: string) =>
                updateChildForm(child.id, "gender", val)
              }
            />
          </View>
        ))}

        {/* Add another member */}
        <View>
          <TouchableOpacity
            style={Styles.addAnotherWrap}
            onPress={addChildForm}
          >
            <PlusCircleIcon width={42} height={42} style={Styles.addIcon} />
            <Text style={Styles.addAnotherText}>Add another member</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Continue Button */}
      <View style={Styles.bottomButton}>
        <CommonButton
          title="Continue"
          textStyle={Styles.buttonText}
          style={Styles.button}
          onPress={() => router.replace("/(tabs)/HomeTab")}
        />
      </View>
    </ScrollView>
  );
};

export default ChildTeam;
