import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground } from "expo-image";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronDownIcon, PlusIcon } from "react-native-heroicons/outline";
import Header from "../components/Header/Header";
import Divider from "../components/HomePageDivider/Divider";
import PiperModal from "../components/PiperModal/PiperModal";
import Searchbar from "../components/Searchbar/Searchbar";
import styles from "../tabStyles/HomeTabStyle";
const { width } = Dimensions.get("window");

export default function HomeTab() {
  const [visible, setVisible] = useState(false);
  const progressData = [
    { day: "M", height: 40, color: "#FF9500", isActive: false },
    { day: "T", height: 60, color: "#FF9500", isActive: false },
    { day: "W", height: 30, color: "#34C759", isActive: false },
    { day: "T", height: 80, color: "#FF3B30", isActive: false },
    { day: "F", height: 50, color: "#FF9500", isActive: true },
    { day: "S", height: 0, color: "#E5E5EA", isActive: false },
    { day: "S", height: 0, color: "#E5E5EA", isActive: false },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors["secondary-100"]}
      />

      <View style={styles.headerWrapper}>
        <Header backgroundColor={Colors["secondary-100"]} />

        {/* User Info */}
        <View style={styles.userInfo}>
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
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#004693",
                fontFamily: Fonts.Bold,
                lineHeight: 25,
              }}
            >
              Hi, I’m Piper!
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.text,
                marginVertical: 8,
                fontFamily: Fonts.Regular,
              }}
            >
              Your organized bestie{"\n"}and personal assistant.
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#0064D2",
                paddingVertical: 10,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
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
          {/* <View style={styles.cardView}>
            <View style={styles.cardViewTop}>

            </View>
            <View style={styles.cardViewBottom}></View>
            <View></View>
          </View> */}
          <View
            style={{
              backgroundColor: "#F8F8FC",
              borderRadius: 16,
              padding: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
              marginVertical: 10,
            }}
          >
            {/* Top Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="folder" size={22} color="#0064D2" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginLeft: 8,
                    color: "#0064D2",
                  }}
                >
                  Documents
                </Text>
              </View>
              <Ionicons
                name="information-circle-outline"
                size={18}
                color="#999"
              />
            </View>

            {/* Subtitle */}
            <Text
              style={{
                fontSize: 13,
                color: "#555",
                marginTop: 4,
              }}
            >
              Last Update: 23 Sep
            </Text>

            {/* Bottom Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              {/* Count */}
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#000" }}
                >
                  21{" "}
                  <Text
                    style={{ fontSize: 14, fontWeight: "500", color: "#666" }}
                  >
                    Docs
                  </Text>
                </Text>
              </View>

              {/* Arrow Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 25,
                  width: 36,
                  height: 36,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="chevron-forward" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F8F8FC",
              borderRadius: 16,
              padding: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
              marginVertical: 10,
            }}
          >
            {/* Top Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="folder" size={22} color="#0064D2" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginLeft: 8,
                    color: "#0064D2",
                  }}
                >
                  Documents
                </Text>
              </View>
              <Ionicons
                name="information-circle-outline"
                size={18}
                color="#999"
              />
            </View>

            {/* Subtitle */}
            <Text
              style={{
                fontSize: 13,
                color: "#555",
                marginTop: 4,
              }}
            >
              Last Update: 23 Sep
            </Text>

            {/* Bottom Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              {/* Count */}
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#000" }}
                >
                  21{" "}
                  <Text
                    style={{ fontSize: 14, fontWeight: "500", color: "#666" }}
                  >
                    Docs
                  </Text>
                </Text>
              </View>

              {/* Arrow Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 25,
                  width: 36,
                  height: 36,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="chevron-forward" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F8F8FC",
              borderRadius: 16,
              padding: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
              marginVertical: 10,
            }}
          >
            {/* Top Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="folder" size={22} color="#0064D2" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginLeft: 8,
                    color: "#0064D2",
                  }}
                >
                  Documents
                </Text>
              </View>
              <Ionicons
                name="information-circle-outline"
                size={18}
                color="#999"
              />
            </View>

            {/* Subtitle */}
            <Text
              style={{
                fontSize: 13,
                color: "#555",
                marginTop: 4,
              }}
            >
              Last Update: 23 Sep
            </Text>

            {/* Bottom Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              {/* Count */}
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#000" }}
                >
                  21{" "}
                  <Text
                    style={{ fontSize: 14, fontWeight: "500", color: "#666" }}
                  >
                    Docs
                  </Text>
                </Text>
              </View>

              {/* Arrow Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 25,
                  width: 36,
                  height: 36,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="chevron-forward" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F8F8FC",
              borderRadius: 16,
              padding: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
              marginVertical: 10,
            }}
          >
            {/* Top Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="folder" size={22} color="#0064D2" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginLeft: 8,
                    color: "#0064D2",
                  }}
                >
                  Documents
                </Text>
              </View>
              <Ionicons
                name="information-circle-outline"
                size={18}
                color="#999"
              />
            </View>

            {/* Subtitle */}
            <Text
              style={{
                fontSize: 13,
                color: "#555",
                marginTop: 4,
              }}
            >
              Last Update: 23 Sep
            </Text>

            {/* Bottom Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              {/* Count */}
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#000" }}
                >
                  21{" "}
                  <Text
                    style={{ fontSize: 14, fontWeight: "500", color: "#666" }}
                  >
                    Docs
                  </Text>
                </Text>
              </View>

              {/* Arrow Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 25,
                  width: 36,
                  height: 36,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="chevron-forward" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Divider text={"Johnny's Care Team"} />
      <View style={[styles.sectionContainer, styles.careTeamContainer]}>
        <View style={styles.careTeamMember}>
          <Image
            source={require("../../assets/images/doctor-care.png")}
            style={styles.careTeamMemberImg}
          />
          <Text style={styles.memberText}>Doctor</Text>
        </View>
        <View style={styles.careTeamMember}>
          <Image
            source={require("../../assets/images/therapist.png")}
            style={styles.careTeamMemberImg}
          />
          <Text style={styles.memberText}>Therapist</Text>
        </View>
        <View style={styles.careTeamMember}>
          <Image
            source={require("../../assets/images/nurse.png")}
            style={styles.careTeamMemberImg}
          />
          <Text style={styles.memberText}>Nurse</Text>
        </View>
        <View style={styles.careTeamMember}>
          <Image
            source={require("../../assets/images/educator.png")}
            style={styles.careTeamMemberImg}
          />
          <Text style={styles.memberText}>Educator</Text>
        </View>
        <View style={styles.careTeamMember}>
          <Image
            source={require("../../assets/images/friend.png")}
            style={styles.careTeamMemberImg}
          />
          <Text style={styles.memberText}>Friend</Text>
        </View>

        <View>
          {/* <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 18,
            }}
          >
            <PlusIcon size={40} style={styles.careTeamMemberImg} />
          </View> */}
          <TouchableOpacity
            style={{
              backgroundColor: "#D8DFF7",
              borderRadius: 35,
              width: 70,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <PlusIcon size={30} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.memberText}>Add</Text>
        </View>
      </View>
      <Divider text={"Shareable Summaries"} />
      <View style={[styles.summarySection]}>
        <View style={styles.summaryDetails}>
          <Text style={styles.summaryText}>For Medical Team</Text>
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
          <Text style={styles.summaryText}>For Education Team</Text>
          <Image
            source={require("../../assets/images/education-team.png")}
            style={styles.summaryImg}
          />
        </View>
      </View>
    </ScrollView>
  );
}
