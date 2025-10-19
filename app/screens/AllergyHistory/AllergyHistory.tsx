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

const AllergyScreen = () => {
    const [search, setSearch] = useState("");
    const rbSheetRef = useRef<React.ComponentRef<typeof RBSheet> | null>(null);
    const [newAllergy, setNewAllergy] = useState("");

    const [allergies, setAllergies] = useState([
        { id: "1", name: "Animal Dander", category: "general" },
        { id: "2", name: "Lisinopril", category: "medication" },
        { id: "3", name: "Penicillins", category: "medication" },
    ]);

    // 🔍 Filter based on search
    const filteredAllergies = allergies.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    // ✅ Grouped data for FlatList
    const groupedData: any[] = [];

    const addSection = (title: string, category: string) => {
        const items = filteredAllergies.filter((a) => a.category === category);
        if (items.length > 0) {
            groupedData.push({ id: `${category}-header`, type: "header", title, category });
            groupedData.push(...items);
        }
    };

    addSection("General Allergies", "general"); // general allergies
    addSection("Medication Allergies", "medication"); // medication allergies

    // ➕ Add new allergy (default to medication)
    const handleAddAllergy = () => {
        if (newAllergy.trim() !== "") {
            const newItem = {
                id: Date.now().toString(),
                name: newAllergy.trim(),
                category: "medication",
            };
            setAllergies([...allergies, newItem]);
            setNewAllergy("");
            rbSheetRef.current?.close();
        }
    };

    return (
        <View style={styles.container}>
            {/* 🔍 Search bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search allergies..."
                    placeholderTextColor="#888"
                    value={search}
                    onChangeText={setSearch}
                />
                <TouchableOpacity style={styles.filterButton}>
                    <FunnelIcon size={20} color={Colors.black} />
                </TouchableOpacity>
            </View>

            {/* 📋 Allergies list */}
            <FlatList
                data={groupedData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => {
                    if (item.type === "header") {
                        return (
                            <View style={{ marginBottom: 8 }}>
                                <Text style={styles.sectionHeader}>{item.title}</Text>
                                {item.category === "general" && (
                                    <Text style={styles.subText}>
                                        Current allergies synched to athenahealth
                                    </Text>
                                )}
                            </View>
                        );
                    }
                    return (
                        <View style={styles.medCard}>
                            <Text style={styles.medName}>{item.name}</Text>
                        </View>
                    );
                }}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No allergies found.</Text>
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
                <Text style={styles.sheetTitle}>Add New Allergy</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter allergy name"
                    placeholderTextColor="#888"
                    value={newAllergy}
                    onChangeText={setNewAllergy}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddAllergy}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </RBSheet>
        </View>
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
        marginBottom: 20,
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
    },
    listContainer: {
        paddingBottom: 80,
    },
    header: {
        fontSize: 14,
        fontFamily: Fonts.Bold,
        color: Colors.primary,
        marginBottom: 5,
    },
    sectionHeader: {
        fontSize: 14,
        fontFamily: Fonts.Bold,
        color: Colors.primary,
        marginTop: 10,
    },
    subText: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: Colors.textLight,
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

export default AllergyScreen;
