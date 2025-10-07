import { Colors, Fonts } from "@/constants/theme";
import * as FileSystem from "expo-file-system/legacy";
import { useRouter } from "expo-router";
import * as Sharing from "expo-sharing";
import React, { useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
const dummyDocs = [
    { id: "1", name: "Report Cards", desc: "This document contains school info.", uri: "https://example.com/report.pdf" },
    { id: "2", name: "IEP/School Testing", desc: "This document contains school info.", uri: "https://example.com/iep.pdf" },
    { id: "3", name: "Neuropsychological Reports", desc: "This document contains school info.", uri: "https://example.com/neuro.pdf" },
    { id: "4", name: "Report Cards", desc: "This document contains school info.", uri: "https://example.com/report.pdf" },
    { id: "5", name: "IEP/School Testing", desc: "This document contains school info.", uri: "https://example.com/iep.pdf" },
    { id: "6", name: "Neuropsychological Reports", desc: "This document contains school info.", uri: "https://example.com/neuro.pdf" },
];

const PgxReport = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");
    const [docs] = useState(dummyDocs);

    const filteredDocs = docs.filter((doc) =>
        doc.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleDownload = async (reportUrl: string, reportName: string) => {
        try {
            const fileUri = FileSystem.cacheDirectory + reportName;

            const { uri } = await FileSystem.downloadAsync(reportUrl, fileUri);

            Alert.alert("Download Complete", `Report saved at: ${uri}`);

            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(uri);
            }
        } catch (error) {
            console.error("Download error:", error);
            Alert.alert("Download Failed", "Unable to download the report.");
        }
    };



    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <View style={styles.container}>
                <View style={styles.overviewWrapper}>
                    <Image source={require("../../../assets/icons/pipersmall.png")} style={styles.piperImg} />
                    <Text style={styles.topSecTitle}>Here is an overview</Text>
                    <Text style={styles.overviewDesc}>David’s results show that there is an increase in hyperactivity since his last assessment. Next time you visit his doctor you may like to mention these results.</Text>
                </View>


                {/* Document List */}
                <FlatList
                    data={filteredDocs}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={
                        <View style={styles.reportWrapper}>
                            <View style={styles.reportHeader}>
                                <Text style={styles.topSecTitle}>PGx Report</Text>
                                <TouchableOpacity
                                    onPress={() => handleDownload(dummyDocs[0].uri, "PGx_Report.pdf")}
                                >
                                    <Image
                                        source={require("../../../assets/icons/receive-square.png")}
                                        style={styles.downIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                    }
                    renderItem={({ item }) => (
                        <View style={styles.docItem}>
                            <View style={styles.docItemLeft}>
                                <Image
                                    source={require("../../../assets/icons/pdf.png")}
                                    style={styles.pdfIcon}
                                    resizeMode="contain"
                                />
                                <View style={styles.docItemContent}>
                                    <Text style={styles.docName}>{item.name}</Text>
                                    <Text style={styles.docDesc}>{item.desc}</Text>
                                </View>
                            </View>

                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.emptyText}>No documents found</Text>}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

export default PgxReport;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", paddingTop: 0 },
    overviewWrapper: { flexDirection: 'column', alignItems: 'center', padding: 24, backgroundColor: Colors.surface_bg, marginBottom: 12 },
    topSecTitle: { fontSize: 20, fontFamily: Fonts.SemiBold, color: Colors.black, textAlign: 'center', },
    piperImg: { width: 32, height: 32, marginBottom: 12 },
    overviewDesc: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: Colors.textLight,
        textAlign: 'left',
        marginTop: 8,
        lineHeight: 18,
        backgroundColor: Colors.bg,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        letterSpacing: 0.5
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 12,
        backgroundColor: Colors.surface_bg,
        marginHorizontal: 24
    },
    searchIcon: { marginRight: 8 },
    searchInput: { flex: 1, paddingVertical: 12, fontSize: 16 },
    docItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 22,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: Colors.strokeColor
    },
    docItemLeft: { flexDirection: "row" },
    docItemContent: { marginLeft: 12, width: '80%' },
    docName: { fontSize: 14, fontFamily: Fonts.Bold, color: Colors.black },
    docDesc: { fontSize: 10, fontFamily: Fonts.Regular, color: Colors.textLight, marginTop: 5 },
    pdfIcon: { width: 24, height: 24 },
    emptyText: { textAlign: "center", marginTop: 20, color: "#888" },
    reportWrapper: {
        paddingHorizontal: 24
    },
    reportHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    downIcon: {
        width: 24,
        height: 24
    }
});
