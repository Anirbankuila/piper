import { Image } from "expo-image";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import Styles from "./SplashCss";
export default function Index() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/screens/onboarding/onBoarding");
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);
  return (
    <View style={Styles.main}>
      <Image
        style={Styles.splashImage}
        source={require("../assets/images/logo.png")}
        contentFit="contain"
      />
    </View>
  );
}
