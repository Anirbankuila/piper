import Routes, { navigateScreen } from "@/app/common/Routes";
import Divider from "@/app/components/HomePageDivider/Divider";
import PiperModal from "@/app/components/PiperModal/PiperModal";
import Searchbar from "@/app/components/Searchbar/Searchbar";
import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const UploadDoc = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={Styles.content}>
        {/* Top Section */}
        <View style={Styles.topSec}>
          <View style={Styles.topSecLeft}>
            <Searchbar
              onMicPress={() => setVisible(true)}
              containerStyle={Styles.docContainer}
              placeholderText="Search documents"
            />
            <PiperModal visible={visible} onClose={() => setVisible(false)} />
            <View style={Styles.headingRow}>
              <View style={Styles.chatTriangle} />
              <Text style={Styles.topSecHeading}>
                From Health reports to IEP&apos;s, if it matters, it belongs
                here!
              </Text>
            </View>
          </View>
          <View style={Styles.bgImage}>
            <Image
              source={require("../../../assets/images/documentBg.png")}
              style={Styles.topBg}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Logs List */}
        <View style={Styles.uploadSec}>
          <TouchableOpacity
            style={Styles.eachUpload}
            onPress={() => navigateScreen(Routes.documentScan)}
          >
            <Image
              source={require("../../../assets/icons/scan.png")}
              style={Styles.eachIcon}
              resizeMode="cover"
            />
            <Text style={Styles.uploadHeading}>Scan Document</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.eachUpload}>
            <Image
              source={require("../../../assets/icons/send.png")}
              style={Styles.eachIcon}
              resizeMode="cover"
            />
            <Text style={Styles.uploadHeading}>Upload Document</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.viewDocuments}>
          <Divider text={"View Uploaded Documents"} />
          <View style={Styles.viewDocumentsWrap}>
            <TouchableOpacity style={Styles.eachDoc}>
              <View style={Styles.eachDocIcon}>
                <Image
                  source={require("../../../assets/icons/finger-cricle.png")}
                  style={Styles.icon}
                  resizeMode="cover"
                />
              </View>
              <Text style={Styles.catTitle}>Medical</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.eachDoc}>
              <View style={Styles.eachDocIcon}>
                <Image
                  source={require("../../../assets/icons/briefcase.png")}
                  style={Styles.icon}
                  resizeMode="cover"
                />
              </View>
              <Text style={Styles.catTitle}>School</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.eachDoc}>
              <View style={Styles.eachDocIcon}>
                <Ionicons name="add" size={28} color="#000" />
              </View>
              <Text style={Styles.catTitle}>Add Category</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          imageStyle={{ borderRadius: 12 }}
          source={require("../../../assets/images/background.png")} // ✅ your background image
          style={Styles.background}
          resizeMode="cover" // or "contain", "stretch", "repeat", "center"
        >
          <View style={Styles.leftContent}>
            <Image
              source={require("../../../assets/images/athena.png")}
              style={Styles.athenaLogo}
              resizeMode="cover"
            />
            <Text style={Styles.adText}>
              For those who have an {"\n"}athenahealth account
            </Text>
            <TouchableOpacity style={Styles.addBtn}>
              <Text style={Styles.addBtnText}>Synch your records now!</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/images/adImg.png")}
            style={Styles.addPiper}
            resizeMode="cover"
          />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
export default UploadDoc;

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
  },
  content: {
    position: "relative",
  },
  topSec: {
    position: "relative",
    // marginTop: -15,
    width: "100%",
    backgroundColor: "#D2FFF6",
    zIndex: 9,
    // paddingBottom:100
  },
  topSecLeft: {
    padding: 24,
    zIndex: 9,
  },
  docContainer: {
    borderColor: Colors.strokeColor,
  },
  bgImage: {
    justifyContent: "flex-end",
    textAlign: "right",
    marginTop: -90,
  },
  topBg: {
    // position: "absolute",
    width: 260,
    marginLeft: "auto",
    height: 170,
    zIndex: 0,
    justifyContent: "flex-end",
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "71%",
    // keep the same left padding as topSecLeft if needed
  },

  /* small right-pointing triangle (looks like a chat tail) */
  chatTriangle: {
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderBottomWidth: 6,
    borderRadius: 8,
    borderLeftWidth: 18, // length of the triangle
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: Colors.bg, // triangle color (matches heading color)
    position: "absolute",
    right: -10,
    transform: [{ rotate: "20deg" }],
    bottom: -3,
  },

  topSecHeading: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontFamily: Fonts.SemiBold,
    color: Colors.primary,
    backgroundColor: Colors.bg,
    borderRadius: 12,
    width: "100%",
  },
  uploadSec: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 28,
    gap: 8,
  },
  eachUpload: {
    width: 160,
    height: 160,
    borderRadius: 10,
    backgroundColor: Colors.surface_bg,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  eachIcon: {
    width: 42,
    height: 42,
  },
  uploadHeading: {
    color: "#1E1E1E",
    fontSize: 14,
    fontFamily: Fonts.Medium,
    marginTop: 10,
  },
  viewDocuments: {
    position: "relative",
  },
  viewDocumentsWrap: {
    position: "relative",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 10,
  },
  eachDoc: {
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  eachDocIcon: {
    width: 52,
    height: 52,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.surface_bg,
    borderRadius: 26,
  },
  icon: {
    width: 28,
    height: 28,
  },
  catTitle: {
    fontSize: 12,
    fontFamily: Fonts.Medium,
    color: Colors.text,
    marginTop: 5,
  },
  background: {
    flex: 1,
    paddingHorizontal: 19,
    paddingVertical: 23,
    margin: 16,
    borderRadius: 12,
  },
  leftContent: {
    position: "relative",
  },
  athenaLogo: {
    width: 126,
    height: 14,
    marginBottom: 8,
  },
  adText: {
    fontSize: 14,
    fontFamily: Fonts.SemiBold,
    color: Colors.bg,
    lineHeight: 19,
  },
  addBtn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: Colors.bg,
    width: 140,
    marginTop: 10,
  },
  addBtnText: {
    fontSize: 10,
    fontFamily: Fonts.Medium,
    color: Colors.primary,
  },
  addPiper: {
    position: "absolute",
    width: 100,
    height: 132,
    right: 40,
    bottom: 0,
  },
});
