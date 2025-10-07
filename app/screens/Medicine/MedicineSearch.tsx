import { Medication } from "@/app/common/Interface/Medication";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import MedicationListItem from "@/app/components/MedicationListItem/MedicationListItem";
import Searchbar from "@/app/components/Searchbar/Searchbar";
import { Colors, Fonts } from "@/constants/theme";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
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
const MedicineSearch = () => {
  const [filteredMedicines, setFilteredMedicines] =
    useState<Medication[]>(medications);

  const onSearch = (searchText: string) => {
    if (!searchText) {
      setFilteredMedicines(medications);
      return;
    }
    const filtered = medications.filter((med) =>
      med.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMedicines(filtered);
  };
  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          placeholderText="Search Medicine"
          iconTintColor={Colors.grey}
          containerStyle={styles.searchInput}
          inputStyle={{ color: Colors.text }}
          showMicIcon={false}
          showCrossIcon
          onChangeText={(text) => {
            onSearch(text);
          }}
        />
        {filteredMedicines.length > 0 ? (
          <FlatList
            data={filteredMedicines}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MedicationListItem medication={item} showStatus={false} />
            )}
            contentContainerStyle={{ paddingVertical: 10 }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.noDataText}>No medications found.</Text>
        )}
      </View>
      <CommonButton
        title="Sync Data"
        backgroundColor={Colors.black}
        color={Colors.bg}
        onPress={() => {}}
      />
    </View>
  );
};

export default MedicineSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.bg,
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
  searchInput: {
    borderRadius: 10,
    borderColor: Colors.strokeColor,
  },
  noDataText: {
    textAlign: "center",
    color: "#999",
    marginVertical: 15,
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
});
