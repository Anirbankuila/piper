import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SurveyCompleteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Image
          source={require("../../../assets/images/notebook pens and sticker.png")}
          style={styles.image}
        />
        <Text style={styles.completeText}>Survey Completed!</Text>
        <Text style={styles.descriptionText}>
          Your responses suggest patterns that may be associated with Attention
          Deficit Hyperactivity Disorder (ADHD). This is not a diagnosis, but a
          helpful first step toward understanding your focus, behavior, and
          attention levels.
        </Text>
        <View style={styles.btnSection}>
          <CommonButton
            title="Back To Home"
            onPress={() => {}}
            style={{
              borderWidth: 1,
              width: "auto",
              paddingVertical: 8,
              paddingInline: 12,
            }}
            textStyle={{ fontSize: 14 }}
          />
          <CommonButton
            title="See Progress"
            onPress={() => {}}
            backgroundColor={Colors.black}
            textStyle={{ fontSize: 14, color: Colors.bg }}
            style={{
              borderWidth: 1,
              width: "auto",
              padding: 11,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SurveyCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2FFF6",
    justifyContent: "center",
    padding: 15,
  },
  image: {
    height: 86,
    width: 150,
    resizeMode: "contain",
  },
  modal: {
    padding: 25,
    alignItems: "center",
    backgroundColor: Colors.bg,
    borderRadius: 16,
  },
  completeText: {
    color: "#0064D2",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "600",
    fontFamily: Fonts.SemiBold,
  },
  descriptionText: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    lineHeight: 15,
    textAlign: "justify",
    alignContent: "center",
  },
  btnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingInline: 10,
    gap: 15,
    marginTop: 15,
  },
});
