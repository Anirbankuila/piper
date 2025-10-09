import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const SurveyEntryScreen: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Image */}
      <View style={Styles.topImageContainer}>
        <Image
          source={require("../../../assets/images/portrait-person.png")}
          style={Styles.topImage}
        />
      </View>

      {/* Blur Content Section */}
      <View style={Styles.blurContainer}>
        <Image
          source={require("../../../assets/images/blur.png")}
          style={Styles.blurImg}
        />
        <View style={Styles.content}>
          <Text style={Styles.title}>Welcome To {"\n"}ADHD Tracking</Text>
          <Text style={Styles.desc}>
            This assessment uses standardized questions to give you a
            visualization of the effectiveness of your child’s treatment for
            ADHD Symptoms.
          </Text>

          <View style={Styles.bottomButton}>
            <CommonButton
              title="Start"
              textStyle={Styles.buttonText}
              style={Styles.button}
              onPress={() => navigateScreen(Routes.surveyQuestionScreen)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SurveyEntryScreen;

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
  },
  topImageContainer: {
    position: "relative",
    width: "100%",
    height: 405,
  },
  topImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  blurImg: {
    width: "100%",
    height: 80,
    resizeMode: "cover",
  },
  blurContainer: {
    marginTop: -40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  content: {
    padding: 24,
    paddingTop: 0,
    marginTop: -40,
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontSize: 34,
    lineHeight: 42,
    fontFamily: Fonts.Bold,
    color: Colors.black,
    marginBottom: 10,
  },
  desc: {
    fontSize: 17,
    lineHeight: 24,
    fontFamily: Fonts.Regular,
    color: Colors.text,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#000",
    marginTop: 20,
  },
  buttonText: {
    color: Colors.surface,
  },
  bottomButton: {
    position: "relative",
  },
});
