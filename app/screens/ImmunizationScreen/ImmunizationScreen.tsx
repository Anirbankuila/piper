import { primaryTabs } from "@/app/common/primaryTabs";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import { Colors, Fonts } from "@/constants/theme";
import React, { useRef, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { FunnelIcon, PlusIcon } from "react-native-heroicons/outline";
import RBSheet from "react-native-raw-bottom-sheet";

const ImmunizationScreen = () => {
    const rbSheetRef = useRef<React.ComponentRef<typeof RBSheet> | null>(null);
    const [search, setSearch] = useState("");
    const [vaccineName, setVaccineName] = useState("");
    const [vaccineDate, setVaccineDate] = useState("");

    const [immunizations, setImmunizations] = useState([
        {
            id: "1",
            name: "SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, bivalent, preservative free, 50 mcg/0.5 mL dose",
            date: "03/13/2024",
        },
        {
            id: "2",
            name: "Influenza, injectable, quadrivalent, contains preservative",
            date: "10/20/2020",
        },
        {
            id: "3",
            name: "Pneumococcal polysaccharide vaccine, 23 valent",
            date: "05/13/2024",
        },
    ]);

    // 🔍 Filter immunizations by search
    const filteredImmunizations = immunizations.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddImmunization = () => {
        if (vaccineName.trim() !== "" && vaccineDate.trim() !== "") {
            const newItem = {
                id: Date.now().toString(),
                name: vaccineName.trim(),
                date: vaccineDate.trim(),
            };
            setImmunizations([...immunizations, newItem]);
            setVaccineName("");
            setVaccineDate("");
            rbSheetRef.current?.close();
        }
    };

    return (
        <>
            <View style={styles.container}>
                {/* 🔍 Search bar with filter */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search immunizations..."
                        placeholderTextColor="#888"
                        value={search}
                        onChangeText={setSearch}
                    />
                    <TouchableOpacity style={styles.filterButton}>
                        <FunnelIcon size={20} color={Colors.black} />
                    </TouchableOpacity>
                </View>

                {/* Header */}
                <Text style={styles.header}>Immunizations</Text>
                <Text style={styles.subText}>
                    Current immunizations synched to athenahealth
                </Text>

                {/* List */}
                <FlatList
                    data={filteredImmunizations}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => (
                        <View style={styles.medCard}>
                            <Text style={styles.medName}>{item.name}</Text>
                            <Text style={styles.dateText}>Date Received - {item.date}</Text>
                        </View>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No immunizations found.</Text>
                    }
                />

                {/* ➕ Floating Add Button */}
                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => rbSheetRef.current?.open()}
                >
                    <PlusIcon size={24} color={Colors.primary} />
                </TouchableOpacity>

                {/* 🔽 Bottom Sheet */}
                <RBSheet
                    ref={rbSheetRef}
                    closeOnPressMask
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 20,
                        },
                        draggableIcon: {
                            backgroundColor: "#ccc",
                        },
                    }}
                >
                    <Text style={styles.sheetTitle}>Add New Immunization</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Vaccine Name"
                        placeholderTextColor="#888"
                        value={vaccineName}
                        onChangeText={setVaccineName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Date Received (MM/DD/YYYY)"
                        placeholderTextColor="#888"
                        value={vaccineDate}
                        onChangeText={setVaccineDate}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={handleAddImmunization}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                </RBSheet>
            </View>
            <CustomBottomTab activeTab="" tabs={primaryTabs} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface,
        padding: 16,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        height: 45,
        paddingHorizontal: 14,
        borderRadius: 10,
        fontSize: 14,
        color: Colors.text,
        fontFamily: Fonts.Regular,
        borderWidth: 1,
        borderColor: Colors.strokeColor,
    },
    filterButton: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginLeft: 8,
    },
    header: {
        fontSize: 14,
        fontFamily: Fonts.Bold,
        color: Colors.primary,
        marginBottom: 2,
    },
    subText: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: Colors.textLight,
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 80,
    },
    medCard: {
        backgroundColor: Colors.surface_bg,
        borderRadius: 12,

        marginBottom: 10,
    },
    medName: {
        fontSize: 13,
        fontFamily: Fonts.SemiBold,
        color: Colors.black,
        padding: 10,
    },
    dateText: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: Colors.textLight,
        marginTop: 4,
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: Colors.strokeColor
    },
    emptyText: {
        textAlign: "center",
        color: Colors.textLight,
        marginTop: 40,
        fontFamily: Fonts.Regular,
    },
    fab: {
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: Colors.bg,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    sheetTitle: {
        fontSize: 16,
        fontFamily: Fonts.SemiBold,
        color: Colors.black,
        marginBottom: 15,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.text,
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: Colors.black,
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontFamily: Fonts.SemiBold,
        fontSize: 14,
    },
});

export default ImmunizationScreen;
