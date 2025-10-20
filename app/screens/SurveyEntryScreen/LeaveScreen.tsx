import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LeaveScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.modalWrapp}>
          <Text style={styles.completeText}>Are you sure?</Text>
          <Image
            source={require("../../../assets/icons/document-copy.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.descriptionText}>
          Do you want to leave this assessment? It will discard your current
          answers
        </Text>
        <View style={styles.btnWrap}>
          <CommonButton
            style={styles.pastLogBtn}
            onPress={() => navigateScreen(Routes.progressTracking)}
            backgroundColor="#fff"
            color={Colors.primary}
            title="Leave"
          />
          <CommonButton
            onPress={() => navigation.goBack()}
            backgroundColor={Colors.error}
            color="#fff"
            title="Cancel"
            style={styles.cancelBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default LeaveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.warm,
    justifyContent: "center",
    padding: 15,
  },
  modalWrapp: {
    position: "relative",
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.strokeColor,
    width: "100%",
  },
  image: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  modal: {
    alignItems: "center",
    backgroundColor: Colors.bg,
    borderRadius: 16,
  },
  completeText: {
    color: Colors.purple_text,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: Fonts.SemiBold,
  },
  descriptionText: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    lineHeight: 15,
    textAlign: "justify",
    alignContent: "center",
    color: Colors.text,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  btnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    marginTop: 15,
    flex: 1,
  },
  btnWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 15,
    paddingHorizontal: 12,
  },
  pastLogBtn: {
    borderWidth: 1,
    width: "49%",
    borderColor: Colors.primary,
  },
  cancelBtn: {
    width: "49%",
  },
});
