import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Styles from "./DeleteLogCss";

const DeleteLog = () => {
  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {/* Content */}
      <View style={Styles.content}>
        <View style={Styles.topWrap}>
          <Text style={Styles.title}>Are you sure?</Text>
          <Image
            source={require("../../../assets/icons/document-copy.png")}
            style={Styles.topBg}
            resizeMode="cover"
          />
        </View>
        <View style={Styles.bottomWrap}>
          <Text style={Styles.subtitle}>
            Do you want to delete this life log?
          </Text>
          <View style={Styles.btnWrap}>
            <CommonButton
              style={Styles.pastLogBtn}
              onPress={() => router.back()}
              backgroundColor="#fff"
              color={Colors.primary}
              title="Cancel"
            />
            <CommonButton
              onPress={() => navigateScreen(Routes.allLogs)}
              backgroundColor={Colors.primary}
              color="#fff"
              title="Delete"
              style={Styles.deleteBtn}
            />
          </View>
        </View>
      </View>
      <View style={Styles.piperStar}>
        <Image
          source={require("../../../assets/images/PiperStar.png")} // put your logo inside assets folder
          style={Styles.piperStarImg}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

export default DeleteLog;
