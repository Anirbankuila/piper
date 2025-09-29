import Routes, { navigateScreen } from "@/app/common/Routes";
import React, { useRef, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Colors } from "../../../constants/theme";
import CommonButton from "../../components/CommonButton/CommonButton";
import Styles from "./OtpScreenCss";

const OtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text: string, index: number) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto move to next input
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      {/* Top Back Button */}
      {/* <TouchableOpacity
        style={Styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../../assets/icons/back.png")}
          style={{ width: 16, height: 16, resizeMode: "contain" }}
        />
      </TouchableOpacity> */}

      {/* Content */}
      <View style={Styles.content}>
        <Text style={Styles.title}>
          Enter the 6-digit code that was just texted to you
        </Text>

        {/* OTP Inputs */}
        <View style={Styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={Styles.otpInput}
              keyboardType="number-pad"
              placeholderTextColor={Colors.textLight}
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>
        <View style={Styles.bottomButton}>
          <CommonButton
            title="Continue"
            textStyle={Styles.buttonText}
            style={Styles.button}
            onPress={() => navigateScreen(Routes.about)}
          />
        </View>
      </View>

      {/* Bottom Continue Button */}
    </ScrollView>
  );
};

export default OtpScreen;
