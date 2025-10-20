import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SurveyCompleteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modalWrapp}>
        <Image
          source={require("../../../assets/images/saveimg.png")}
          style={styles.image}
        />
        <View style={styles.modal}>
          <Text style={styles.completeText}>Questionnaire completed!</Text>
          <Text style={styles.descriptionText}>
            Your responses suggest patterns that may be associated with Attention
            Deficit Hyperactivity Disorder (ADHD). This is not a diagnosis, but a
            helpful first step toward understanding your focus, behavior, and
            attention levels.
          </Text>
          <View style={styles.btnWrap}>
            <CommonButton
              style={styles.pastLogBtn}
              onPress={() => navigateScreen(Routes.homeTab)}
              backgroundColor="#fff"
              color={Colors.primary}
              title="Back to Home"
            />
            <CommonButton
              onPress={() => navigateScreen(Routes.progressTracking)}
              backgroundColor={Colors.primary}
              color="#fff"
              title="See Progress"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SurveyCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.warm,
    justifyContent: "center",
    padding: 15,
  },
  modalWrapp: {
    position: 'relative'

  },
  image: {
    height: 140,
    width: 255,
    resizeMode: "contain",
    justifyContent: 'center',
    marginHorizontal: 'auto'
  },
  modal: {
    padding: 25,
    alignItems: "center",
    backgroundColor: Colors.bg,
    borderRadius: 16,
  },
  completeText: {
    color: Colors.purple_text,
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 10,
    fontFamily: Fonts.SemiBold,
  },
  descriptionText: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    lineHeight: 15,
    textAlign: "justify",
    alignContent: "center",
    color: Colors.text
  },
  btnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    marginTop: 15,
    flex: 1
  },
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop:15
  },
  pastLogBtn: {
    borderWidth: 1,
    borderColor: Colors.primary
  },
});
