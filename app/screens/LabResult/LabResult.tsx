import { primaryTabs } from "@/app/common/primaryTabs";
import Routes, { navigateScreen } from "@/app/common/Routes";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import { Colors, Fonts } from "@/constants/theme";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const LabResultScreen = () => {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();

    

    const [labResults, setLabResults] = useState([
        {
            id: "1",
            date: "July 18, 2020",
            time: "09:30 AM",
            reportType: "CMP, Serum or plasma",
        },
        {
            id: "2",
            date: "July 14, 2020",
            time: "02:15 PM",
            reportType: "CMP, Serum or plasma",
        },
        {
            id: "3",
            date: "July 12, 2020",
            time: "09:30 AM",
            reportType: "CBC",
        },
        {
            id: "4",
            date: "July 14, 2020",
            time: "02:15 PM",
            reportType: "HbA1c (hemaglobin A1c ), Blood",
        },
        {
            id: "5",
            date: "July 16, 2020",
            time: "09:30 AM",
            reportType: "CMP, Serum or plasma",
        },
        {
            id: "6",
            date: "July 14, 2020",
            time: "02:15 PM",
            reportType: "HbA1c (hemaglobin A1c ), Blood",
        },
        {
            id: "7",
            date: "July 18, 2020",
            time: "09:30 AM",
            reportType: "CMP, Serum or plasma",
        },
        {
            id: "8",
            date: "July 11, 2020",
            time: "02:15 PM",
            reportType: "CMP, Serum or plasma",
        },
        {
            id: "9",
            date: "July 09, 2020",
            time: "09:30 AM",
            reportType: "CMP, Serum or plasma",
        },
        {
            id: "10",
            date: "July 19, 2020",
            time: "02:15 PM",
            reportType: "CMP, Serum or plasma",
        },
    ]);

    // Filter lab results by search (date or report type)
    const filteredResults = labResults.filter(
        (item) =>
            item.date.toLowerCase().includes(search.toLowerCase()) ||
            item.reportType.toLowerCase().includes(search.toLowerCase())
    );

    // Group by date for display
    const groupedData: any[] = [];
    filteredResults.forEach((item) => {
        const dateExists = groupedData.find((d) => d.date === item.date);
        if (!dateExists) {
            groupedData.push({ id: `${item.date}-header`, type: "header", date: item.date });
        }
        groupedData.push(item);
    });

    

    return (
        <>
            <View style={styles.container}>
                {/* 🔍 Search */}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search lab results..."
                    placeholderTextColor="#888"
                    value={search}
                    onChangeText={setSearch}
                />

                {/* 📋 Lab results */}
                <FlatList
                    data={groupedData}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => {
                        if (item.type === "header") {
                            return <Text style={styles.dateHeader}>{item.date}</Text>;
                        }
                        return (
                            <View style={styles.card}>
                                <Text style={styles.time}>{item.time}</Text>
                                <Text style={styles.reportType}>Report Type: </Text>
                                <View style={styles.bottomPart}>
                                    <Text style={styles.reportName}>{item.reportType}</Text>
                                    <TouchableOpacity style={styles.viewButton} onPress={() => navigateScreen(Routes.labDetails)}>
                                        <Text style={styles.viewButtonText}>View</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    }}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No lab results found.</Text>
                    }
                />
            </View>
            <CustomBottomTab activeTab="" tabs={primaryTabs} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.surface,
    },
    searchInput: {
        height: 45,
        borderWidth: 1,
        borderColor: Colors.strokeColor,
        borderRadius: 10,
        paddingHorizontal: 14,
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.text,
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 20,
    },
    dateHeader: {
        fontSize: 14,
        fontFamily: Fonts.Bold,
        color: Colors.primary,
        marginTop: 5,
        marginBottom: 8,
    },
    card: {
        backgroundColor: Colors.surface_bg,
        borderRadius: 12,
        padding: 14,
        marginBottom: 5,
    },
    time: {
        fontSize: 12,
        fontFamily: Fonts.Bold,
        color: Colors.black,
        marginBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: Colors.strokeColor,
        paddingBottom: 5
    },
    reportType: {
        fontSize: 12,
        fontFamily: Fonts.SemiBold,
        color: Colors.textLight,
        marginBottom: 5,
    },
    bottomPart:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    reportName: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: Colors.primary,
    },
    viewButton: {
        alignSelf: "flex-start",
    },
    viewButtonText: {
        color: Colors.primary,
        fontSize: 12,
        fontFamily: Fonts.Regular,
    },
    emptyText: {
        textAlign: "center",
        color: Colors.textLight,
        marginTop: 40,
        fontFamily: Fonts.Regular,
    },
});

export default LabResultScreen;
