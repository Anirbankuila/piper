import Routes, { navigateScreen } from "@/app/common/Routes";
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
  { id: "1", name: "Report Cards", date: "2023-01-01" },
  { id: "2", name: "IEP/School Testing", date: "2023-01-02" },
  { id: "3", name: "Neuropsychological Reports", date: "2023-01-03" },
  { id: "4", name: "Report Cards", date: "2023-01-04" },
  { id: "5", name: "IEP/School Testing", date: "2023-01-05" },
  { id: "6", name: "Neuropsychological Reports", date: "2023-01-06" },
  { id: "7", name: "Report Cards", date: "2023-01-07" },
  { id: "8", name: "IEP/School Testing", date: "2023-01-08" },
  { id: "9", name: "Neuropsychological Reports", date: "2023-01-09" },
];

const MyReport = () => {
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
      navigateScreen(Routes.shareSuccess);
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
        {/* Search Bar */}
        {/* Document List */}
        <FlatList
          data={filteredDocs}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <>
              <View style={styles.searchWrapper}>
                <Ionicons
                  name="search"
                  size={20}
                  color="#888"
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search Report"
                  value={searchText}
                  onChangeText={setSearchText}
                  placeholderTextColor={Colors.grey}
                />
              </View>
            </>
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
                  <Text style={styles.docDesc}>{item.date}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.buyBtn}>
                <Text style={styles.buyBtnText}>Buy</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No documents found</Text>
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MyReport;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 10 },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: Colors.surface_bg,
    marginHorizontal: 24,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, paddingVertical: 12, fontSize: 16, borderRadius: 10 },
  docItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 22,
    paddingLeft: 24, // left padding
    paddingRight: 24, // right padding
    borderBottomWidth: 1,
    borderBottomColor: Colors.strokeColor,
  },
  docItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // let it take available space
  },
  docItemContent: {
    marginLeft: 12,
    flexShrink: 1, // allows text to wrap if needed
  },

  docName: { fontSize: 14, fontFamily: Fonts.Bold, color: Colors.black },
  docDesc: {
    fontSize: 10,
    fontFamily: Fonts.Regular,
    color: Colors.textLight,
    marginTop: 3,
  },
  pdfIcon: { width: 24, height: 24 },
  buyBtn: {
    backgroundColor: Colors.black,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buyBtnText: {
    color: "#fff",
    fontFamily: Fonts.Medium,
    fontSize: 12,
  },
  emptyText: {
    color: "#fff",
    fontFamily: Fonts.Medium,
    fontSize: 12,
  },
});
