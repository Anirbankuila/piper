import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Styles from './PrivacyCss';
import CommonInput from '../../components/CommonInput';
import CommonButton from '../../components/CommonButton/CommonButton';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../navigation/Routes';
import { Ionicons } from '@expo/vector-icons'; // or any icon library you use
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Privacy = () => {
  const navigation = useNavigation();

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
        <Text style={Styles.backButtonText}>Privacy</Text>
      </TouchableOpacity>

      {/* Content */}
      <View style={Styles.content}>
        <Text style={Styles.title}>Privacy Setting</Text>
        <Text style={Styles.subtitle}>
          Would you like to contribute to Piper's community resources?
        </Text>
        <Text style={Styles.paragraph}>
          Piper's community is built on the experiences of parents who have
          chosen to share anonymous observations to build POD Health's Library.
          This is a beautiful gift.
        </Text>

        <Text style={Styles.paragraph}>
          Please consider choosing <Text style={Styles.boldText}>"Share"</Text>{' '}
          as your default setting. If you choose{' '}
          <Text style={Styles.boldText}>"Share"</Text>, we will de-identify,
          process, and combine the information you provide with our other
          content.
        </Text>

        <Text style={Styles.paragraph}>
          <Text style={Styles.boldText}>
            Your information will always be anonymous. We will never share your
            name, your child's name, or birthdate without additional permission.
          </Text>
        </Text>

        <Text style={Styles.paragraph}>
          You can change this setting later in Profile Settings.
        </Text>

        <Text style={Styles.title}>Terms of Use</Text>
        <Text style={Styles.subtitle}>Authorization</Text>
        <Text style={Styles.paragraph}>
          By proceeding, you authorize POD Health to collect personal and health
          information about you and your child in accordance with its Privacy
          Policy and Terms of Use.
        </Text>

        <Text style={Styles.paragraph}>
          As part of the personal information we collect, we will ask for your
          child's gender, the month/year of your child's birth, and other
          demographics. You will also have the option to record your child's
          conditions, symptoms, and experiences with parenting, therapy,
          treatment, specialists, and programs.
        </Text>

        <Text style={Styles.paragraph}>
          This Authorization is voluntary and you may revoke it at any time with
          no consequences. Unless otherwise revoked, this Authorization will
          expire on the date your child reaches the age of majority, as governed
          by federal and state law. To request a copy of this Authorization,
          revoke authorization on behalf of your child, or to request additional
          information, please contact POD Health by emailing{' '}
          <Text style={Styles.link}>privacy@piper.ai</Text>.
        </Text>
        <Text style={Styles.paragraph}>
          THE INFORMATION YOU PROVIDE TO PIPER'S WEBSITE OR APPLICATIONS IS NOT
          INTENDED FOR MEDICAL TREATMENT OR RECOMMENDATIONS. IF YOUR CHILD IS
          EXPERIENCING A MEDICAL EMERGENCY, PLEASE CONTACT YOUR CHILD'S
          HEALTHCARE PROVIDER OR DIAL 9-1-1.
        </Text>
        <Text style={Styles.paragraph}>
          By proceeding, you certify to POD Health that you have the legal
          authority as parent or legal guardian to submit the information you
          enter into POD Health's website or application on behalf of your
          child.
        </Text>
        <Text style={Styles.paragraph}>
          By proceeding, you acknowledge that POD Health is not responsible for
          the accuracy of the information you submit on behalf of your child and
          will not independently verify the accuracy of any medical or
          demographic information.
        </Text>
      </View>

      {/* Bottom Continue Button */}
      <View style={Styles.bottomButton}>
        <CommonButton
          title="Continue"
          textStyle={Styles.buttonText}
          style={Styles.button}
          onPress={() => navigation.navigate('ChildProfile')}
        />
      </View>
    </ScrollView>
  );
};

export default Privacy;
