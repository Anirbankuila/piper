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
import CommonInput from '../../components/CommonInput';
import MyDatePicker from '../../components/Datepicker/DatePicker';
import GenderSelect from '../../components/GenderSelect/GenderSelect';
import CustomRadio from '../../components/Radiobutton/Radiobutton';
import { PlusCircleIcon } from 'react-native-heroicons/outline';
import Routes from '../../navigation/Routes';

const AboutScreen = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);
  const [gender, setGender] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);

  const options = [
    { id: 'adhd', label: 'ADHD' },
    { id: 'autism', label: 'Autism' },
    { id: 'depression', label: 'Depression' },
    { id: 'anxiety', label: 'Anxiety' },
  ];

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
  const [childForms, setChildForms] = useState([
    { id: 1, name: '', dob: new Date(), gender: '', diagnosis: '' },
  ]);

  const addChildForm = () => {
    const newId = childForms.length + 1;
    setChildForms([
      ...childForms,
      { id: newId, name: '', dob: new Date(), gender: '', diagnosis: '' },
    ]);
  };

  const updateChildForm = (id, key, value) => {
    setChildForms(
      childForms.map(child =>
        child.id === id ? { ...child, [key]: value } : child,
      ),
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

        {childForms.map(child => (
          <View key={child.id} style={Styles.formWrap}>
            {child.imageUri && (
              <Image
                source={{ uri: child.imageUri }}
                style={Styles.childImage}
              />
            )}

            <TouchableOpacity style={Styles.uploadPhoto} onPress={pickImage}>
              <View style={Styles.uploadIconWrap}>
                <Image
                  source={require('../../../assets/icons/send-square.png')}
                  style={Styles.uploadIcon} // new style for icon
                />
              </View>
              <Text style={Styles.uploadText}>Upload Child’s Photo</Text>
            </TouchableOpacity>

            <CommonInput
              placeholder={'Child’s name*'}
              style={Styles.eachInput}
              value={child.name}
              onChangeText={text => updateChildForm(child.id, 'name', text)}
            />

            <MyDatePicker
              value={child.dob}
              onChange={date => updateChildForm(child.id, 'dob', date)}
            />

            <GenderSelect
              value={child.gender}
              onChange={val => updateChildForm(child.id, 'gender', val)}
            />

            <View style={Styles.selectWrapper}>
              <Text style={Styles.selectText}>
                What is the medical diagnosis of {'\n'}your child? (Choose one)
              </Text>
              <CustomRadio
                optionStyle={Styles.selectBox}
                options={options}
                selectedValue={child.diagnosis}
                onSelect={val => updateChildForm(child.id, 'diagnosis', val)}
              />
            </View>

            <CommonInput
              placeholder={"What is your child's superpower?"}
              style={Styles.eachInput}
              value={child.superpower}
              onChangeText={text =>
                updateChildForm(child.id, 'superpower', text)
              }
            />
          </View>
        ))}

        <View style={Styles.addAnotherWrapper}>
          <TouchableOpacity
            style={Styles.addAnotherWrap}
            onPress={addChildForm}
          >
            <PlusCircleIcon
              width={42} // icon width
              height={42}
              style={Styles.addIcon}
            />
            <Text style={Styles.addAnotherText}>Add Another Child</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottomButton}>
          <CommonButton
            title="Continue"
            textStyle={Styles.buttonText}
            style={Styles.button}
            onPress={() => navigation.navigate(Routes.DOCUMENTSCREEN)}
          />
        </View>
      </View>

      {/* Bottom Continue Button */}
    </ScrollView>
  );
};

export default AboutScreen;
