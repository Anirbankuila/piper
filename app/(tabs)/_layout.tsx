import { Colors } from "@/constants/theme";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
});
