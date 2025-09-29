import { Colors, Fonts } from "@/constants/theme";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground } from "expo-image";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { ChevronDownIcon, PlusIcon } from "react-native-heroicons/outline";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Routes, { navigateScreen } from "../common/Routes";
import Header from "../components/Header/Header";
import Divider from "../components/HomePageDivider/Divider";
import PiperModal from "../components/PiperModal/PiperModal";
import Searchbar from "../components/Searchbar/Searchbar";
import styles from "../tabStyles/HomeTabStyle";

export default function HomeTab() {
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
  const cardDetails = [
    {
      id: 1,
      title: "Documents",
      subTitle: "Last Update 23 Sep",
      routingLink: "",
      icon: "../../assets/icons/folder.png",
      btnIcon: "chevron-forward",
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={Colors["secondary-100"]} translucent={true} />
      <View
        style={[
          styles.headerWrapper,
          {
            paddingTop: insets.top - 10,
          },
        ]}
      >
        <Header backgroundColor={Colors["secondary-100"]} />

        {/* User Info */}
        <View>
          <TouchableOpacity style={styles.userInfo} onPress={() => setOpen(!open)}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.profilePhoto}
              contentFit="contain"
            />
            <View style={styles.userDetails}>
              <Text style={styles.userName}>Johnny</Text>
              <ChevronDownIcon
                size={20}
                color={Colors.text}
                style={styles.dropdownIcon}
              />
            </View>
          </TouchableOpacity>
          {open && (
            <TouchableWithoutFeedback onPress={() => setOpen(false)}>
              <View style={styles.overlay}>
                <TouchableWithoutFeedback>
                  <View style={styles.dropdown}>
                    <View style={styles.dropdownItem}>
                      <Image
                        source={require("../../assets/images/Sarah.png")}
                        style={styles.dropdownPhoto}
                      />
                      <Text style={styles.dropdownName}>Sarah</Text>
                    </View>
                    <View style={styles.dropdownItem}>
                      <Image
                        source={require("../../assets/images/Miley.png")}
                        style={styles.dropdownPhoto}
                      />
                      <Text style={styles.dropdownName}>Miley</Text>
                    </View>
                    <View style={styles.dropdownItem}>
                      <Image
                        source={require("../../assets/images/Dennis.png")}
                        style={styles.dropdownPhoto}
                      />
                      <Text style={styles.dropdownName}>Dennis</Text>
                    </View>
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
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Searchbar onMicPress={() => setVisible(true)} />
          <PiperModal visible={visible} onClose={() => setVisible(false)} />
        </View>
        <ImageBackground
          source={require("../../assets/images/home-piper-bg.png")}
          style={styles.piperIntroContainer}
          contentFit="cover"
        >
          <Image
            source={require("../../assets/images/Alex-personal 1.png")}
            style={styles.alexPersonalImg}
          />

          <View style={styles.piperDetailsCard}>
            <Text
              style={styles.mainText}
            >
              Hi, I’m Piper!
            </Text>
            <Text
              style={styles.subText}
            >
              Your organized bestie{"\n"}and personal assistant.
            </Text>

            <TouchableOpacity
              style={
                styles.cardBtn
              }
            >
              <Text style={styles.btnText}>
                Let’s take a tour
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <Divider text={"Everything You Need In One Place"} />
      <View style={styles.sectionContainer}>
        {/* Progress Tracking Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Progress Tracking</Text>
            <View style={styles.progressStatus}>
              <Ionicons
                name="information-circle-outline"
                size={17}
                color="#999"
              />
              <View style={styles.statusTextChip}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Moderate</Text>
              </View>
              <TouchableOpacity style={styles.navigateIconSection}>
                <Ionicons name="chevron-forward" size={17} color="#000" />
              </TouchableOpacity>
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
                <Text
                  style={[
                    styles.dayLabel,
                    { color: item.isActive ? Colors.black : "#8E8E93" },
                  ]}
                >
                  {item.day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.cardDetailsContainer}>
          <View style={styles.cardContainer}>
            {/* Top Row */}
            <View style={styles.cardContent}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/icons/folder.png")}
                  style={styles.cardIcon}
                />
                <Text style={styles.cardTitle}>Documents</Text>
              </View>
              <Ionicons
                name="information-circle-outline"
                size={12}
                color="#999"
              />
            </View>

            {/* Subtitle */}
            <Text style={styles.cardSubTitle}>Last Update: 23 Sep</Text>

            {/* Bottom Row */}
            <View style={styles.cardCountContent}>
              {/* Count */}
              <View style={styles.cardCountSection}>
                <Text
                  style={styles.cardBtnHeading}
                >
                  21
                  <Text
                    style={styles.cardSubText}
                  >
                    Docs
                  </Text>
                </Text>
              </View>

              {/* Arrow Button */}
              <TouchableOpacity
                onPress={() => navigateScreen(Routes.uploadDoc)}
                style={styles.navigateIconSection}
              >
                <Ionicons name="chevron-forward" size={12} color="#000" />
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.cardContainer}>
            {/* Top Row */}
            <View style={styles.cardContent}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/icons/book.png")}
                  style={styles.cardIcon}
                />
                <Text style={styles.cardTitle}>Life Logs</Text>
              </View>
              <Ionicons
                name="information-circle-outline"
                size={12}
                color="#999"
              />
            </View>

            {/* Subtitle */}
            <Text style={styles.cardSubTitle}>Last Update: 19 Sep</Text>

            {/* Bottom Row */}
            <View style={styles.cardCountContent}>
              {/* Count */}
              <View style={styles.cardCountSection}>
                <Text
                  style={styles.cardBtnHeading}
                >
                  10
                  <Text
                    style={styles.cardSubText}
                  >
                    Logs
                  </Text>
                </Text>
              </View>

              {/* Arrow Button */}
              <TouchableOpacity style={styles.navigateIconSection}>
                <Ionicons
                  name="add"
                  size={12}
                  color="#000"
                  style={{ fontWeight: "600" }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardContainer}>
            {/* Top Row */}
            <View style={styles.cardContent}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/icons/buy-crypto.png")}
                  style={styles.cardIcon}
                />
                <Text style={styles.cardTitle}>Medication</Text>
              </View>
              <Ionicons
                name="information-circle-outline"
                size={12}
                color="#999"
              />
            </View>

            {/* Bottom Row */}
            <View style={styles.cardCountContent}>
              {/* Count */}
              <View style={styles.cardCountSection}>
                <Text
                  style={styles.cardBtnHeading}
                >
                  3/
                  <Text
                    style={styles.cardSubText}
                  >
                    12
                  </Text>
                </Text>
              </View>

              {/* Arrow Button */}
              <TouchableOpacity style={styles.navigateIconSection}>
                <Ionicons name="chevron-forward" size={12} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardContainer}>
            {/* Top Row */}
            <View style={styles.cardContent}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/icons/messages-2.png")}
                  style={[styles.cardIcon, { width: 32, height: 32 }]}
                />
              </View>
              <Ionicons
                name="information-circle-outline"
                size={12}
                color="#999"
              />
            </View>

            {/* Bottom Row */}
            <View style={styles.cardCountContent}>
              {/* Count */}
              <View style={{ maxWidth: "650%", flexShrink: 1 }}>
                <Text
                  style={{
                    color: "#003269",
                    fontFamily: Fonts.Bold,
                    fontSize: 14,
                  }}
                >
                  Talk to {'\n'}Document
                </Text>
              </View>

              {/* Arrow Button */}
              <TouchableOpacity style={styles.navigateIconSection}>
                <Ionicons name="chevron-forward" size={12} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
            >
              <PlusIcon size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <Text style={styles.memberText}>Add</Text>

        </View>
      </View>
      <Divider text={"Shareable Summaries"} />
      <View style={[styles.summarySection]}>
        <View style={styles.summaryDetails}>
          <Text style={styles.summaryText}>For Medical {'\n'}Team</Text>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/images/medical-team.png")}
              style={styles.summaryImg}
            />
          </View>
        </View>
        <View style={styles.summaryDetails}>
          <Text style={styles.summaryText}>For Education {'\n'}Team</Text>
          <Image
            source={require("../../assets/images/education-team.png")}
            style={styles.summaryImg}
          />
        </View>
      </View>
    </ScrollView>
  );
}
