import { Colors } from "@/constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { ChevronDownIcon, PlusIcon } from "react-native-heroicons/outline";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Routes, { navigateScreen } from "../common/Routes";
import AthenaLoginContent from "../components/AthenaLogin/AthenaLoginContent";
import CommonButton from "../components/CommonButton/CommonButton";
import CustomRBSheet, { CustomRBSheetRef } from "../components/CustomBottomSheet/CustomRBSheet";
import Header from "../components/Header/Header";
import Divider from "../components/HomePageDivider/Divider";
import PiperModal from "../components/PiperModal/PiperModal";
import Searchbar from "../components/Searchbar/Searchbar";
import styles from "../tabStyles/HomeTabStyle";

export default function HomeTab() {
  const rbSheetRef = useRef<CustomRBSheetRef>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const insets = useSafeAreaInsets();
  const progressData = [
    { day: "M", height: 40, color: "#FF9500", isActive: false },
    { day: "T", height: 60, color: "#FF9500", isActive: false },
    { day: "W", height: 30, color: "#34C759", isActive: false },
    { day: "T", height: 80, color: "#FF3B30", isActive: false },
    { day: "F", height: 50, color: "#FF9500", isActive: true },
    { day: "S", height: 80, color: "#E5E5EA", isActive: false },
    { day: "S", height: 80, color: "#E5E5EA", isActive: false },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#FFF9F2" translucent={true} />
      <View
        style={[
          styles.headerWrapper,
          {
            paddingTop: insets.top - 10,
          },
        ]}
      >
        <Header backgroundColor="#FFDFBD" />
        {/* User Info */}
        <LinearGradient
          colors={["#FFDFBD", "#FF8000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientContainer}
        >
          {/* USER INFO */}
          <View>
            <TouchableOpacity style={styles.userInfo} onPress={() => setOpen(!open)}>
              <Image
                source={require("../../assets/images/profile.png")}
                style={styles.profilePhoto}
                contentFit="contain"
              />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>Johnny</Text>
                <ChevronDownIcon size={20} color={Colors.text} style={styles.dropdownIcon} />
              </View>
            </TouchableOpacity>


          </View>

          {/* SEARCH */}
          {/* PIPER INTRO SECTION */}
          <View style={styles.piperIntroContainer}>
            <Image
              source={require("../../assets/images/piperHomeImg.png")}
              style={styles.alexPersonalImg}
            />
            <BlurView intensity={60} tint="light" style={styles.piperDetailsCard}>
              <Text style={styles.mainText}>Hi, I’m Piper!</Text>
              <Text style={styles.subText}>
                Your organized bestie{"\n"}and personal assistant.
              </Text>

              <TouchableOpacity style={styles.cardBtn}>
                <Text style={styles.btnText}>Let’s take a tour</Text>
              </TouchableOpacity>
            </BlurView>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <Searchbar containerStyle={styles.homeSearch} onMicPress={() => setVisible(true)} />
            <PiperModal visible={visible} onClose={() => setVisible(false)} />
          </View>
        </LinearGradient>
      </View>
      <Divider text={"Everything You Need In One Place"} />
      <View style={styles.sectionContainer}>
        {/* Progress Tracking Card */}
        <View style={styles.cardDetailsContainer}>
          <LinearGradient
            colors={['#7B3BD4', '#A35AED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.39, 0.88]} // 👈 stops for 39% and 88%
            style={styles.cardContainer}
          >
            <TouchableOpacity onPress={() => navigateScreen(Routes.uploadDoc)}>
              {/* Top Row */}
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Upload Documents</Text>
                <Text style={styles.cardSubTitle}>Last Update: 23 Sep</Text>
              </View>

              <View style={styles.cardIcon}>
                <Image
                  source={require("../../assets/images/uploadDoc.png")}
                  style={{ width: 66, height: 46 }}
                />
              </View>
              <View style={styles.cardCountSection}>
                <Text style={styles.cardBtnHeading}>
                  21<Text style={styles.cardSubText}> uploaded docs</Text>
                </Text>
              </View>

            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#7B3BD4', '#A35AED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.39, 0.88]} // 👈 stops for 39% and 88%
            style={[styles.evenContainer]}
          >
            <TouchableOpacity onPress={() => navigateScreen(Routes.progressTracking)}>
              {/* Top Row */}
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Progress Tracking</Text>
                <Text style={styles.cardSubTitle}>Last Update: 19 Sep</Text>
              </View>
              <View style={styles.cardIcon}>
                <Image
                  source={require("../../assets/images/growth.png")}
                  style={{ width: 46, height: 46}}
                />
              </View>
              <View style={[styles.evencardCountSection]}>
                <Text style={styles.cardBtnHeading}>
                  10
                  <Text style={styles.cardSubText}> moments logged</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#7B3BD4', '#A35AED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.39, 0.88]} // 👈 stops for 39% and 88%
            style={[styles.evenContainer]}
          >
            <TouchableOpacity onPress={() => navigateScreen(Routes.medicine)}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Medication</Text>
                <Text style={styles.cardSubTitle}>Current and Past Meds</Text>
              </View>
              <View style={styles.cardIcon}>
                <Image
                  source={require("../../assets/images/medicine.png")}
                  style={{ width: 36, height: 46 }}
                />
              </View>
              <View style={[styles.evencardCountSection]}>
                <Text style={styles.cardBtnHeading}>
                  3
                  <Text style={styles.cardSubText}> currently taking </Text>
                </Text>
              </View>

              {/* Arrow Button */}

            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#7B3BD4', '#A35AED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.39, 0.88]} // 👈 stops for 39% and 88%
            style={styles.cardContainer}
          >
            <TouchableOpacity onPress={() => navigateScreen(Routes.allLogs)}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Life Log</Text>
                <Text style={styles.cardSubTitle}>Real moments as they happen</Text>
              </View>

              <View style={styles.cardIcon}>
                <Image
                  source={require("../../assets/images/log.png")}
                  style={{ width: 41, height: 52 }}
                />
              </View>
              <View style={styles.cardCountSection}>
                <Text style={styles.cardBtnHeading}>
                  12<Text style={styles.cardSubText}> moments logged</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <CommonButton title="Sync your athenahealth records now!" style={styles.syncBtn} textStyle={styles.syncText} onPress={() => rbSheetRef.current?.open()} />
        <CustomRBSheet ref={rbSheetRef} title="athenahealth">
          <AthenaLoginContent rbSheetRef={rbSheetRef as React.RefObject<CustomRBSheetRef>} />
        </CustomRBSheet>
      </View>
      <Divider text={"Johnny's Care Team"} />
      <View style={[styles.sectionContainer, styles.careTeamContainer]}>
        <View style={styles.eachTeamMember}>
          <View style={styles.careTeamMember}>
            <Image
              source={require("../../assets/images/doctor-care.png")}
              style={styles.careTeamMemberImg}
            />
          </View>
          <Text style={styles.memberText}>Doctor</Text>
        </View>
        <View style={styles.eachTeamMember}>
          <View style={styles.careTeamMember}>
            <Image
              source={require("../../assets/images/therapist.png")}
              style={styles.careTeamMemberImg}
            />
          </View>
          <Text style={styles.memberText}>Therapist</Text>
        </View>
        <View style={styles.eachTeamMember}>
          <View style={styles.careTeamMember}>
            <Image
              source={require("../../assets/images/nurse.png")}
              style={styles.careTeamMemberImg}
            />
          </View>
          <Text style={styles.memberText}>Nurse</Text>
        </View>
        <View style={styles.eachTeamMember}>
          <View style={styles.careTeamMember}>
            <Image
              source={require("../../assets/images/educator.png")}
              style={styles.careTeamMemberImg}
            />
          </View>
          <Text style={styles.memberText}>Educator</Text>
        </View>
        <View style={styles.eachTeamMember}>
          <View style={styles.careTeamMember}>
            <Image
              source={require("../../assets/images/friend.png")}
              style={styles.careTeamMemberImg}
            />
          </View>
          <Text style={styles.memberText}>Friend</Text>
        </View>
        <View style={styles.eachTeamMember}>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F2F2F7",
                borderRadius: 26,
                width: 52,
                height: 52,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 5,
              }}
              onPress={() => navigateScreen(Routes.AddChildTeam)}
            >
              <PlusIcon size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <Text style={styles.memberText}>Add</Text>
        </View>
      </View>
      <Divider text={"Shareable Summaries"} />
      <View style={[styles.summarySection]}>
        <TouchableOpacity
          style={styles.summaryDetails}
          onPress={() => navigateScreen(Routes.medicalTeam)}
        >
          <Text style={styles.summaryText}>For Medical {"\n"}Team</Text>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/icons/medicalicon.png")}
              style={[styles.summaryImg, { width: 36, height: 36 }]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.summaryDetails}
          onPress={() => navigateScreen(Routes.medicalTeamReport)}
        >
          <Text style={styles.summaryText}>For Education {"\n"}Team</Text>
          <Image
            source={require("../../assets/icons/bag.png")}
            style={[styles.summaryImg, { width: 39, height: 40 }]}
          />
        </TouchableOpacity>
      </View>
      {open && (
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.dropdown}>
                {["Sarah", "Miley", "Dennis"].map((name, index) => (
                  <View key={index} style={styles.dropdownItem}>
                    <Image
                      source={
                        name === "Sarah"
                          ? require("../../assets/images/Sarah.png")
                          : name === "Miley"
                            ? require("../../assets/images/Miley.png")
                            : require("../../assets/images/Dennis.png")
                      }
                      style={styles.dropdownPhoto}
                    />
                    <Text style={styles.dropdownName}>{name}</Text>
                  </View>
                ))}

                <TouchableOpacity
                  style={styles.addProfileButton}
                  onPress={() => console.log("Add Profile pressed")}
                >
                  <Text style={styles.dropdownName}>Add Profile</Text>
                  <AntDesign name="plus-circle" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </ScrollView>
  );
}
