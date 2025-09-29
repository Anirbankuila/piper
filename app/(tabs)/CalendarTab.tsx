import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "..//tabStyles/CalendarTabStyle";
import IAppointment from "../common/Interface/Calendar";
import Routes, { navigateScreen } from "../common/Routes";
import Calendar from "../components/Calendar/CustomizeCalendar";
import Header from "../components/Header/Header";
const CalendarTab = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState("upcoming");
  const changeTabBtn = (tabName: string) => {
    setActiveTab(tabName);
  };
  const getColorFromStatus = useMemo(
    () => (status: string) => {
      switch (status) {
        case "Success":
          return "#01BA38";
        case "Warning":
          return "#FF9500";
        case "Information":
          return Colors.blue_link;
        default:
          return "gray";
      }
    },
    []
  );
  const upcomingAppointmentData: IAppointment[] = [
    {
      id: "1",
      bookDate: "Tue, Nov 8,2025",
      bookTime: "4:00PM -5:00PM",
      doctorName: "Dr. Daniel Appointment",
      doctorImage: require("../../assets/images/doctor1.png"),
      status: "Success",
    },
    {
      id: "2",
      bookDate: "Tue, Nov 8,2025",
      doctorName: "Dr. Daniel Appointment",
      bookTime: "4:00PM -5:00PM",
      doctorImage: require("../../assets/images/doctor1.png"),
      status: "Warning",
    },
    {
      id: "3",
      bookDate: "Tue, Nov 8,2025",
      doctorName: "Dr. Daniel Appointment",
      bookTime: "4:00PM -5:00PM",
      doctorImage: require("../../assets/images/doctor2.png"),
      status: "Information",
    },
  ];
  const UpcomingAppointment = (appointment: IAppointment) => {
    return (
      <View style={styles.appointmentRow}>
        <View style={styles.rowLeft}>
          <Text style={styles.dateText}>{appointment.bookDate}</Text>
          <View style={styles.detailsRow}>
            <View
              style={[
                styles.statusMarker,
                { backgroundColor: getColorFromStatus(appointment.status) },
              ]}
            ></View>
            <View>
              <Text style={styles.doctorName}>{appointment.doctorName}</Text>
              <Text style={styles.appointmentTime}>{appointment.bookTime}</Text>
            </View>
          </View>
        </View>
        <Image source={appointment.doctorImage} style={styles.doctorImg} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={Colors.bg} />
      <View
        style={[
          {
            paddingTop: insets.top - 10,
          },
        ]}
      >
        <Header backgroundColor={Colors.bg} />
        <View style={styles.btnContainer}>
          <View style={styles.btnLeftContainer}>
            <TouchableOpacity onPress={() => changeTabBtn("upcoming")}>
              <View
                style={[
                  styles.tabBtn,
                  {
                    backgroundColor:
                      activeTab === "upcoming"
                        ? Colors.black
                        : Colors.surface_bg,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.btnText,
                    { color: activeTab === "upcoming" ? Colors.bg : "#141514" },
                  ]}
                >
                  Upcoming
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeTabBtn("calendar")}>
              <View
                style={[
                  styles.tabBtn,
                  {
                    backgroundColor:
                      activeTab === "calendar"
                        ? Colors.black
                        : Colors.surface_bg,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.btnText,
                    { color: activeTab === "calendar" ? Colors.bg : "#141514" },
                  ]}
                >
                  Calendar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigateScreen(Routes.newAppointment)}
          >
            <Ionicons name="add-circle-outline" size={26} color={"#3B3D3B"} />
          </TouchableOpacity>
        </View>
        {activeTab === "upcoming" && (
          <View style={styles.appointmentContainer}>
            <FlatList
              renderItem={({ item }) => UpcomingAppointment(item)}
              keyExtractor={(item) => item.id.toString()}
              data={upcomingAppointmentData}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
        {activeTab === "calendar" && (
          <ScrollView style={styles.calendarView}>
            <Calendar />
            <View style={styles.treatMentBooking}>
              <View>
                <View style={styles.statusDot}></View>
                <Text style={styles.doctorNameText}>Dr. Karnik</Text>
                <Text style={styles.treatmentNameText}>
                  For Anxiety treatment
                </Text>
              </View>
              <Image
                source={require("../../assets/images/doctor-care.png")}
                style={[styles.doctorImg, { backgroundColor: Colors.bg }]}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default CalendarTab;
