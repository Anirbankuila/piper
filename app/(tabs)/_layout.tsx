import { Colors } from "@/constants/theme";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#8E8E93",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopWidth: 1,
          borderTopColor: Colors.background,
          height: 84,
          paddingBottom: 20,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
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
              source={require("../../assets/icons/home.png")} // Add your home icon here
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : "#8E8E93",
                },
              ]}
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
              source={require("../../assets/icons/lifelog.png")} // Add your life log icon here
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : "#8E8E93",
                },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="PiperTab"
        options={{
          title: "Piper",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/piper.png")} // Add your piper icon here
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : "#8E8E93",
                },
              ]}
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
              source={require("../../assets/icons/calendar.png")} // Add your calendar icon here
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : "#8E8E93",
                },
              ]}
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
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "600",
            color: Colors.text,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.headerButton}>
              <Image
                source={require("../../assets/icons/star-icon.png")}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={[styles.headerButton, styles.closeButton]}>
              <XMarkIcon size={20} color={Colors.text} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/profile.png")} // Add your profile icon here
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
    borderColor: "#007AFF", // or Colors[colorScheme ?? "light"].tint
  },
  headerButton: {
    padding: 8,
    marginHorizontal: 8,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 20,
    padding: 4,
  },
});
