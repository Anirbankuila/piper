import { Colors } from "@/constants/theme";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Routes from "./common/Routes";
const screens = [
  { name: "index", options: { headerShown: false } },
  { name: Routes.onBoarding, options: { headerShown: false } },
  {
    name: Routes.profile,
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
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.otp,
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
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.privacy,
    options: {
      headerShown: true,
      title: "Privacy", // Title in header
      headerBackTitle: "Back", // Back button text
      headerStyle: {
        elevation: 0, // For Android shadow removal
        shadowOpacity: 0, // For iOS shadow removal
      },
      headerShadowVisible: false,
    },
  },
  {
    name: Routes.about,
    options: {
      headerShown: true,
      title: "",
      headerTransparent: true, // header overlays the screen
      headerTintColor: "#000", // back button color
      headerShadowVisible: false,
    },
    statusBarStyle: "dark" as const,
  },
  {
    name: Routes.document,
    options: {
      headerShown: true,
      title: "",
      headerTransparent: true, // header overlays the screen
      headerTintColor: "#000", // back button color
      headerShadowVisible: false,
    },
    statusBarStyle: "dark" as const,
  },
  {
    name: Routes.childTeam,
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
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.logSuccess,
    options: {
      headerShown: false,
    },
  },
  {
    name: Routes.allLogs,
    options: {
      headerShown: true,
      title: "Logs", // Title in header
      headerBackTitle: "Back", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "#D2FFF6", // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.logsSummary,
    options: {
      headerShown: true,
      headerBackTitle: "Back",
      headerBackTitleVisible: true,
      headerShadowVisible: false,
      statusBarStyle: "dark" as const, // 👈 fix
      statusBarBackgroundColor: "#D2FFF6",
      headerStyle: {
        backgroundColor: "#D2FFF6", // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
    },
  },
  {
    name: Routes.momentLog,
    options: { headerShown: false },
  },

  {
    name: Routes.notification,
    options: {
      headerShown: true,
      title: "Piper's Notification", // Title in header
      headerBackTitle: "Back", // Back button text
      headerStyle: {
        elevation: 0, // For Android shadow removal
        shadowOpacity: 0, // For iOS shadow removal
      },
      headerShadowVisible: false,
    },
  },
  {
    name: Routes.chatList,
    options: {
      headerShown: true,
      title: "Chat History", // Title in header
      headerBackTitle: "Back", // Back button text
      statusBarBackgroundColor: "#D2FFF6",
      headerStyle: {
        backgroundColor: Colors.surface_bg, // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      headerShadowVisible: true,
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.chatDetails,
    options: {
      headerShown: true,
      title: "Chat History", // Title in header
      headerBackTitle: "Back", // Back button text
      statusBarBackgroundColor: "#D2FFF6",
      headerStyle: {
        backgroundColor: Colors.surface_bg, // header background
        borderBottomWidth: 1, // 👈 border thickness
        borderBottomColor: "#E5E7EB", // 👈 border color
        elevation: 0, // Android shadow remove
        shadowOpacity: 0, // iOS shadow remove
      },
      headerTintColor: "#000", // 👈 text & back button color
      headerShadowVisible: false,
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.newAppointment,
    options: {
      headerShown: true,
      title: "Add new appointment", // Title in header
      headerBackTitle: "Back", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        elevation: 0, // For Android shadow removal
        shadowOpacity: 0, // For iOS shadow removal
      },
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.patientDetails,
    options: {
      headerShown: true,
      title: "Enter Patient Details", // Title in header
      headerBackTitle: "Back", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        elevation: 0, // For Android shadow removal
        shadowOpacity: 0, // For iOS shadow removal
      },
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.updateProfile,
    options: {
      headerShown: true,
      title: "Update Profile", // Title in header
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
    name: Routes.uploadDoc,
    options: {
      headerShown: true,
      title: "Document Upload", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "#D2FFF6", // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.documentScan,
    options: {
      headerShown: true,
      title: "Scan Document", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "transparent", // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.docDetails,
    options: {
      headerShown: true,
      title: "Document Details", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "transparent", // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.orderGeneticTest,
    options: {
      headerShown: true,
      title: "Order Details",
      headerTransparent: true,
      headerBackTitle: "Profile",
      headerBackTitleVisible: true,
      headerShadowVisible: false,
      headerTintColor: Colors.bg, // 👈 text & back button color
    },
  },
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
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff" }}
        edges={["left", "right", "bottom"]}
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
        {/* <StatusBar style="light" /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
