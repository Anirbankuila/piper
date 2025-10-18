import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Checkbox } from 'react-native-paper';
import { Row, Rows, Table } from 'react-native-table-component';
const MedicalReport = () => {
    const tableHead = ['Goal Area', 'Previous Goal', 'Outcome', 'Comments'];
    const tableTitle = ['Title', 'Title2', 'Title3', 'Title4'];
    const tableData = [
        ['Reading Comprehension', 'Achieve 80% accuracy on 2nd-grade text', '75%', 'Significant progress'],
        ['Math Problem Solving', 'Solve 3-step word problems ', '65%', 'Requires visual scaffolds'],
        ['Social Skills', 'Initiate peer conversation 1x/day', '4/5 Days', 'Teacher reports improved group participation'],
        ['Self-Regulation', '≤1 meltdown per week', 'Avg. 1.2/week', 'Improved with noise-canceling headphones'],
    ];

    const therapyHead = ['Service', 'Frequency', 'Provider'];
    const therapyData = [
        ['Speech Therapy', '2x/week, 30 min', 'Ms. S'],
        ['Occupational Therapy', '1x/week, 45 min', 'Mr. A'],
        ['Special Education Support', '5x/week (resource room), 45 min', 'Mr. A'],
        ['Counseling/CBT', '2x/month', 'Mr. A'],
    ];
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

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor={Colors.bg}
            />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <Text style={styles.profileName}>Annual IEP {'\n'}Review Report</Text>
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={require("../../../assets/images/profileimg.png")}
                            style={styles.profileImage}
                            contentFit="contain"
                        />
                    </View>

                </View>
                <View style={styles.summaryWrapper}>
                    <View style={styles.eachSummary}>
                        <Text style={styles.summaryTitle}>Student Information</Text>

                        <View style={styles.row}>
                            <Text style={styles.label}>Name: </Text>
                            <Text style={styles.value}>Johhny</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Age / Grade: </Text>
                            <Text style={styles.value}>8 years / Grade 3</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>School Year: </Text>
                            <Text style={styles.value}>2024–2025</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Primary Eligibility: </Text>
                            <Text style={styles.value}>Autism Spectrum Disorder (ASD)</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Secondary Eligibility: </Text>
                            <Text style={styles.value}>ADHD – Combined Type</Text>
                        </View>

                    </View>
                    <View style={styles.eachSummary}>
                        <Text style={styles.summaryTitle}>Student Information</Text>

                        <View style={styles.row}>
                            <Text style={styles.label}>Date of Meeting: </Text>
                            <Text style={styles.value}>15 Sep 2025</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Team Members Present:</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Parent(s):</Text>
                            <Text style={styles.value}>Mr. & Mrs. K</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Class Teacher:</Text>
                            <Text style={styles.value}>Ms. T</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Special Educator: </Text>
                            <Text style={styles.value}>Mr. R</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Speech Therapist: </Text>
                            <Text style={styles.value}>Ms. S</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Occupational Therapist: </Text>
                            <Text style={styles.value}>Mr. A</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>School Psychologist: </Text>
                            <Text style={styles.value}>Dr. N</Text>
                        </View>

                    </View>
                    <View style={styles.eachSummary}>
                        <Text style={styles.summaryTitle}>Summary of Progress Since Last Review</Text>
                        <Table borderStyle={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderColor: Colors.strokeColor,
                        }}>
                            <Row data={tableHead} style={styles.head} textStyle={styles.headerText} />
                            <Rows data={tableData} style={styles.tableRow} textStyle={styles.text} />
                        </Table>

                    </View>
                    <View style={styles.eachSummary}>
                        <Text style={styles.summaryTitle}>Therapy & Service Recommendations</Text>
                        <Table borderStyle={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderColor: Colors.strokeColor,
                        }}>
                            <Row data={therapyHead} style={styles.head} textStyle={styles.headerText} />
                            <Rows data={therapyData} style={styles.tableRow} textStyle={styles.text} />
                        </Table>

                    </View>
                    <View style={styles.eachSummary}>
                        <Text style={styles.summaryTitle}>Parent & Teacher Observations</Text>
                        <View style={styles.parentRow}>
                            <Text style={styles.value}>Parent Feedback</Text>
                            <Text style={styles.label}>Happy with progress, requests continued focus on reading fluency and social playdates.</Text>
                        </View>
                        <View style={styles.parentRow}>
                            <Text style={styles.value}>Teacher Feedback</Text>
                            <Text style={styles.label}>Reports better classroom participation, but still needs redirection during group work.</Text>
                        </View>
                    </View>
                    <View style={styles.eachSummary}>
                        <Text style={styles.summaryTitle}>Plan for Next 12 Months</Text>
                        {[
                            'Mid-year review in Feb 2026',
                            'Quarterly progress reports shared with parents',
                            'Collaborative home-school communication log for behavior and homework',
                        ].map((item, index) => (
                            <View style={styles.eachSummaryListWrap} key={index}>
                                <View style={styles.dot}></View>
                                <Text key={index} style={styles.label}>
                                    {item}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.eachSummary}>
                        <Text style={styles.summaryTitle}>Plan for Next 12 Months</Text>
                        {[
                            'IEP reviewed and updated',
                            'Goals revised collaboratively',
                            'Parent consent obtained',
                        ].map((item, index) => (
                            <View key={index} style={styles.checkboxRow}>
                                <Checkbox status="checked" />
                                <Text style={styles.label}>{item}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.bottomButton}>
                        <CommonButton
                            onPress={() => navigateScreen(Routes.reportShareSuccess)}
                            backgroundColor="#000"
                            color="#fff"
                            title="Share "
                        />
                    </View>
                </View>
            </ScrollView>
            <CustomBottomTab activeTab="" tabs={tabs} />
        </>
    );
};

export default MedicalReport;


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.bg,
    },

    content: {
        flex: 1,
        backgroundColor: Colors.bg,
    },
    profileSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    profileImageContainer: {
        marginBottom: 0,
    },
    profileNameContainer: {
        textAlign: "center",
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    profileImageText: {
        fontSize: 24,
        color: Colors.text,
        fontFamily: Fonts.Bold,
    },
    profileName: {
        fontSize: 20,
        fontFamily: Fonts.SemiBold,
        color: "#000",
    },
    summaryWrapper: {
        backgroundColor: Colors.surface_light_pitch
    },
    eachSummary: {
        position: 'relative',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.strokeColor
    },
    summaryTitle: {
        fontSize: 14,
        color: Colors.blue_link,
        fontFamily: Fonts.SemiBold,
        paddingBottom: 14
    },
    row: {
        flexDirection: 'row',
        fontSize: 10,
        marginBottom: 3,
    },
    label: {
        fontSize: 12,
        color: Colors.black,
        fontFamily: Fonts.Regular
    },
    value: {
        fontSize: 12,
        fontFamily: Fonts.Bold,
        color: Colors.black,
    },
    tableRow: {
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: Colors.strokeColor,
        paddingBottom: 5,
        paddingTop: 5
    },
    tableHeader: {
        backgroundColor: "transparent",
    },
    headerText: {
        fontSize: 10,
        fontFamily: Fonts.Bold
    },
    text: {
        fontSize: 10,
        color: Colors.black,
        fontFamily: Fonts.Regular
    },
    head: { height: 40, },
    parentRow: {
        flexDirection: 'column',

    },
    eachSummaryListWrap: {
        flexDirection: 'row',
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: Colors.black,
        marginRight: 5,
        marginTop: 8
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomButton: {
        flexDirection: 'column',
        // marginTop: 40,
        padding: 24
    },

})
