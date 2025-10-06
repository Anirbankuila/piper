import { Medication } from "@/app/common/Interface/Medication";
import { primaryTabs } from "@/app/common/primaryTabs";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import Header from "@/app/components/Header/Header";
import Searchbar from "@/app/components/Searchbar/Searchbar";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { Image, ImageBackground } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Routes, { navigateScreen } from "@/app/common/Routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Styles from "./Medicine.style";

const medications: Medication[] = [
  {
    id: "1",
    name: "Sertraline",
    dosage: "50 MG",
    schedule: "Daily",
    time: "09:00 AM",
    status: "Taken",
    date: new Date(),
  },
  {
    id: "2",
    name: "Escitalopram",
    dosage: "10 MG",
    schedule: "Every 3 days",
    time: "08:00 PM",
    status: "Taken",
    date: new Date(),
  },
  {
    id: "3",
    name: "Fluoxetine",
    dosage: "20 MG",
    schedule: "Daily",
    time: "07:30 AM",
    status: "Taken",
    date: new Date(),
  },
  {
    id: "4",
    name: "Paracetamol",
    dosage: "500 MG",
    schedule: "Daily",
    time: "07:00 AM",
    status: "Missed",
    date: new Date(),
  },
];
const Medicine = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | "Taken" | "Missed"
  >("All");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [currentWeekStart, setCurrentWeekStart] = useState(
    dayjs().startOf("week").add(1, "day")
  );
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const insets = useSafeAreaInsets();
  const getWeekDays = () => {
    const start = currentWeekStart;
    return Array.from({ length: 7 }).map((_, i) => start.add(i, "day"));
  };

  const handlePrevWeek = () =>
    setCurrentWeekStart(currentWeekStart.subtract(1, "day"));
  const filteredMedicines = medications.filter((m) => {
    const sameDay = dayjs(m.date).isSame(selectedDate, "day");
    const matchFilter = selectedFilter === "All" || m.status === selectedFilter;
    return sameDay && matchFilter;
  });

  const renderMedication = ({ item }: { item: Medication }) => (
    <View style={Styles.card}>
      <View style={Styles.leftContainer}>
        <Text style={Styles.name}>{item.name}</Text>
        <Text style={Styles.time}>{item.time}</Text>
      </View>
      <View style={Styles.divider}></View>
      <View style={Styles.rightContainer}>
        <Text style={Styles.details}>
          {item.dosage} · {item.schedule}
        </Text>

        <View style={Styles.statusContainer}>
          <View
            style={[
              Styles.statusDot,
              {
                backgroundColor:
                  item.status === "Taken" ? "#01BA38" : "#FF5252",
              },
            ]}
          />
          <Text style={Styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.container}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor={"#D2FFF6"} translucent={true} />
        <View
          style={[
            Styles.headerWrapper,
            {
              paddingTop: insets.top - 10,
            },
          ]}
        >
          <Header backgroundColor={"#D2FFF6"} />
          <ImageBackground
            source={require("../../../assets/images/medicine-bg-header.png")}
            style={Styles.piperIntroContainer}
            contentFit="cover"
          >
            <Image
              source={require("../../../assets/images/Alex-personal 1.png")}
              style={Styles.alexPersonalImg}
            />
            <View style={Styles.messageWrapper}>
              <View style={Styles.messageBox}>
                <Text style={Styles.title}>
                  Track and Manage Medications in One Spot
                </Text>
                <Text style={Styles.subtitle}>
                  Start by adding medicines here, I can set reminders to take
                  them or refill them.
                </Text>
              </View>
              <View style={Styles.pointer} />
            </View>
          </ImageBackground>
        </View>
        <View style={Styles.mainContent}>
          <Searchbar
            placeholderText="Search Medicine"
            iconTintColor={Colors.grey}
            containerStyle={Styles.searchInput}
            showMicIcon={false}
          />
          <View style={Styles.btnSection}>
            <View style={Styles.pushNotification}>
              <Text style={Styles.pushNotifyText}>
                Enable Push Notification
              </Text>
              <Switch
                trackColor={{ false: "#d3d3d3", true: "#34C759" }}
                thumbColor={isEnabled ? "#34C759" : "#f4f3f4"}
                ios_backgroundColor="#d3d3d3"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={Styles.medicineDetails}>
              <View style={Styles.medicineBtn}>
                <TouchableOpacity
                  style={Styles.circleBtn}
                  onPress={() => navigateScreen(Routes.medicineDetails)}
                >
                  <Ionicons name="add" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text>Add Medicine</Text>
              </View>
              <View style={Styles.medicineBtn}>
                <TouchableOpacity
                  style={Styles.circleBtn}
                  onPress={() => navigateScreen(Routes.medicineDetails)}
                >
                  <Image
                    source={require("../../../assets/icons/finger-circle.png")}
                    style={Styles.reminderIcon}
                    tintColor={"#FA114F"}
                  ></Image>
                </TouchableOpacity>
                <Text>Set Reminder</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.medicineListContainer}>
          {/* Month & Week Navigation */}
          <View style={Styles.header}>
            <Text style={Styles.monthText}>{selectedDate.format("MMMM")}</Text>
          </View>

          {/* Week Days Row */}
          <View style={Styles.weekContainer}>
            <TouchableOpacity onPress={handlePrevWeek}>
              <Ionicons
                name="chevron-back-outline"
                size={20}
                color={Colors.grey}
              />
            </TouchableOpacity>
            {getWeekDays().map((day) => {
              const isSelected = selectedDate.isSame(day, "day");
              return (
                <TouchableOpacity
                  key={day.format("DD-MM-YYYY")}
                  style={[
                    Styles.dayContainer,
                    isSelected && Styles.selectedDay,
                  ]}
                  onPress={() => setSelectedDate(day)}
                >
                  <Text
                    style={[
                      Styles.dayText,
                      isSelected && Styles.selectedDayText,
                    ]}
                  >
                    {day.format("dd")}
                  </Text>
                  <Text
                    style={[
                      Styles.dateText,
                      isSelected && Styles.selectedDayText,
                    ]}
                  >
                    {day.format("D")}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={Styles.heading}>Medications</Text>

          <View style={Styles.filterContainer}>
            {["All", "Taken", "Missed"].map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  Styles.filterButton,
                  selectedFilter === filter && Styles.activeFilterButton,
                ]}
                onPress={() => setSelectedFilter(filter as any)}
              >
                <Text
                  style={[
                    Styles.filterText,
                    selectedFilter === filter && Styles.activeFilterText,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Medication List */}
          {filteredMedicines.length > 0 ? (
            <FlatList
              data={filteredMedicines}
              keyExtractor={(item) => item.id}
              renderItem={renderMedication}
              contentContainerStyle={{ paddingVertical: 10 }}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text style={Styles.noDataText}>No medications for this day.</Text>
          )}
        </View>
      </ScrollView>
      <CustomBottomTab activeTab={""} tabs={primaryTabs} />
    </>
  );
};

export default Medicine;
