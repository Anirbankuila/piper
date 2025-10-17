import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    Share,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const dummyDocs = [
    { id: "1", name: "Report Cards", desc: "This document contains school info.", uri: "https://example.com/report.pdf" },
    { id: "2", name: "IEP/School Testing", desc: "This document contains school info.", uri: "https://example.com/iep.pdf" },
    { id: "3", name: "Neuropsychological Reports", desc: "This document contains school info.", uri: "https://example.com/neuro.pdf" },
];

const DocumentList = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");
    const [docs] = useState(dummyDocs);

    const filteredDocs = docs.filter((doc) =>
        doc.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleShare = async (doc: any) => {
        try {
            await Share.share({
                message: `📄 ${doc.name}\n${doc.uri}`,
            });

            // Navigate to Success Screen after sharing
            navigateScreen(Routes.shareSuccess)
        } catch (error) {
            console.log("Error sharing document:", error);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <View style={styles.container}>
                <View style={styles.topSec}>
                    <Text style={styles.topSecTitle}>
                        All your Therapy docs, minus the backpack explosion.
                    </Text>
                    <Image
                        source={require("../../../assets/images/piper.png")}
                        style={styles.piperImg}
                        resizeMode="contain"
                    />
                </View>

                {/* Search Bar */}
                <View style={styles.searchWrapper}>
                    <Ionicons name="search" size={20} color={Colors.text} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search documents..."
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>

                {/* Document List */}
                <FlatList
                    data={filteredDocs}
                    keyExtractor={(item) => item.id}
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
                            <TouchableOpacity onPress={() => handleShare(item)}>
                                <Ionicons name="share-social-outline" size={24} color={Colors.blue_link} />
                            </TouchableOpacity>
                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.emptyText}>No documents found</Text>}
                />
            </View>
             <View style={styles.btnWrap}>
                <CommonButton
                    backgroundColor={Colors.black}
                    title="Add Document"
                    textStyle={styles.buttonText}
                    style={styles.button}
                    onPress={() => navigateScreen(Routes.AddTherapyDocument)}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

export default DocumentList;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", paddingTop: 0 },
    topSec: { flexDirection: 'row', alignItems: 'center', padding: 24 },
    topSecTitle: { fontSize: 16, fontFamily: Fonts.SemiBold, color: Colors.primary, width: '70%' },
    piperImg: { width: 120, height: 120 },
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
    btnWrap: {
        padding: 24,
        backgroundColor: Colors.bg
    },
    button: {
        backgroundColor: Colors.black
    },
    buttonText: {
        color: Colors.bg
    }
});
