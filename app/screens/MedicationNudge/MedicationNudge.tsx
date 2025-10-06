import Routes, { navigateScreen } from "@/app/common/Routes";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import Header from "@/app/components/Header/Header";
import MyReport from "@/app/components/MyReport/MyReport";
import PgxReport from "@/app/components/PgxReport/PgxReport";
// import PGxReport from "@/app/components/PGxReport/PGxReport";
// import AskPiper from "@/app/components/AskPiper/AskPiper";
import { Colors, Fonts } from "@/constants/theme";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabs = [
    {
        name: "Home",
        iconPath: require("../../../assets/icons/home.png"),
        onTabPress: () => navigateScreen(Routes.homeTab),
    },
    {
        name: "LifeLog",
        iconPath: require("../../../assets/icons/booknew.png"),
        onTabPress: () => navigateScreen(Routes.lifeLogTab),
    },
    {
        name: "Piper",
        iconPath: require("../../../assets/icons/pipertabicon.png"),
        onTabPress: () => navigateScreen(Routes.lifeLogTab),
    },
    {
        name: "Calendar",
        iconPath: require("../../../assets/icons/calendartab.png"),
        onTabPress: () => navigateScreen(Routes.calendarTab),
    },
    {
        name: "Profile",
        iconPath: require("../../../assets/images/profile.png"),
        onTabPress: () => navigateScreen(Routes.profileTab),
    },
];

type TabType = "myReport" | "pgxReport" | "askPiper";

const MedicationNudge = () => {
    const insets = useSafeAreaInsets();
    const [activeTab, setActiveTab] = useState<TabType>("myReport");

    const renderContent = () => {
        switch (activeTab) {
            case "myReport":
                return <MyReport />;
            case "pgxReport":
                return <PgxReport />;
            case "askPiper":
                return <MyReport />;
            default:
                return null;
        }
    };

    // Top tab component (sticky)
    const TopTabs = () => (
        <View style={Styles.topTab}>
            <TouchableOpacity
                style={activeTab === "myReport" ? Styles.activeTab : Styles.inactiveTab}
                onPress={() => setActiveTab("myReport")}
            >
                <Image source={require("../../../assets/icons/document-text.png")} style={Styles.tabIcon} />
                <Text style={activeTab === "myReport" ? Styles.activeTabText : Styles.inactiveTabText}>
                    My Report
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={activeTab === "pgxReport" ? Styles.activeTab : Styles.inactiveTab}
                onPress={() => setActiveTab("pgxReport")}
            >
                <Image source={require("../../../assets/icons/note-2.png")} style={Styles.tabIcon} />
                <Text style={activeTab === "pgxReport" ? Styles.activeTabText : Styles.inactiveTabText}>
                    PGx Report
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={activeTab === "askPiper" ? Styles.activeTab : Styles.inactiveTab}
                onPress={() => setActiveTab("askPiper")}
            >
                <Image source={require("../../../assets/icons/askpiper.png")} style={Styles.tabIcon} />
                <Text style={activeTab === "askPiper" ? Styles.activeTabText : Styles.inactiveTabText}>
                    Ask Piper
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={[Styles.headerWrapper, { paddingTop: insets.top }]}>
                <Header backgroundColor="#fff" />
            </View>
            {/* Sticky top tabs */}
            <TopTabs />
            {/* Render content */}
            <View style={Styles.mainContent}>{renderContent()}</View>

            {/* Bottom Tab */}
            <CustomBottomTab activeTab="" tabs={tabs} />
        </View>
    );
};

export default MedicationNudge;

const Styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: "#fff",
    },
    topTab: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.strokeColor,
        backgroundColor: "#fff",
    },
    activeTab: {
        flexDirection: "column",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: Colors.blue_link,
        paddingBottom: 10,
    },
    inactiveTab: {
        flexDirection: "column",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: Colors.bg,
        paddingBottom: 6,
    },
    activeTabText: {
        fontSize: 10,
        fontFamily: Fonts.Medium,
        color: Colors.text,
    },
    inactiveTabText: {
        fontSize: 10,
        fontFamily: Fonts.Medium,
        color: Colors.textLight,
    },
    tabIcon: {
        width: 32,
        height: 32,
        marginBottom: 4,
    },
    mainContent: {
        flex: 1,
        // marginTop: 10,
    },
});
