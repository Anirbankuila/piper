import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Styles from "./LogSuccessCss";

const LogSuccess = () => {
  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {/* Content */}
      <View style={Styles.content}>
        <View style={Styles.topWrap}>
          <Text style={Styles.title}>Saved!</Text>
          <Text style={Styles.subtitle}>
            My brain’s on it now, so yours can take a {"\n"} break. I got you!
          </Text>
          <Image
            source={require("../../../assets/images/saveimg.png")} // put your logo inside assets folder
            style={Styles.topBg}
            resizeMode="cover"
          />
        </View>
        <View style={Styles.btnWrap}>
          <CommonButton
            style={Styles.pastLogBtn}
            onPress={() => navigateScreen(Routes.homeTab)}
            backgroundColor="#fff"
            color={Colors.primary}
            title="Back to Home"
          />
          <CommonButton
            onPress={() => {
              router.replace("/screens/AllLogs/AllLogs");
            }}
            backgroundColor={Colors.primary}
            color="#fff"
            title="View Past Logs"
          />
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

export default LogSuccess;
