import { Colors, Fonts } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const months = ["May", "June", "July", "Aug", "Sep", "Oct"];

export default function ADHDTrackingChart() {
    // --- Sample Data ---
    const questionnaires = [
        { month: "May", status: "severe" },
        { month: "June", status: "good" },
        { month: "July", status: "moderate" },
        { month: "Aug", status: "good" },
    ];

    const medications = [
        { name: "Adderall 5mg", color: "#E8DEFF", borderColor: "#9059FF", textColor: Colors.main_purple, start: "June", end: "Sep" },
        { name: "Moneklc 3mg", color: "#FFE7ED", borderColor: "#FA114F", textColor: "#940027", start: "May", end: "July" },
    ];

    const therapies = {
        speech: ["June", "July"],
        occupational: ["Aug", "Sep"],
    };

    // --- Helpers ---
    const getMonthIndex = (m: string) => months.indexOf(m);

    const getColor = (status: string) => {
        switch (status) {
            case "severe":
                return "#FA114F";
            case "moderate":
                return "#FF9500";
            case "good":
                return "#01BA38";
            default:
                return "gray";
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>ADHD Questionnaires</Text>
            <View style={styles.legend}>
                <View style={[styles.legendItem]}>
                    <View style={[styles.legendDot, { backgroundColor: "#01BA38" }]} />
                    <Text style={styles.legendText}>Good</Text>
                </View>
                <View style={[styles.legendItem]}>
                    <View style={[styles.legendDot, { backgroundColor: "#FF9500" }]} />
                    <Text style={styles.legendText}>Moderate</Text>
                </View>
                <View style={[styles.legendItem]}>
                    <View style={[styles.legendDot, { backgroundColor: "#FA114F" }]} />
                    <Text style={styles.legendText}>Severe</Text>
                </View>
            </View>
            {/* === MONTHS AT TOP === */}


            {/* === SECTION 1: ADHD QUESTIONNAIRES === */}
            <View style={styles.adhdWrap}>


                <View style={styles.row}>
                    {months.map((m) => {
                        const q = questionnaires.find((item) => item.month === m);
                        return (
                            <View key={m} style={styles.cell}>
                                {q && <View style={[styles.dot, { backgroundColor: getColor(q.status) }]} />}
                            </View>
                        );
                    })}
                </View>
                <View style={styles.monthRow}>
                    {months.map((m) => (
                        <Text key={m} style={styles.monthText}>
                            {m}
                        </Text>
                    ))}
                </View>
            </View>


            {/* === SECTION 2: MEDICATIONS === */}
            <View style={styles.adhdWrap}>
                <Text style={styles.sectionTitle}>Medications</Text>
                <View style={[styles.monthRow,]}>
                    {months.map((m) => (
                        <Text key={m} style={styles.monthText}>
                            {m}
                        </Text>
                    ))}
                </View>
                {medications.map((med) => {
                    const startIdx = getMonthIndex(med.start);
                    const endIdx = getMonthIndex(med.end);
                    const width = (endIdx - startIdx + 1) * 50; // each month cell ≈ 50px wide

                    return (
                        <View key={med.name} style={[styles.row,]}>
                            <View style={{ width: startIdx * 80 }} />
                            <View style={[styles.bar, { backgroundColor: med.color, width, borderColor: med.borderColor }]}>
                                <Text style={[styles.barText, { color: med.textColor }]}>{med.name}</Text>
                            </View>
                        </View>
                    );
                })}

            </View>

            {/* === SECTION 3: THERAPIES === */}
            <Text style={styles.sectionTitle}>Therapies</Text>
            <Text style={[styles.therapyLabel, {}]}>Speech Therapy</Text>

            {/* --- Speech Therapy Line --- */}
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={[styles.row, styles.markerRow]}>
                    {months.map((m) => (
                        <View key={m} style={styles.cell}>
                            {therapies.speech.includes(m) && (
                                <View style={[styles.markerDot, { backgroundColor: "#01BA38" }]} />
                            )}
                        </View>
                    ))}
                </View>
            </View>


            {/* --- Occupational Therapy Line --- */}
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={[styles.row, styles.markerRow]}>
                    {months.map((m) => (
                        <View key={m} style={styles.cell}>
                            {therapies.occupational.includes(m) && (
                                <View style={[styles.markerSquare, { backgroundColor: "#F59E0B" }]} />
                            )}
                        </View>
                    ))}
                </View>
            </View>
            <Text style={styles.therapyLabel}>Occupational Therapy</Text>

            <View style={styles.monthRow}>
                {months.map((m) => (
                    <Text key={m} style={styles.monthText}>
                        {m}
                    </Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: "center",
        backgroundColor: Colors.surface_light_purple,
        marginHorizontal: 12,
        borderRadius: 10,
        marginTop: 10,
        paddingTop:5

    },
    legend: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 18,
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 8,
    },
    legendDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 4,
    },
    legendText: {
        fontSize: 11,
        color: "#333",
    },
    monthRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    monthText: {
        width: 60,
        textAlign: "center",
        fontSize: 11,
        fontFamily: Fonts.Bold,
        color: Colors.purple_text
    },
    sectionTitle: {
        fontSize: 12,
        fontFamily: Fonts.Bold,
        backgroundColor: Colors.bg,
        paddingHorizontal: 5,
        borderRadius: 4,
        marginVertical: 10,
        justifyContent: 'center',
        marginHorizontal: 'auto'

    },
    adhdWrap: {
        borderBottomWidth: 0.7,
        borderStyle: "dashed",
        borderColor: Colors.primary,
        // alignItems: 'flex-start',
        paddingBottom: 10,
        width: '100%'
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,

    },
    cell: {
        width: 64,
        alignItems: "center",
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
    },
    bar: {
        height: 18,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1
    },
    barText: {
        color: "white",
        fontSize: 10,
    },

    markerDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    markerSquare: {
        width: 10,
        height: 10,
    },
    therapyLabel: {
        fontSize: 10,
        marginBottom: 5,
        fontFamily: Fonts.Medium,
        textAlign: 'left',
        marginRight: 'auto',
        marginLeft:5
    },
    lineContainer: {
        position: "relative",
        width: "100%",
        height: 30, // enough space for line + markers
        alignItems: "center",
        justifyContent: "center",
    },
    line: {
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        height: 0.5,
        backgroundColor: Colors.strokeColor,
    },
    markerRow: {
        position: "absolute",
        top: "50%", // centers markers vertically on line
        transform: [{ translateY: -5 }], // adjust if needed
    },

});
