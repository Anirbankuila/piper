import CommonButton from "@/app/components/CommonButton/CommonButton";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Styles from "./onBoardingCss";

const onBoarding = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/ai_girl.png")}
      style={Styles.background}
      resizeMode="cover"
    >
      <View style={Styles.container}>
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.85)", "rgba(0,0,0,1)"]}
          locations={[0, 0.6, 1]}
          style={Styles.onboardWrapper}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Text style={Styles.title}>Hi, I’m Piper!</Text>
          <Text style={Styles.subtitle}>
            I am the health and care concierge for parents of neurodiverse kids
            and teens, powered by AI.
          </Text>

          <CommonButton
            title="Let’s get started!"
            onPress={() => router.push("/screens/Profile/Profile")} // ✅ works
          />
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default onBoarding;
