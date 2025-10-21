import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import React, { useState } from "react";
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../components/CommonButton/CommonButton";
import Styles from "./AddChildTeamCss";

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
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === "ios" ? 80 : 100}
      keyboardShouldPersistTaps="handled"
    >
      <View style={Styles.content}>
        {/* Add Child Header */}
        <View style={Styles.addChild}>
          <Text style={Styles.addtitle}>Add your child’s team</Text>
        </View>

        {/* Child Forms */}
        {childForms.map((child) => (
          <View key={child.id} style={Styles.formWrap}>
            {child.imageUri && (
              <Image source={{ uri: child.imageUri }} style={Styles.previewImg} />
            )}

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
            <CommonInput
              placeholder="Role in your child's life"
              style={Styles.eachInput}
              value={child.gender || ""}
              onChangeText={(val: string) =>
                updateChildForm(child.id, "gender", val)
              }
            />
          </View>
        ))}
      </View>

      {/* Bottom Continue Button */}
      <View style={Styles.bottomButton}>
        <CommonButton
          title="Save"
          textStyle={Styles.buttonText}
          style={Styles.button}
          onPress={() => navigateScreen(Routes.addChildSuccess)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ChildTeam;
