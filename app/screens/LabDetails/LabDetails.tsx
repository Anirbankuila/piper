import { Colors, Fonts } from "@/constants/theme";
import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

interface LabDetail {
    id: string;
    testName: string;
    result: string; // e.g., "256 mg/dL"
    status: "In range" | "Out of range";
    referenceRange: string; // e.g., "65-99 mg/dL"
}

const screenWidth = Dimensions.get("window").width - 32; // 16px padding each side

const LabDetailsScreen: React.FC = () => {
    const [search, setSearch] = useState("");

    const labTests: LabDetail[] = [
        {
            id: "1",
            testName: "Glucose, serum",
            result: "256 mg/dL",
            status: "Out of range",
            referenceRange: "65-99 mg/dL",
        },
        {
            id: "2",
            testName: "BUN",
            result: "19 mg/dL",
            status: "In range",
            referenceRange: "9-27 mg/dL",
        },
    ];

    const filteredTests = labTests.filter((test) =>
        test.testName.toLowerCase().includes(search.toLowerCase())
    );

    const getDotPosition = (value: number, min: number, max: number, barWidth: number) => {
        // Position relative to full bar
        const range = max - min;
        const percent = (value - min) / range;
        return percent * barWidth;
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search lab tests..."
                placeholderTextColor="#888"
                value={search}
                onChangeText={setSearch}
            />

            <FlatList
                data={filteredTests}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => {
                    const [minStr, maxStr] = item.referenceRange.replace(" mg/dL", "").split("-");
                    const min = parseFloat(minStr);
                    const max = parseFloat(maxStr);
                    const value = parseFloat(item.result.replace(" mg/dL", ""));
                    const inRange = value >= min && value <= max;

                    const barWidth = screenWidth - 82; // full bar width inside card

                    // Green bar width proportional to min-max
                    const greenWidth = ((max - min) / (max + 20)) * barWidth; // +20 for extra space
                    const greenStart = ((min - min) / (max + 20 - min)) * barWidth; // min position in bar

                    // Dot position along full bar
                    let dotPos = ((value - min) / (max - min)) * greenWidth + greenStart;
                    if (value < min) dotPos = -8; // outside left
                    if (value > max) dotPos = barWidth - 8; // outside right

                    return (
                        <View style={styles.card}>
                            <Text style={styles.testName}>{item.testName}</Text>
                            <Text style={[styles.status, { color: inRange ? Colors.green : Colors.error }]}>
                                {item.status}
                            </Text>
                            {/* <Text style={styles.result}>{item.result}</Text> */}
                            {/* <Text style={styles.reference}>Reference: {item.referenceRange}</Text> */}

                            {/* Progress Bar */}
                            <View style={styles.progressContainer}>
                                {/* Full background */}
                                <View style={styles.progressBackground} />

                                {/* Green range */}
                                <View style={[styles.greenRange, { width: greenWidth, left: greenStart }]} />

                                {/* Dot value */}
                                <Text
                                    style={[
                                        styles.dotValue,
                                        { left: dotPos - 10 }, // adjust to center text above dot
                                    ]}
                                >
                                    {item.result} {/* 19 or 256 */}
                                </Text>

                                {/* Dot */}
                                <View
                                    style={[
                                        styles.dot,
                                        { left: dotPos, backgroundColor: inRange ? Colors.black : Colors.error },
                                    ]}
                                />

                                {/* Min and Max labels */}
                                <Text style={[styles.progressLabel, { left: greenStart - 5 }]}>{min}</Text>
                                <Text style={[styles.progressLabel, { left: greenStart + greenWidth - 8 }]}>{max}</Text>
                            </View>



                        </View>
                    );
                }}
                ListEmptyComponent={<Text style={styles.emptyText}>No lab tests found.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.surface, padding: 16 },
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
    listContainer: { paddingBottom: 20 },
    card: { backgroundColor: Colors.surface_bg, borderRadius: 12, padding: 16, marginBottom: 12 },
    testName: { fontSize: 14, fontFamily: Fonts.SemiBold, color: Colors.black, marginBottom: 4 },
    status: { fontSize: 12, fontFamily: Fonts.Bold, marginBottom: 4 },
    result: { fontSize: 14, fontFamily: Fonts.Regular, color: Colors.text, marginBottom: 4 },
    reference: { fontSize: 12, fontFamily: Fonts.Regular, color: Colors.textLight, marginBottom: 6 },

    progressContainer: { height: 20, justifyContent: "center", marginTop: 18 },
    progressBackground: {
        height: 12,
        backgroundColor: Colors.bg,
        borderRadius: 5,
        position: "absolute",
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: Colors.strokeColor
    },
    greenRange: {
        height: 10,
        backgroundColor: Colors.green,
        position: "absolute",
        borderRadius: 5,
    },
    dot: {
        position: "absolute",
        top: 4,
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    progressLabel: {
        position: "absolute",
        top: 14,
        fontSize: 10,
        fontFamily: Fonts.Regular,
        color: Colors.textLight,
    },
    emptyText: { textAlign: "center", color: Colors.textLight, marginTop: 40, fontFamily: Fonts.Regular },
    dotValue: {
        position: "absolute",
        bottom: 20, // above the dot
        left:-10,
        fontSize: 12,
        fontFamily: Fonts.SemiBold,
        color: Colors.black,
    },

});

export default LabDetailsScreen;
