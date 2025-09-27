import CustomMultiSelect from "@/app/components/CustomCheckbox/CustomCheckbox";
import DatePicker from "@/app/components/Datepicker/DatePicker";
import GenderSelect from "@/app/components/GenderSelect/GenderSelect";
import { BlurView } from "expo-blur";
import * as ImagePicker from "expo-image-picker";
import { router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import CommonButton from "../../components/CommonButton/CommonButton";
import CommonInput from "../../components/CommonInput/CommonInput";
import Styles from "./AboutScreenCss";

type ChildForm = {
  id: number;
  name: string;
  dob: Date;
  gender: string;
  diagnosis: string[];
  superpower?: string;
  imageUri?: string;
};

const AboutScreen: React.FC = () => {
  const navigation = useNavigation();
  const [showBack, setShowBack] = useState(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    // hide back button after scrolling past image (e.g., 300px)
    setShowBack(scrollY < 250);
  };

  // Dynamically update headerBackVisible
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: showBack,
    });
  }, [navigation, showBack]);
  const [childForms, setChildForms] = useState<ChildForm[]>([
    { id: 1, name: "", dob: new Date(), gender: "", diagnosis: [] }, // ✅ empty array
  ]);

  const options = [
    { id: "adhd", label: "ADHD" },
    { id: "autism", label: "Autism" },
    { id: "depression", label: "Depression" },
    { id: "anxiety", label: "Anxiety" },
  ];

  const pickImage = async (childId: number) => {
    // Ask for permission
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    // Open library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      updateChildForm(childId, "imageUri", result.assets[0].uri);
    }
  };
  // const takePhoto = (childId: number) => {
  //   launchCamera(
  //     { mediaType: "photo", quality: 1 },
  //     (response: ImagePickerResponse) => {
  //       if (response.didCancel) return;
  //       if (response.errorCode) return console.log(response.errorMessage);
  //       const uri = response.assets?.[0]?.uri;
  //       if (uri) updateChildForm(childId, "imageUri", uri);
  //     }
  //   );
  // };

  const addChildForm = () => {
    const newId = childForms.length + 1;
    setChildForms([
      ...childForms,
      { id: newId, name: "", dob: new Date(), gender: "", diagnosis: [] }, // ✅ empty array
    ]);
  };


  const updateChildForm = (childId: number, field: keyof ChildForm, value: any) => {
    setChildForms((prevForms) =>
      prevForms.map((child) =>
        child.id === childId ? { ...child, [field]: value } : child
      )
    );
  };


  return (
    <ScrollView
      contentContainerStyle={[Styles.container]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <StatusBar style="auto" backgroundColor="transparent" />
      <View style={Styles.topImageContainer}>
        <Image
          source={require("../../../assets/images/aboutimg.png")}
          style={Styles.topImage}
        />
      </View>

      {/* Content */}
      <View style={Styles.content}>
        <View style={Styles.glassWrapper}>
          <BlurView style={Styles.glassEffect} intensity={50} tint="light" />
        </View>
        <Text style={Styles.title}>
          Tell me about your {"\n"}superstar child
        </Text>

        {childForms.map((child) => (
          <View key={child.id} style={Styles.formWrap}>
            {child.imageUri && (
              <Image
                source={{ uri: child.imageUri }}
                style={Styles.childImage}
              />
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
              <Text style={Styles.uploadText}>Upload Child’s Photo</Text>
            </TouchableOpacity>

            <CommonInput
              placeholder={"Child’s name*"}
              style={Styles.eachInput}
              value={child.name}
              onChangeText={(text: string) =>
                updateChildForm(child.id, "name", text)
              }
            />

            <DatePicker
              value={child.dob}
              onChange={(date: Date) => updateChildForm(child.id, "dob", date)}
            />

            <GenderSelect
              value={child.gender}
              onChange={(val: string) =>
                updateChildForm(child.id, "gender", val)
              }
            />

            <View style={Styles.selectWrapper}>
              <Text style={Styles.selectText}>
                What is the medical diagnosis of {"\n"}your child? (Choose one)
              </Text>
              <CustomMultiSelect
                optionStyle={Styles.selectBox}
                options={options}
                selectedValues={child.diagnosis}   // must be an array
                onSelect={(vals: (string | number)[]) =>
                  updateChildForm(child.id, "diagnosis", vals)  // pass array back
                }
              />

            </View>

            <CommonInput
              placeholder={"What is your child's superpower?"}
              style={Styles.eachInput}
              value={child.superpower}
              onChangeText={(text: string) =>
                updateChildForm(child.id, "superpower", text)
              }
            />
          </View>
        ))}

        <View>
          <TouchableOpacity
            style={Styles.addAnotherWrap}
            onPress={addChildForm}
          >
            <PlusCircleIcon width={42} height={42} style={Styles.addIcon} />
            <Text style={Styles.addAnotherText}>Add Another Child</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.bottomButton}>
          <CommonButton
            title="Continue"
            textStyle={Styles.buttonText}
            style={Styles.button}
            onPress={() =>
              router.push("/screens/DocumentScreen/DocumentScreen")
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
