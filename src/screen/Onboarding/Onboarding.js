import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Styles from './OnboardingCss';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../../components/CommonButton/CommonButton';
import Routes from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';
const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../assets/images/ai_girl.png')} // replace with your image URL or require()
      style={Styles.background}
      resizeMode="cover" // 'cover' or 'contain' depending on your design
    >
      <View style={Styles.container}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.85)', 'rgba(0,0,0,1)']}
          locations={[0, 0.6, 1]} // 60% porjonto halka, last 40% deep black
          style={Styles.onboardWrapper}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Text style={Styles.title}>Hi, I’m Piper!</Text>
          <Text style={Styles.subtitle}>
            I am the health and care concierge for parents of neurodiverse kids
            and teens, powered by AI.
          </Text>
          <CommonButton title="Let’s get started!" onPress={() => {navigation.navigate(Routes.PROFILE)}} />
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
