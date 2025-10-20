import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors } from "@/constants/theme";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Styles from "./AddChildSuccessCss";

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
            Contact has been added!
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
            backgroundColor={Colors.primary}
            color={Colors.bg}
            title="Home"
          />
          
        </View>
      </View>
      {/* <View style={Styles.piperStar}>
        <Image
          source={require("../../../assets/images/PiperStar.png")} // put your logo inside assets folder
          style={Styles.piperStarImg}
          resizeMode="cover"
        />
      </View> */}
    </ScrollView>
  );
};

export default LogSuccess;
