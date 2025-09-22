import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Routes from "./common/Routes";
const screens = [
  { name: "index", options: { headerShown: false } },
  { name: Routes.ONBOARDING, options: { headerShown: false } },
  {
    name: Routes.PROFILE,
    options: {
      headerShown: true,
      title: "Your Profile", // Title in header
      headerBackTitle: "Back", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        elevation: 0, // For Android shadow removal
        shadowOpacity: 0, // For iOS shadow removal
      },
    },
  },
  {
    name: Routes.OTP,
    options: {
      headerShown: true,
      title: "", // Title in header
      headerBackTitle: "Back", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "#fff", // Optional: header background
        elevation: 0, // For Android shadow removal
        shadowOpacity: 0, // For iOS shadow removal
      },
    },
  },
  { name: Routes.PRIVACY, options: { headerShown: false } },
  {
    name: Routes.ABOUT,
    options: {
      headerShown: true,
      title: "",
      headerTransparent: true, // header overlays the screen
      headerTintColor: "#000", // back button color
      headerShadowVisible: false,
    },
  },
  {
    name: Routes.DOCUMENT,
    options: {
      headerShown: true,
      title: "",
      headerTransparent: true, // header overlays the screen
      headerTintColor: "#000", // back button color
      headerShadowVisible: false,
    },
  },
  {
    name: Routes.CHILDTEAM,
    options: {
      headerShown: true,
      title: "Let’s build your team!", // Title in header
      headerBackTitle: "Back", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        elevation: 0, // For Android shadow removal
        shadowOpacity: 0, // For iOS shadow removal
      },
    },
  },
  // {
  //   name: Routes.TABS,
  //   options: {
  //     headerShown: false,
  //   },
  // },
];

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1 }}
        edges={["left", "right", "bottom", "top"]}
      >
        <Stack initialRouteName="index">
          {screens.map((screen) => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              options={screen.options}
            />
          ))}
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
