import { ImageBackground } from "expo-image";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
// import Styles from "./SplashCss";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import Routes, { navigateScreen } from "./common/Routes";
import CommonButton from "./components/CommonButton/CommonButton";
import Styles from "./screens/onboarding/onBoardingCss";
export default function Index() {
  const navigation = useNavigation();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("/screens/onboarding/onBoarding");
  //   }, 2000);

  //   return () => clearTimeout(timer); // cleanup
  // }, [navigation]);
  useEffect(() => {
    // Keep splash screen visible while we fetch resources
    SplashScreen.preventAutoHideAsync();

    const timer = setTimeout(() => {
      SplashScreen.hideAsync(); // 👈 hide after duration
    }, 3000); // 3000 ms = 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    // <View style={Styles.main}>
    //   <Image
    //     style={Styles.splashImage}
    //     source={require("../assets/images/logo.png")}
    //     contentFit="contain"
    //   />
    // </View>
    <ImageBackground
      source={require("../assets/images/ai_girl.png")}
      style={Styles.background}
      contentFit="cover"
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
            I am the health and education concierge for parents of neurodiverse
            kids and teens, powered by AI.
          </Text>

          <CommonButton
            title="Let’s get started!"
            onPress={() => navigateScreen(Routes.logIn)} // ✅ works
          />
        </LinearGradient>
      </View>
    </ImageBackground>
  );
}
