import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import Styles from './SplashCss';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../navigation/Routes';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(Routes.ONBOARDING);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);

  return (
    <View style={Styles.main}>
      <Image
        style={Styles.splashImage}
        source={require('../../../assets/images/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
