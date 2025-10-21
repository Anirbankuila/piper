import { ReminderCardItem } from "@/app/common/Interface/Medication";
import Routes, { navigateScreen } from "@/app/common/Routes";
import { Colors, Fonts } from "@/constants/theme";
import { Image, ImageBackground } from "expo-image";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CommonButton from "../CommonButton/CommonButton";
import CustomToggle from "../CustomSwitch/CustomSwitch";
const reminders: ReminderCardItem[] = [
  {
    id: "1",
    title: "ADHD",
    categoryName: "adhd",
    duration: "5 mins",
    isToggled: true,
    nextAvailable: "Next available in 15 days",
    icon: require("../../../assets/icons/golden-bell.png"),
    isSurveyAvailable: true,
  },
  {
    id: "2",
    title: "Autism",
    categoryName: "autism",
    duration: "8 mins",
    isToggled: true,
    nextAvailable: "Next available in 16 days",
    icon: require("../../../assets/icons/golden-bell.png"),
  },
  {
    id: "3",
    title: "Depression",
    categoryName: "depression",
    duration: "5 mins",
    isToggled: false,
    nextAvailable: "Can be taken daily or weekly",
    icon: require("../../../assets/icons/star.png"),
  },
  {
    id: "4",
    title: "Anxiety",
    duration: "3 mins",
    categoryName: "anxiety",
    isToggled: true,
    nextAvailable: "Can be taken daily or weekly",
    icon: require("../../../assets/icons/star.png"),
  },
  {
    id: "5",
    title: "Epilepsy",
    categoryName: "epilepsy",
    duration: "10 mins",
    isToggled: true,
    nextAvailable: "Next available in 25 days",
    icon: require("../../../assets/icons/golden-bell.png"),
    isSurveyAvailable: true,
  },
  // add more dynamically
];
const Questionnaires = () => {
  const filters = [
    ["Once a month", "ADHD", "Autism", "Epilepsy"],
    ["Often", "Depression", "Anxiety"],
  ];
  const handleToggle = (item: ReminderCardItem) => {
    if (item.isSurveyAvailable) {
      navigateScreen({
        pathname: `/${Routes.surveyEntry}`,
        params: {
          surveyCategory: item.categoryName,
        },
      });
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../../assets/images/questionnaire-banner.png")}
        style={{ height: 180, paddingHorizontal: 8 }}
        contentFit="cover"
      >
        <View style={[styles.contentWrapper]}>
          <Text style={styles.title}>Tracking what matters!</Text>
          <Text style={styles.description}>
            See your child’s progress over time, what’s working and what’s not.
          </Text>
        </View>
        {/* <View style={{ flex: 1 }}>
          <Image
            source={require("../../../assets/images/talktodocimg.png")}
            style={{ height: 180, width: 150 }}
            contentFit="cover"
          />
        </View> */}
      </ImageBackground>
      <View style={styles.filteringSection}>
        <Text style={styles.questionHeaderText}>
          Take the questionnaires below to track your child’s progress.
        </Text>
        <View style={styles.filterWrapper}>
          {filters.map((group, index) => (
            <View key={index} style={styles.filterRow}>
              {/* Group button with triangle */}
              <View style={styles.groupButtonWrapper}>
                <TouchableOpacity style={styles.groupButton}>
                  <Text style={styles.filterText}>{group[0]}</Text>
                </TouchableOpacity>
                {/* White triangle connected on the right */}
                <View style={styles.triangle} />
              </View>

              {/* Other group items */}
              {group.slice(1).map((label) => (
                <TouchableOpacity key={label} style={styles.filterButton}>
                  <Text
                    style={[styles.filterText, { color: Colors.main_purple }]}
                  >
                    {label}
                  </Text>
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
        {reminders.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.timeLabel}>{item.duration}</Text>

            <View style={styles.cardRow}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>

              <CustomToggle
                value={item.isToggled}
                isForToggle={false}
                onPress={() => handleToggle(item)}
              />
            </View>

            <View style={styles.reminderRow}>
              <View style={styles.reminderBadge}>
                <Image
                  source={item.icon}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <Text style={styles.reminderText}>{item.nextAvailable}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.viewDocuments}>
        <View style={styles.viewDocumentsWrap}>
          <TouchableOpacity
            style={styles.eachDoc}
            onPress={() => navigateScreen(Routes.allergyHistory)}
          >
            <View style={styles.eachDocIcon}>
              <Image
                source={require("../../../assets/icons/profile-remove.png")}
                style={styles.icon}
                contentFit="cover"
              />
            </View>
            <Text style={styles.catTitle}>Allergies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.eachDoc}
            onPress={() => navigateScreen(Routes.immunizationHistory)}
          >
            <View style={styles.eachDocIcon}>
              <Image
                source={require("../../../assets/icons/shield.png")}
                style={styles.icon}
                contentFit="cover"
              />
            </View>
            <Text style={styles.catTitle}>Immunization</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.eachDoc}
            onPress={() => navigateScreen(Routes.labResult)}
          >
            <View style={styles.eachDocIcon}>
              <Image
                source={require("../../../assets/icons/iconsax-hospital.png")}
                style={styles.icon}
                contentFit="cover"
              />
            </View>
            <Text style={styles.catTitle}>Lab Result</Text>
          </TouchableOpacity>
        </View>
      </View>

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
    backgroundColor: Colors.surface_light_purple,
    padding: 16,
    marginBottom: 24,
    alignItems: "center",
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
    marginBottom: 4,
  },
  contentWrapper: {
    justifyContent: "center",
    width: "72%",
    textAlign: "center",
    flex: 1,
    borderRadius: 8,
    top: -5,
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
    backgroundColor: Colors.surface_light_pitch,
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
    gap: 4,
  },
  filterButton: {
    backgroundColor: Colors.surface_light_pitch,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 4,
  },
  filterText: {
    color: Colors.bg,
    fontFamily: Fonts.SemiBold,
    fontSize: 10,
  },

  card: {
    backgroundColor: Colors.surface_bg,
    borderRadius: 8,
    padding: 10,
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
    fontSize: 16,
    lineHeight: 16,
    fontFamily: Fonts.Medium,
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
  viewDocuments: {
    position: "relative",
  },
  viewDocumentsWrap: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 0,
  },
  eachDoc: {
    width: "30%",
    alignItems: "center",
    marginBottom: 15,
  },
  eachDocIcon: {
    width: 52,
    height: 52,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.surface_bg,
    borderRadius: 26,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: Colors.primary,
  },
  catTitle: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: Colors.text,
    marginTop: 5,
  },

  groupButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupButton: {
    backgroundColor: Colors.purple_text,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  groupText: {
    color: "#fff",
    fontWeight: "600",
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderLeftWidth: 6,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: Colors.purple_text,
  },
});
