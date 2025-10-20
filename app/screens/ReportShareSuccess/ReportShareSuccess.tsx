import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors } from "@/constants/theme";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Styles from "./ReportShareSuccessCss";

const DocumentSuccess = () => {
  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {/* Content */}
      <View style={Styles.content}>
        <View style={Styles.topWrap}>

          <Text style={Styles.title}>Report Shared!</Text>
          <Image
            source={require("../../../assets/images/success.png")} // put your logo inside assets folder
            style={Styles.topBg}
            resizeMode="cover"
          />
        </View>
        <View style={Styles.btnWrap}>
          <CommonButton
            style={Styles.doneBtn}
            onPress={() => navigateScreen(Routes.homeTab)}
            backgroundColor={Colors.primary}
            color="#fff"
            title="Done"
            textStyle={Styles.btnText}
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
export default DocumentSuccess;
