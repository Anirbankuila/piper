import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Styles from './OtpScreenCss';
import CommonButton from '../../components/CommonButton/CommonButton';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/colors';
import Routes from '../../navigation/Routes';

const Otpscreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
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
      <TouchableOpacity
        style={Styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../../assets/icons/back.png')}
          style={{ width: 16, height: 16, resizeMode: 'contain' }}
        />
      </TouchableOpacity>

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
              ref={ref => (inputs.current[index] = ref)}
              style={Styles.otpInput}
              keyboardType="number-pad"
              placeholderTextColor={Colors.textLight}
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
            />
          ))}
        </View>
        <View style={Styles.bottomButton}>
          <CommonButton
            title="Continue"
            textStyle={Styles.buttonText}
            style={Styles.button}
            onPress={() => navigation.navigate(Routes.ABOUTSCREEN)}
          />
        </View>
      </View>

      {/* Bottom Continue Button */}
    </ScrollView>
  );
};

export default Otpscreen;
