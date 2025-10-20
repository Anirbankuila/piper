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

const medications = [
    { id: "1", name: "ADERALL (Oral pill)", dosage: "5 mg", type: "current" },
    { id: "2", name: "Ibuprofen 800 mg tablet", dosage: "800 mg", type: "past" },
    { id: "3", name: "Metformin 850 mg tablet", dosage: "850 mg", type: "past" },
    { id: "4", name: "Asprin 81 mg chewable tablet", dosage: "81 mg", type: "past" },
    { id: "5", name: "Montelukast 10 mg tablet", dosage: "10 mg", type: "past" },
    { id: "6", name: "Prozac 10 mg capsule", dosage: "10 mg", type: "past" },
    { id: "7", name: "Ketoconazole 2% topical cream", dosage: "2%", type: "past" },
    { id: "8", name: "Lisinopril 2.5 mg tablet", dosage: "2%", type: "past" },
    { id: "9", name: "Vitamin B12-vitamin 11", dosage: "2%", type: "past" },
];

const MedicationsScreen = () => {
    const [search, setSearch] = useState("");
    const rbSheetRef = useRef<React.ComponentRef<typeof RBSheet> | null>(null);
    const [newMedicine, setNewMedicine] = useState("");
    const [medications, setMedications] = useState([
        { id: "1", name: "ADERALL (Oral pill)", dosage: "5 mg", type: "current" },
        { id: "2", name: "Ibuprofen 800 mg tablet", dosage: "800 mg", type: "past" },
        { id: "3", name: "Metformin 850 mg tablet", dosage: "850 mg", type: "past" },
        { id: "4", name: "Asprin 81 mg chewable tablet", dosage: "81 mg", type: "past" },
        { id: "5", name: "Montelukast 10 mg tablet", dosage: "10 mg", type: "past" },
        { id: "6", name: "Prozac 10 mg capsule", dosage: "10 mg", type: "past" },
        { id: "7", name: "Ketoconazole 2% topical cream", dosage: "2%", type: "past" },
        { id: "8", name: "Lisinopril 2.5 mg tablet", dosage: "2%", type: "past" },
        { id: "9", name: "Vitamin B12-vitamin 11", dosage: "2%", type: "past" },
        { id: "10", name: "Hydrochlorothiazide 25 mg tablet", dosage: "25mg", type: "past" },
    ]);
    // Filter meds based on search
    const filteredMeds = medications.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    // Group with headers inside one FlatList
    const groupedData: any[] = [];
    const addSection = (title: string, type: string) => {
        const meds = filteredMeds.filter((m) => m.type === type);
        if (meds.length > 0) {
            groupedData.push({ id: `${type}-header`, type: "header", title });
            groupedData.push(...meds);
        }
    };
    addSection("Current medications synched to athenahealth", "current");
    addSection("Past medications synched to athenahealth", "past");
    const handleAddMedicine = () => {
        if (newMedicine.trim() !== "") {
            const newMed = {
                id: Date.now().toString(),
                name: newMedicine.trim(),
                dosage: "",
                type: "past",
            };
            setMedications([...medications, newMed]);
            setNewMedicine("");
            rbSheetRef.current?.close();
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search medications..."
                        placeholderTextColor="#888"
                        value={search}
                        onChangeText={setSearch}
                    />
                    <TouchableOpacity style={styles.filterButton}>
                        <FunnelIcon size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.header}>Medications</Text>
                {/* ✅ Combined FlatList */}
                <FlatList
                    data={groupedData}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => {
                        if (item.type === "header") {
                            return <Text style={styles.sectionHeader}>{item.title}</Text>;
                        }
                        return (
                            <View style={styles.medCard}>
                                <Text style={styles.medName}>{item.name}</Text>
                                {item.type === "current" && (
                                    <Text style={styles.medDosage}>{item.dosage}</Text>
                                )}
                            </View>
                        );
                    }}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No medicines found.</Text>
                    }
                />
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
                    <Text style={styles.sheetTitle}>Add New Medicine</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter medicine name"
                        placeholderTextColor="#888"
                        value={newMedicine}
                        onChangeText={setNewMedicine}
                    />

                    <TouchableOpacity style={styles.addButton} onPress={handleAddMedicine}>
                        <Text style={styles.addButtonText}>Add Medicine</Text>
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
    header: {
        fontSize: 14,
        fontFamily: Fonts.Bold,
        color: Colors.primary,
        marginBottom: 5,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        height: 45,
        paddingHorizontal: 14,
        fontSize: 14,
        color: Colors.text,
        fontFamily: Fonts.Regular,
    },
    filterButton: {
        backgroundColor: Colors.primary,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    listContainer: {
        paddingBottom: 30,
    },
    sectionHeader: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: Colors.black,
        marginTop: 0,
        marginBottom: 8,
    },
    medCard: {
        backgroundColor: Colors.surface_bg,
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
    },
    medName: {
        fontSize: 14,
        fontFamily: Fonts.SemiBold,
        color: Colors.black,
    },
    medDosage: {
        fontSize: 13,
        fontFamily: Fonts.Regular,
        color: Colors.textLight,
        marginTop: 4,
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

export default MedicationsScreen;
