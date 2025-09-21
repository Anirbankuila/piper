import { Colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeTab() {
  const progressData = [
    { day: "M", height: 40, color: "#FF9500" },
    { day: "T", height: 60, color: "#FF9500" },
    { day: "W", height: 30, color: "#34C759" },
    { day: "T", height: 80, color: "#FF3B30" },
    { day: "F", height: 50, color: "#FF9500" },
    { day: "S", height: 0, color: "#E5E5EA" },
    { day: "S", height: 0, color: "#E5E5EA" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#CBF2F6" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.starContainer}>
            <Text style={styles.starIcon}>⭐</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.hourglassIcon}>⏳</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.bellIcon}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <View style={styles.profilePhoto}>
          <Text style={styles.profileEmoji}>👤</Text>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>Johnny</Text>
          <Text style={styles.dropdownIcon}>▼</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Ask me anything!"
            placeholderTextColor="#8E8E93"
          />
          <TouchableOpacity style={styles.voiceButton}>
            <Text style={styles.micIcon}>🎤</Text>
          </TouchableOpacity>
        </View>

        {/* Piper Introduction Card */}
        <LinearGradient
          colors={["#E8F4FD", "#F0E6FF"]}
          style={styles.piperCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.piperContent}>
            <View style={styles.piperTextContainer}>
              <Text style={styles.piperGreeting}>Hi, I'm Piper!</Text>
              <Text style={styles.piperDescription}>
                Your organized bestie{"\n"}and personal assistant.
              </Text>
              <TouchableOpacity style={styles.tourButton}>
                <Text style={styles.tourButtonText}>Let's take a tour</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.piperCharacterContainer}>
              <Text style={styles.piperCharacterEmoji}>👩‍💼</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Everything You Need Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Everything You Need In One Place
          </Text>

          {/* Progress Tracking Card */}
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Progress Tracking</Text>
              <View style={styles.progressStatus}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Moderate</Text>
                <Text style={styles.chevronRight}>›</Text>
              </View>
            </View>

            {/* Progress Chart */}
            <View style={styles.chartContainer}>
              {progressData.map((item, index) => (
                <View key={index} style={styles.chartItem}>
                  <View style={styles.barContainer}>
                    <View
                      style={[
                        styles.progressBar,
                        {
                          height: item.height,
                          backgroundColor: item.color,
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.dayLabel}>{item.day}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  header: {
    backgroundColor: "#CBF2F6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  headerLeft: {
    flex: 1,
  },
  starContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FF6B35",
    alignItems: "center",
    justifyContent: "center",
  },
  starIcon: {
    fontSize: 16,
    color: "white",
  },
  hourglassIcon: {
    fontSize: 18,
  },
  bellIcon: {
    fontSize: 18,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerButton: {
    marginLeft: 15,
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: "#CBF2F6",
  },
  profilePhoto: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  profileEmoji: {
    fontSize: 18,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginRight: 5,
  },
  dropdownIcon: {
    fontSize: 10,
    color: "#666",
    marginLeft: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  voiceButton: {
    padding: 5,
  },
  micIcon: {
    fontSize: 16,
  },
  piperCard: {
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
  },
  piperContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  piperTextContainer: {
    flex: 1,
  },
  piperGreeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 5,
  },
  piperDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 18,
    marginBottom: 15,
  },
  tourButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "flex-start",
  },
  tourButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  piperCharacterContainer: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  piperCharacterEmoji: {
    fontSize: 60,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  progressCard: {
    backgroundColor: "#FFF3E9",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  progressStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF9500",
    marginRight: 5,
  },
  statusText: {
    fontSize: 14,
    color: "#666",
    marginRight: 5,
  },
  chevronRight: {
    fontSize: 16,
    color: "#C7C7CC",
    fontWeight: "bold",
  },
  chartContainer: {
    flexDirection: "row",
    // alignItems: "end",

    justifyContent: "space-between",
    height: 100,
  },
  chartItem: {
    alignItems: "center",
    flex: 1,
  },
  barContainer: {
    height: 80,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  progressBar: {
    width: 8,
    borderRadius: 4,
    minHeight: 8,
  },
  dayLabel: {
    fontSize: 12,
    color: "#8E8E93",
    fontWeight: "500",
  },
});
