import Routes, { navigateScreen } from "@/app/common/Routes";
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
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import CommonButton from "../../components/CommonButton/CommonButton";
import CommonInput from "../../components/CommonInput/CommonInput";
import Styles from "./ProfileCss";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={Styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={Styles.content}>
          <Text style={Styles.title}>
            Enter the information for the parent,{"\n"}caregiver or champion
          </Text>
          <Text style={Styles.subtitle}>
            We’ll get to your child’s profile next.
          </Text>

          <View style={Styles.formWrap}>
            <CommonInput
              placeholder="Full Name"
              onChangeText={(text) => console.log(text)}
            />
            <CommonInput
              placeholder="Email"
              onChangeText={(text) => console.log(text)}
              keyboardType="email-address"
            />
            <CommonInput
              placeholder="Mobile Phone"
              onChangeText={(text) => console.log(text)}
              keyboardType="phone-pad"
            />
            <View style={Styles.passwordWrapper}>
              <CommonInput
                placeholder="Password"
                secureTextEntry={!showPassword} // ✅ toggle visibility
                onChangeText={(text) => console.log(text)}
              />
              <TouchableOpacity
                style={Styles.iconWrapper}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon size={20} color={"#0064D2"} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </TouchableOpacity>
            </View>

            <Text style={Styles.terms}>
              By proceeding, you agree with our{" "}
              <Text
                style={Styles.link}
                onPress={() => navigateScreen(Routes.privacy)}
              >
                Terms of use & Legal Notice
              </Text>
              .
            </Text>
          </View>
        </View>

        {/* Bottom Continue Button */}
        <View style={Styles.bottomButton}>
          <CommonButton
            title="Continue"
            textStyle={Styles.buttonText}
            style={Styles.button}
            onPress={() => router.navigate("/screens/OtpScreen/OtpScreen")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
