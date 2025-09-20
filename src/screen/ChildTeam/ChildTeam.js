import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Styles from './ChildTeamCss';
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
import LinearGradient from 'react-native-linear-gradient';
import CustomSelect from '../../components/GenderSelect/GenderSelect';

const ChildTeam = () => {
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
        {/* Back Button Over Image */}
        <TouchableOpacity
          style={Styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../../assets/icons/back.png')}
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
          <Text style={Styles.backButtonText}>Let’s build your team!</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={Styles.content}>
        <View style={Styles.contentTop}>
          <View style={Styles.contentTopText}>
            <Text style={Styles.title}>
              Add the people in your {'\n'}child’s circle below.
            </Text>
            <Text style={Styles.subtitle}>
              I’ll keep them in the loop, promise!
            </Text>
          </View>
          <View style={Styles.contentTopImg}>
            <Image
              source={require('../../../assets/images/new.png')}
              style={Styles.topImg}
            />
          </View>
        </View>
        <View style={Styles.addChild}>
          <Text style={Styles.addtitle}>Add your child’s team</Text>
          <Image
            source={require('../../../assets/icons/contact.png')}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
          />
        </View>
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
              <Text style={Styles.uploadText}>Upload Photo</Text>
            </TouchableOpacity>

            <CommonInput
              placeholder={'Full Name'}
              style={Styles.eachInput}
              value={child.name}
              onChangeText={text => updateChildForm(child.id, 'name', text)}
            />
            <CommonInput
              placeholder={'Email'}
              style={Styles.eachInput}
              value={child.email}
              onChangeText={text => updateChildForm(child.id, 'email', text)}
            />
            <CommonInput
              placeholder={'Mobile phone (for sharing via text)'}
              style={Styles.eachInput}
              value={child.phone}
              onChangeText={text => updateChildForm(child.id, 'phone', text)}
            />

            <CustomSelect
              value={child.gender}
              options={['Mother', 'Father', 'Teacher', 'Doctor', 'Other']}
              title="Choose Role"
              placeholder="Role in your child's life"
              onChange={val => updateChildForm(child.id, 'gender', val)}
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
            <Text style={Styles.addAnotherText}>Add another member</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Continue Button */}
      <View style={Styles.bottomButton}>
        <CommonButton
          title="Continue"
          textStyle={Styles.buttonText}
          style={Styles.button}
          onPress={() => navigation.navigate(Routes.ONBOARDING)}
        />
      </View>
    </ScrollView>
  );
};

export default ChildTeam;
