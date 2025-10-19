import { Colors, Fonts } from "@/constants/theme";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#616161",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: Colors.background,
          height: 70,
          paddingBottom: 20,
          paddingTop: 8,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: Fonts.Medium,
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="HomeTab"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/homeActive.png") // focused image
                  : require("../../assets/icons/home.png") // normal image
              }
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="LifeLogTab"
        options={{
          title: "Life Log",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/bookactive.png") // focused image
                  : require("../../assets/icons/booknew.png") // normal image
              }
              style={[styles.tabIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="PiperTab"
        options={{
          title: "Piper",
          tabBarActiveTintColor: "#F36F3B",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/pipertab.png") // focused image
                  : require("../../assets/icons/pipertabicon.png") // normal image
              }
              style={[styles.tabIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CalendarTab"
        options={{
          title: "Calendar",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/calenderActive.png") // focused image
                  : require("../../assets/icons/calendartab.png") // normal image
              }
              style={[styles.tabIcon]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        options={{
          title: "Profile",
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.bg,
          },
          animation: "shift",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "600",
            color: Colors.text,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.headerButton}>
              <Image
                source={require("../../assets/icons/logo.png")}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.replace("/(tabs)/HomeTab")}
              style={[styles.headerButton, styles.closeButton]}
            >
              <XMarkIcon size={20} color={Colors.text} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/profile.png")} // Add your profile icon here
              style={[styles.tabIcon, focused && styles.profileIconActive]}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  profileIconActive: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: Colors.blue_link, // or Colors[colorScheme ?? "light"].tint
  },
  headerButton: {
    padding: 8,
    marginHorizontal: 16,
  },
  headerIcon: {
    width: 26,
    height: 26,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 20,
    padding: 4,
  },
});
