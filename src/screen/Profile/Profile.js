import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './ProfileCss';
import CommonInput from '../../components/CommonInput';
import CommonButton from '../../components/CommonButton/CommonButton';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../navigation/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';

const Profile = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={Styles.container}>
      {/* Top Back Button */}
      <TouchableOpacity
        style={Styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../../assets/icons/back.png')}
          style={{ width: 16, height: 16, resizeMode: 'contain' }}
        />
        <Text style={Styles.backButtonText}>Your Profile</Text>
      </TouchableOpacity>

      {/* Content */}
      <View style={Styles.content}>
        <Text style={Styles.title}>
          Enter the information for the parent,{'\n'}caregiver or champion
        </Text>
        <Text style={Styles.subtitle}>
          We’ll get to your child’s profile next.
        </Text>

        <View style={Styles.formWrap}>
          <CommonInput
            placeholder="Full Name"
            onChangeText={text => console.log(text)}
          />
          <CommonInput
            placeholder="Email"
            onChangeText={text => console.log(text)}
          />
          <CommonInput
            placeholder="Mobile Phone"
            onChangeText={text => console.log(text)}
          />
          <View style={Styles.passwordWrapper}>
            <CommonInput
              placeholder="Password"
              secureTextEntry={!showPassword} // ✅ toggle visibility
              onChangeText={text => console.log(text)}
            />
            <TouchableOpacity
              style={Styles.iconWrapper}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon size={20} style={Styles.eyeIcon} />
              ) : (
                <EyeIcon size={20} style={Styles.eyeIcon} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={Styles.terms}>
            By proceeding, you agree with our{' '}
            <Text
              style={Styles.link}
              onPress={() => navigation.navigate(Routes.PRIVACY)}
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
          onPress={() => navigation.navigate(Routes.OTPSCREEN)}
        />
      </View>
    </View>
  );
};

export default Profile;
