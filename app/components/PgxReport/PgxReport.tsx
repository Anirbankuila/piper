import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system/legacy";
import { useRouter } from "expo-router";
import * as Sharing from "expo-sharing";
import React, { useRef, useState } from "react";
import {
    Alert,
    Dimensions,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const dummyDocs = [
    { id: "1", name: "Report Cards", desc: "This document contains school info.", uri: "https://example.com/report.pdf" },
    { id: "2", name: "IEP/School Testing", desc: "This document contains school info.", uri: "https://example.com/iep.pdf" },
    { id: "3", name: "Neuropsychological Reports", desc: "This document contains school info.", uri: "https://example.com/neuro.pdf" },
    { id: "4", name: "Report Cards", desc: "This document contains school info.", uri: "https://example.com/report.pdf" },
    { id: "5", name: "IEP/School Testing", desc: "This document contains school info.", uri: "https://example.com/iep.pdf" },
    { id: "6", name: "Neuropsychological Reports", desc: "This document contains school info.", uri: "https://example.com/neuro.pdf" },
];

type PgxTab = "Antipsychotics" | "SSRIs" | "Antidepressants";

const pgxData: Record<PgxTab, { id: string; name: string; pmid: string; geneType: string; geneDesc: string; response: string; status: boolean }[]> = {
    Antipsychotics: [
        {
            id: "1",
            name: "Risperidone",
            pmid: "19997080",
            geneType: "Genotype",
            geneDesc: "DRD3 (RS6280) C>T (CT)",
            response: "Improved Clinical outcome",
            status: true

        },
        { id: "2", name: "Olanzapine", pmid: "19997081", geneType: "Genotype", geneDesc: "DRD3 (RS6280) C>T (CT)", response: "Significant Interaction", status: false },
    ],
    SSRIs: [
        { id: "3", name: "Fluoxetine", pmid: "19997082", geneType: "Genotype", geneDesc: "DRD3 (RS6280) C>T (CT)", response: "Improved Clinical outcome", status: true },
        { id: "4", name: "Sertraline", pmid: "19997083", geneType: "Genotype", geneDesc: "DRD3 (RS6280) C>T (CT)", response: "Significant Interaction", status: true },
    ],
    Antidepressants: [
        { id: "5", name: "Duloxetine", pmid: "19997084", geneType: "Genotype", geneDesc: "DRD3 (RS6280) C>T (CT)", response: "Improved Clinical outcome", status: true },
        { id: "6", name: "Venlafaxine", pmid: "19997085", geneType: "Genotype", geneDesc: "DRD3 (RS6280) C>T (CT)", response: "Significant Interaction", status: true },
    ],
};

const PgxReport = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");
    const [docs] = useState(dummyDocs);
    const [activeTab, setActiveTab] = useState<PgxTab>("Antipsychotics");
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const rbSheetRef = useRef<RBSheet | null>(null);

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
    const openSheet = (item: any) => {
        setSelectedItem(item);
        rbSheetRef.current?.open();
    };
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <View style={styles.container}>
                <View style={styles.overviewWrapper}>
                    <Image source={require("../../../assets/icons/alexa-small.png")} style={styles.piperImg} />
                    <Text style={styles.topSecTitle}>Here is an overview</Text>
                    <Text style={styles.overviewDesc}>
                        David’s results show that there is an increase in hyperactivity since his last assessment.
                        Next time you visit his doctor you may like to mention these results.
                    </Text>
                </View>
                <FlatList
                    data={pgxData[activeTab]}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={true}
                    scrollToOverflowEnabled={true}
                    screenReaderFocusable={true}
                    showsVerticalScrollIndicator={false}
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

                            {/* Tabs */}
                            <View style={styles.pgxTab}>
                                {["Antipsychotics", "SSRIs", "Antidepressants"].map((tab) => (
                                    <TouchableOpacity
                                        key={tab}
                                        onPress={() => setActiveTab(tab as PgxTab)}
                                        style={[
                                            styles.tabButton,
                                            activeTab === tab && styles.activeTabButton,
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.tabText,
                                                activeTab === tab && styles.activeTabText,
                                            ]}
                                        >
                                            {tab}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemWrapper} onPress={() => openSheet(item)}>
                            <View style={styles.itemTop}>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                                <Text style={styles.pmid}>PMID: {item.pmid}</Text>
                            </View>
                            <View style={styles.itemMiddle}>
                                <Text style={styles.itemText}>Gene - {item.geneType}</Text>
                                <Text style={styles.itemDesc}>{item.geneDesc}</Text>
                            </View>
                            <View style={styles.itemBottom}>
                                <Text style={styles.itemText}>PGx Response</Text>
                                <View style={styles.statusWrapper}>
                                    <View style={item.status === true ? styles.itemSignGreen : styles.itemSignRed} />
                                    <Text style={styles.itemDesc}>    {item.response}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No data found for this category</Text>
                    }
                />

                <RBSheet
                    ref={rbSheetRef}
                    height={Dimensions.get("window").height}
                    openDuration={200}
                    customStyles={{
                        wrapper: { backgroundColor: "rgba(0,0,0,0.5)" },
                        container: {
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            padding: 24,

                            backgroundColor: "#fff",
                        },
                    }}
                >
                    {selectedItem && (
                        <View>
                            <TouchableOpacity style={styles.closeButton} onPress={() => rbSheetRef.current.close()}>
                                <Ionicons name="close-circle-outline" size={28} color={Colors.black} />
                            </TouchableOpacity>
                            <View style={styles.sheetContent}>
                                <Text style={styles.sheetTitle}>{selectedItem.name}</Text>
                                <View style={styles.statusWrapper}>
                                    <View style={selectedItem.status === true ? styles.itemSignGreen : styles.itemSignRed} />
                                    <Text style={styles.sheetResponse}>    {selectedItem.response}</Text>
                                </View>

                                <View style={styles.eachWrap}>
                                    <Text style={styles.sheetText}>Gene - {selectedItem.geneType}</Text>
                                    <Text style={styles.sheetDesc}>{selectedItem.geneDesc}</Text>
                                </View>

                                <View style={[
                                    styles.eachWrap, styles.midSheetDesc
                                ]}>
                                    <Text style={styles.sheetText}>Clinical Impact</Text>
                                    <Text
                                        style={[
                                            styles.sheetDesc
                                        ]}
                                    >
                                        This patient's CT genotypes enhance risperidone action
                                        in children with Autistic Disorder.
                                    </Text>
                                </View>
                                <View style={styles.eachWrap}>
                                    <Text style={styles.sheetText}>Citations</Text>
                                    <Text style={styles.sheetDesc}>PMID: {selectedItem.pmid}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </RBSheet>
            </View>
        </KeyboardAvoidingView>
    );
};

export default PgxReport;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", paddingTop: 0 },
    overviewWrapper: { flexDirection: 'column', alignItems: 'center', padding: 24, backgroundColor: Colors.surface_bg, marginBottom: 12 },
    topSecTitle: { fontSize: 20, fontFamily: Fonts.SemiBold, color: Colors.black, textAlign: 'center', },
    piperImg: {
        width: 42,
        height: 42,
        marginBottom: 12,
        borderRadius: 21,
        shadowColor: "#6A1BE2",
        shadowOffset: { width: 0, height: -0.63 },
        shadowOpacity: 0.3, // 30%
        shadowRadius: 15,

        // Android Shadow
        elevation: 10,
        backgroundColor: "#D8DFF7"
    },
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
        height: 24,
        tintColor: Colors.black,
    },
    pgxTab: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: Colors.surface_bg,
    },
    activeTabButton: {
        backgroundColor: Colors.black,
    },
    tabText: {
        fontSize: 12,
        color: Colors.black,
        fontFamily: Fonts.Medium,
    },
    activeTabText: {
        color: Colors.bg,
        fontFamily: Fonts.Medium,
    },
    itemWrapper: {
        backgroundColor: "#f8f8f8",
        marginHorizontal: 24,
        marginVertical: 6,
        borderRadius: 10,
    },
    itemTitle: {
        fontSize: 14,
        fontFamily: Fonts.Bold,
        color: Colors.black,
    },
    itemTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    itemMiddle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.strokeColor,
    },
    itemBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    pmid: {
        fontSize: 10,
        fontFamily: Fonts.Regular,
        color: Colors.black,
        backgroundColor: Colors.bg,
        padding: 4,
        borderRadius: 4
    },
    itemText: {
        fontSize: 8,
        fontFamily: Fonts.Bold,
        color: Colors.text
    },
    itemDesc: {
        fontSize: 8,
        fontFamily: Fonts.Medium,
        color: Colors.text,

    },
    statusWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemSignGreen: { width: 8, height: 8, backgroundColor: 'green', borderRadius: 4, marginRight: 0 },
    itemSignRed: { width: 8, height: 8, backgroundColor: 'red', borderRadius: 4, marginRight: 0 },
    sheetTitle: { fontSize: 20, fontFamily: Fonts.Bold, marginBottom: 4 },
    sheetSub: { color: "#777", marginBottom: 10 },
    sheetText: { fontSize: 14, fontFamily: Fonts.Bold, color: Colors.black },
    sheetDesc: { fontSize: 12, fontFamily: Fonts.Medium, color: Colors.text, marginTop: 8, lineHeight: 18 },
    sheetResponse: { fontSize: 12, fontFamily: Fonts.Medium },
    sheetContent: {
        marginTop: 52
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    },
    eachWrap: {
        paddingVertical: 15,
    },
    midSheetDesc: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.strokeColor,
    }
});
