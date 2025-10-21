import { primaryTabs } from "@/app/common/primaryTabs";
import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import { Colors } from "@/constants/theme";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Styles from "./AllLogsCss";

const logs = [
  {
    id: 1,
    title: "Refused to take meds",
    date: "23 Sep 2025 • 09:23 AM",
    status: "Meltdown",
    statusStyle: Styles.logStatusIndicator, // default indicator
    savedTo: "Medical Summary",
    icon: require("../../../assets/images/sadmode.png"),
  },
  {
    id: 2,
    title: "Self initiated play date",
    date: "23 Sep 2025 • 09:23 AM",
    status: "Social Win",
    statusStyle: [Styles.logStatusIndicator, Styles.success], // green success
    savedTo: "Education Summary",
    icon: require("../../../assets/images/play.png"),
  },
  // ✅ future logs just add here
];

const AllLogs = () => {
  const handleLogPress = (log: any) => {
    navigateScreen({
      pathname: `/${Routes.logsSummary}`,
      params: {
        id: log.id, // must pass id here
        title: log.title,
        date: log.date,
        status: log.status,
      },
    });
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={Styles.content}>
          <View style={Styles.topSec}>
            <View style={Styles.topSecLeft}>
              <Text style={Styles.topSecHeading}>
                Real life, logged by you, remembered by me.
              </Text>
              <Text style={Styles.para}>
                Click any life log below to edit or share with your care
                team.
              </Text>
            </View>
            <Image
              source={require("../../../assets/images/alllogimg.png")}
              style={Styles.topBg}
              resizeMode="contain"
            />
          </View>

          {/* Logs List */}
          <View style={Styles.logWrapper}>
            {logs.map((log) => (
              <TouchableOpacity
                key={log.id}
                style={Styles.eachLog}
                onPress={() => handleLogPress(log)}
              >
                <View style={Styles.eachLogTop}>
                  <View style={Styles.eachLogTopLeft}>
                    <Text style={Styles.dateTime}>{log.date}</Text>
                    <Text style={Styles.logTitle}>{log.title}</Text>
                    <View style={Styles.logStatus}>
                      <View style={log.statusStyle} />
                      <Text style={Styles.status}>{log.status}</Text>
                    </View>
                  </View>
                  <View style={Styles.eachLogTopRight}>
                    <Image
                      source={log.icon}
                      style={Styles.mode}
                      resizeMode="contain"
                    />
                  </View>
                </View>

                <View style={Styles.eachLogTop}>
                  <Text style={Styles.shareTitle}>Saved to {log.savedTo}</Text>
                  <View style={Styles.shareBtn}>
                    <Image
                      source={require("../../../assets/icons/share.png")}
                      style={[Styles.modeShare, { tintColor: Colors.primary }]}
                      resizeMode="contain"
                    />
                    <Text style={Styles.shareText}>Share</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <CommonButton
          onPress={() => {
            navigateScreen(Routes.lifeLogTab);
          }}
          title="Add Log"
          backgroundColor={Colors.black}
          style={{ marginHorizontal: 20 }}
          textStyle={{ color: Colors.bg }}
        />
      </ScrollView>
      <CustomBottomTab activeTab="LifeLog" tabs={primaryTabs} />
    </>
  );
};

export default AllLogs;
