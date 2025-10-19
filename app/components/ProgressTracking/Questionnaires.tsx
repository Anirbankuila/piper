import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CommonButton from "../CommonButton/CommonButton";
import CustomToggle from "../CustomSwitch/CustomSwitch";

const Questionnaires = () => {
  const filters = [
    ["Once a month", "ADHD", "Autism", "Epilepsy"],
    ["Often", "Depression", "Anxiety"],
  ];
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../../assets/images/questionnaires-bg.png")}
        style={{ height: 200, paddingHorizontal: 10 }}
        resizeMode="cover"
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>Tracking what matters!</Text>
          <Text style={styles.description}>
            See your child’s progress over time, what’s working and what’s not.
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.filteringSection}>
        <Text style={styles.questionHeaderText}>
          Take the questionnaires below to track your child’s progress.
        </Text>
        {/* <View style={styles.filterWrapper}>
          {filters.map((group, i) => (
            <View key={i} style={styles.filterRow}>
              {group.map((label) => (
                <TouchableOpacity key={label} style={styles.filterButton}>
                  <Text style={styles.filterText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View> */}
        <View style={styles.filterWrapper}>
          {filters.map((group, i) => (
            <View key={i} style={styles.filterRow}>
              {group.map((label) => (
                <TouchableOpacity key={label} style={styles.filterButton}>
                  <Text style={styles.filterText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View style={styles.durationTab}>
        <View style={styles.dueDate}>
          <Image
            source={require("../../../assets/icons/calendartab.png")}
            style={styles.calendarIcon}
          />
          <Text style={styles.dueDateLabelText}>Next Due Date</Text>
        </View>
        <Text style={styles.dueDateText}>23rd Sep,2026</Text>
      </View>
      <View style={styles.symptomSection}>
        <View style={styles.card}>
          <Text style={styles.timeLabel}>5 mins</Text>
          <View style={styles.cardRow}>
            <Text style={styles.cardTitle}>ADHD</Text>
            <CustomToggle />
          </View>
          <View style={styles.reminderRow}>
            <View style={styles.reminderBadge}>
              <Ionicons
                name="notifications-outline"
                size={16}
                color="#F9B233"
              />
              <Text style={styles.reminderText}>Next available in 15 days</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.timeLabel}>5 mins</Text>
          <View style={styles.cardRow}>
            <Text style={styles.cardTitle}>ADHD</Text>
            <CustomToggle />
          </View>
          <View style={styles.reminderRow}>
            <View style={styles.reminderBadge}>
              <Ionicons
                name="notifications-outline"
                size={16}
                color="#F9B233"
              />
              <Text style={styles.reminderText}>Next available in 15 days</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnSection}>
        <CommonButton
          title="Allergies"
          onPress={() => {}}
          backgroundColor={Colors.black}
          textStyle={{ color: Colors.bg }}
          style={{ marginHorizontal: 20, marginVertical: 5 }}
        />
        <CommonButton
          title="Immunization"
          onPress={() => {}}
          backgroundColor={Colors.black}
          textStyle={{ color: Colors.bg }}
          style={{ marginHorizontal: 20, marginVertical: 5 }}
        />
      </View>
      <CommonButton
        title="Lab Report"
        onPress={() => {}}
        backgroundColor={Colors.black}
        textStyle={{ color: Colors.bg }}
        style={{ marginHorizontal: 20, marginVertical: 5 }}
      />
      <CommonButton
        title="Track something else"
        onPress={() => {}}
        backgroundColor={Colors.black}
        textStyle={{ color: Colors.bg }}
        style={{ marginHorizontal: 20, marginVertical: 6 }}
      />
    </ScrollView>
  );
};

export default Questionnaires;

const styles = StyleSheet.create({
  bannerSection: {
    // flex: 1,
    backgroundColor: Colors.surface_light_purple,
    padding: 16,
    marginBottom: 24,
    alignItems: "center",
    // justifyContent: "flex-end",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 4,
    marginBottom: 15,
    alignItems: "center",
  },
  imageWrapper: {
    height: 30,
    width: 30,
    borderRadius: 15,
    overflow: "hidden",
  },
  headingImg: {
    height: 24,
    width: 24,
  },
  title: {
    color: Colors.purple_text,
    fontSize: 20,
    fontFamily: Fonts.Bold,
    lineHeight: 25,
  },
  contentWrapper: {
    justifyContent: "center",
    width: "80%",
    textAlign: "center",
    flex: 1,
    borderRadius: 8,
    padding: 6,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: Colors.text,
    lineHeight: 17,
  },
  filteringSection: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  questionHeaderText: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    lineHeight: 19,
  },
  calendarIcon: {
    height: 24,
    width: 24,
    marginRight: 5,
    tintColor: Colors.black,
  },
  durationTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.surface_light_purple,
    borderRadius: 8,
    alignItems: "center",
  },
  dueDate: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dueDateLabelText: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    lineHeight: 16,
    color: Colors.black,
  },
  dueDateText: {
    fontFamily: Fonts.Bold,
  },
  durationButton: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  activeDurationButton: {
    backgroundColor: Colors.black,
  },
  durationText: {
    color: Colors.grey,
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
  activeDurationText: {
    color: Colors.bg,
  },
  symptomSection: {
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  breakDownText: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    lineHeight: 16,
    marginVertical: 10,
  },
  symptomItem: {
    backgroundColor: Colors.surface_bg,
    borderRadius: 12,
    marginTop: 10,
    flex: 1,
  },

  // 🔹 Filters
  filterWrapper: {
    marginVertical: 20,
  },
  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: Colors.purple_text,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 4,
  },
  filterText: {
    color: Colors.bg,
    fontWeight: "600",
    fontSize: 13,
  },

  card: {
    backgroundColor: Colors.surface_bg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  timeLabel: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.black,
  },
  reminderRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  reminderText: {
    fontSize: 14,
    color: "#555",
  },
  reminderBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.bg, // white background
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8, // optional rounded edges
    gap: 6, // space between icon and text
  },
  btnSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "center",
  },
});
