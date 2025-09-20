import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Styles from './AboutScreenCss';
import CommonButton from '../../components/CommonButton/CommonButton';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/colors';
import { BlurView } from '@react-native-community/blur';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const AboutScreen = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response.assets[0].uri;
          setImageUri(uri);
        }
      },
    );
  };
  const takePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.log('Camera Error: ', response.errorMessage);
        } else {
          const uri = response.assets[0].uri;
          setImageUri(uri);
        }
      },
    );
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      {/* Top Back Button */}
      <View style={Styles.topImageContainer}>
        <Image
          source={require('../../../assets/images/aboutimg.png')} // replace with your image
          style={Styles.topImage}
        />

        {/* Back Button Over Image */}
        <TouchableOpacity
          style={Styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../../assets/icons/back.png')}
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={Styles.content}>
        <View style={Styles.glassWrapper}>
          <BlurView
            style={Styles.glassEffect}
            blurType="light"
            blurAmount={8}
            reducedTransparencyFallbackColor="white"
          />
        </View>
        <Text style={Styles.title}>
          Tell me about your {'\n'}superstar child
        </Text>

        <View style={Styles.formWrap}>
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 10,
                marginBottom: 10,
              }}
            />
          )}

          <TouchableOpacity style={Styles.uploadPhoto} onPress={pickImage}>
            <Image
              source={require('../../../assets/icons/send-square.png')}
              style={Styles.uploadIcon} // new style for icon
            />
            <Text style={Styles.uploadText}>Upload Child’s Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.bottomButton}>
          <CommonButton
            title="Continue"
            textStyle={Styles.buttonText}
            style={Styles.button}
            onPress={() => navigation.navigate('ChildProfile')}
          />
        </View>
      </View>

      {/* Bottom Continue Button */}
    </ScrollView>
  );
};

export default AboutScreen;
