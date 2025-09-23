import { router } from "expo-router"; // 👈 import router
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Styles from "./AllLogsCss";

const AllLogs = () => {
  const handleLogPress = (log: any) => {
    router.push({
      pathname: "/screens/LogSummary/LogSummary",
      params: {
        title: log.title,
        date: log.date,
        status: log.status,
      },
    });
  };

  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={Styles.content}>
        <View style={Styles.topSec}>
          <View style={Styles.topSecLeft}>
            <Text style={Styles.topSecHeading}>
              Real life, logged by you, {"\n"}remembered by me.
            </Text>
            <Text style={Styles.para}>
              Click any life log below to edit or {"\n"}share with your care team.
            </Text>
          </View>
          <Image
            source={require("../../../assets/images/topBg.png")}
            style={Styles.topBg}
            resizeMode="contain"
          />
        </View>

        <View style={Styles.logWrapper}>
          {/* Log 1 */}
          <TouchableOpacity
            style={Styles.eachLog}
            onPress={() =>
              handleLogPress({
                title: "Refused to take meds",
                date: "23 Sep 2025 • 09:23 AM",
                status: "Meltdown",
              })
            }
          >
            <View style={Styles.eachLogTop}>
              <View style={Styles.eachLogTopLeft}>
                <Text style={Styles.dateTime}>23 Sep 2025 • 09:23 AM</Text>
                <Text style={Styles.logTitle}>Refused to take meds</Text>
                <View style={Styles.logStatus}>
                  <View style={Styles.logStatusIndicator}></View>
                  <Text style={Styles.status}>Meltdown</Text>
                </View>
              </View>
              <View style={Styles.eachLogTopRight}>
                <Image
                  source={require("../../../assets/images/sadmode.png")}
                  style={Styles.mode}
                  resizeMode="contain"
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Log 2 */}
          <TouchableOpacity
            style={Styles.eachLog}
            onPress={() =>
              handleLogPress({
                title: "Self initiated play date",
                date: "23 Sep 2025 • 09:23 AM",
                status: "Social Win",
              })
            }
          >
            <View style={Styles.eachLogTop}>
              <View style={Styles.eachLogTopLeft}>
                <Text style={Styles.dateTime}>23 Sep 2025 • 09:23 AM</Text>
                <Text style={Styles.logTitle}>Self initiated play date</Text>
                <View style={Styles.logStatus}>
                  <View style={[Styles.logStatusIndicator, Styles.success]} />
                  <Text style={Styles.status}>Social Win</Text>
                </View>
              </View>
              <View style={Styles.eachLogTopRight}>
                <Image
                  source={require("../../../assets/images/play.png")}
                  style={Styles.mode}
                  resizeMode="contain"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AllLogs;
