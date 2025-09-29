import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Styles from "./DocumentSuccessCss";

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
          <Image
            source={require("../../../assets/icons/saveddoc.png")} // put your logo inside assets folder
            style={Styles.topBg}
            resizeMode="cover"
          />
          <Text style={Styles.title}>Document Saved!</Text>
        </View>
        <View style={Styles.btnWrap}>
          <CommonButton
            style={[Styles.pastLogBtn, { width: "52%" }]} // same width add
            onPress={() => navigateScreen(Routes.homeTab)}
            backgroundColor="#fff"
            color="#000"
            title="Document List"
            textStyle={Styles.btnText}
          />
          <CommonButton
            style={[{ width: "45%" }]}
            onPress={() => navigateScreen(Routes.uploadDoc)}
            backgroundColor="#000"
            color="#fff"
            title="Done"
            textStyle={Styles.btnText}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default DocumentSuccess;
