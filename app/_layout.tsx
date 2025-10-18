import { Colors } from "@/constants/theme";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Routes from "./common/Routes";
const screens = [
  { name: "index", options: { headerShown: false } },
  { name: Routes.onBoarding, options: { headerShown: false } },
  {
    name: Routes.logIn,
    options: {
      headerShown: false,
      title: "",
      headerBackTitleVisible: false,
      headerTransparent: true, // header overlays the screen
      headerTintColor: "#000", // back button color
      headerShadowVisible: false,
    },
    statusBarStyle: "dark" as const,
  },
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
        backgroundColor: Colors.surface_light_pitch, // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.logsSummary,
    options: ({ navigation }: { navigation: any }) => ({
      headerShown: true,
      headerBackTitle: "Back",
      headerBackTitleVisible: true,
      headerShadowVisible: false,
      statusBarStyle: "dark" as const,
      statusBarBackgroundColor: Colors.surface_light_pitch,
      headerStyle: {
        backgroundColor: Colors.surface_light_pitch,
      },
      headerTintColor: "#000",
      headerRight: () => (
        <TouchableOpacity
           onPress={() => navigation.navigate(Routes.DeleteLog)}
          style={{ marginRight: 5 }}
        >
          <Ionicons name="trash-outline" size={24} color={Colors.black} />
        </TouchableOpacity>
      ),
    }),
  },
  {
    name: Routes.DeleteLog,
    options: {
      headerShown: true,
      title: "Delete Life log", // Title in header
      headerBackTitle: "Back", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: Colors.surface_light_pitch, // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      statusBarStyle: "dark" as const,
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
        backgroundColor: Colors.warm, // 👈 header er background color
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
  {
    name: Routes.documentSuccess,
    options: {
      headerShown: false,
      title: "Document Details", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: false, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "transparent", // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.documentUpload,
    options: {
      headerShown: true,
      title: "Document Upload", // Title in header
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
    name: Routes.schoolDocuments,
    options: {
      headerShown: true,
      title: "School Documents", // Title in header
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
    name: Routes.AddSchoolDocument,
    options: {
      headerShown: true,
      title: "Add Documents", // Title in header
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
    name: Routes.medicalDocuments,
    options: {
      headerShown: true,
      title: "Medical Documents", // Title in header
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
    name: Routes.AddMedicalDocument,
    options: {
      headerShown: true,
      title: "Add Documents", // Title in header
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
    name: Routes.therapyDocumnets,
    options: {
      headerShown: true,
      title: "Therapy Documents", // Title in header
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
    name: Routes.AddTherapyDocument,
    options: {
      headerShown: true,
      title: "Add Documents", // Title in header
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
    name: Routes.allergyDocuments,
    options: {
      headerShown: true,
      title: "Allergies", // Title in header
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
    name: Routes.AddAllergyDocument,
    options: {
      headerShown: true,
      title: "Add Documents", // Title in header
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
    name: Routes.immunizationDocuments,
    options: {
      headerShown: true,
      title: "Immunization", // Title in header
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
    name: Routes.AddImmunizingDocument,
    options: {
      headerShown: true,
      title: "Add Documents", // Title in header
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
    name: Routes.shareSuccess,
    options: {
      headerShown: false,
      title: "School Documents", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: false, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "transparent", // 👈 header er background color
      },
      headerTintColor: "#000", // 👈 text & back button color
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.documentCategory,
    options: {
      headerShown: true,
      title: "Document Details",
      headerBackTitle: "",
      headerBackTitleVisible: false,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTintColor: "#000",
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.talkToDoctor,
    options: {
      headerShown: true,
      title: "Talk to Your Document", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: Colors.warm, // 👈 header er background color
      },
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.medicine,
    options: {
      headerShown: false,
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.medicineDetails,
    options: {
      headerShown: true,
      title: "Details",
      headerBackTitle: "Back",
      headerBackTitleVisible: true,
      headerShadowVisible: false,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
      },
    },
  },
  {
    name: Routes.medicationNudge,
    options: {
      headerShown: false,
      title: "", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: false, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "transparent", // 👈 header er background color
      },
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.medicineSearch,
    options: {
      headerShown: true,
      title: "Search", // Title in header
      headerBackTitle: "Back", // Back button text
      headerBackTitleVisible: false, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "transparent", // 👈 header er background color
      },
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.surveyEntry,
    options: {
      headerShown: true,
      title: "ADHD", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: false, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: "transparent", // 👈 header er background color
      },
      // headerTransparent: true,
      headerBackground: () => (
        <Image
          source={require("../assets/images/topblur.png")}
          style={{ width: "100%", height: "100%" }}
        />
      ),
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.surveyQuestionScreen,
    options: {
      headerTitle: "ADHD",
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerStyle: { backgroundColor: "#fff" },
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close-circle-outline" size={26} color="black" />
        </TouchableOpacity>
      ),
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.SurveyCompleteScreen,
    options: {
      headerTitle: "ADHD",
      headerShadowVisible: false,
      headerStyle: { backgroundColor: Colors.bg },
      statusBarStyle: "dark" as const,
    },
  },
   {
    name: Routes.AddChildTeam,
    options: {
      headerShown: true,
      title: "Care team contacts", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: Colors.bg, // 👈 header er background color
      },
      statusBarStyle: "dark" as const,
    },
  },
  {
    name: Routes.addChildSuccess,
    options: {
      headerShown: false,
      title: "", // Title in header
      headerBackTitle: "", // Back button text
      headerBackTitleVisible: true, // Make sure it's visible
      headerShadowVisible: false, // Remove bottom shadow
      headerStyle: {
        backgroundColor: Colors.warm, // 👈 header er background color
      },
      statusBarStyle: "dark" as const,
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
