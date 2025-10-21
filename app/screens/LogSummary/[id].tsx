import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import MoodChart from "@/app/components/ModeChart/ModeChart";
import { Colors } from "@/constants/theme";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Styles from "./LogSummaryCss"; // 👈 external css import
const logs = [
  {
    id: "1",
    title: "Refused to take meds",
    date: "23 Sep 2025 • 09:23 AM",
    status: "Meltdown",
    savedTo: "Medical Summary",
    icon: require("../../../assets/images/sadmode.png"),
  },
  {
    id: "2",
    title: "Self initiated play date",
    date: "23 Sep 2025 • 09:23 AM",
    status: "Social Win",
    savedTo: "Education Summary",
    icon: require("../../../assets/images/play.png"),
  },
];

export default function LogDetails() {
  const { id, title } = useLocalSearchParams();
  const log = logs.find((item) => item.id === id);
  const navigation = useNavigation();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Selected image:", result.assets[0].uri);
      // Upload or use the image here
    }
  };
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "videos",
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Selected video:", result.assets[0].uri);
      // Upload or use the video here
    }
  };

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title });
    }
  }, [title]);

  if (!log) {
    return (
      <View style={Styles.container}>
        <Text>Log not found!</Text>
      </View>
    );
  }

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
              Morning meds didn’t go as planned.
            </Text>
            <Text style={Styles.para}>
              That sounds like a hard start to the day. I’ve got it
              logged.
            </Text>
          </View>
          <Image
            source={require("../../../assets/images/logsummarybg.png")}
            style={Styles.topBg}
            resizeMode="contain"
          />
        </View>
        <View style={Styles.logsSummaryWrap}>
          <View style={Styles.logsSummary}>
            <Text style={Styles.summaryTitle}>Log Summary</Text>
            <Text style={Styles.summaryDesc}>
              You shared that Johnny refused to take his medication this
              morning. It took multiple reminders, and even then, they stayed
              upset for the rest of the morning. You tried to stay calm, but it
              left you both frustrated and late to school.
            </Text>
          </View>
          <View style={Styles.modeWrap}>
            <Image
              source={require("../../../assets/images/Emoji.png")}
              style={Styles.modeImg}
              resizeMode="contain"
            />
            <Text style={Styles.modeTitle}>Sounds like a tough moment!</Text>
          </View>
        </View>
        <MoodChart />
        <View style={Styles.addWrap}>
          <View style={Styles.addItem}>
            <TouchableOpacity style={Styles.eachItem} onPress={pickImage}>
              <Image
                source={require("../../../assets/icons/gallery.png")} // put your logo inside assets folder
                style={[Styles.icon, { tintColor: Colors.primary }]}
                resizeMode="cover"
              />
              <Text style={Styles.eachItemTitle}>Add Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.eachItem} onPress={pickVideo}>
              <Image
                source={require("../../../assets/icons/camera.png")} // put your logo inside assets folder
                style={Styles.icon}
                resizeMode="cover"
              />
              <Text style={Styles.eachItemTitle}>Add Video</Text>
            </TouchableOpacity>
          </View>
          <CommonButton
            onPress={() => navigateScreen(Routes.momentLog)}
            backgroundColor="#000"
            color="#fff"
            title="Edit Entry"
          />
        </View>
      </View>
    </ScrollView>
  );
}
