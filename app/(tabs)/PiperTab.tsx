import { Colors, Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Routes, { navigateScreen } from "../common/Routes";
import Header from "../components/Header/Header";
import PiperModal from "../components/PiperModal/PiperModal";
import PiperSearch from "../components/PiperSearch/PiperSearch";

const PiperTab = () => {
  const [visible, setVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const chats = [
    "Just a heads up, your next IEP meeting is in 3 days. Want to review your notes together?",
    "Based on your Life Log entries, we might want to track sleep a little closer. Want to set that up?",
    "You mentioned meltdowns last week. I’ve pulled a few tips to try, ready when you are.",
  ];
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle="dark-content" // text/icons will be dark (black/gray)
        backgroundColor="#FFF3E9" // same as your top background
      />
      <View
        style={{
          paddingTop: insets.top - 10,
          backgroundColor: Colors.surface_bg,
        }}
      >
        <Header backgroundColor={Colors.surface_bg} />
      </View>
      <View style={styles.chatHistory}>
        <TouchableOpacity onPress={() => navigateScreen(Routes.chatHistory)}>
          <Text style={styles.chatHistoryTitle}>Chat History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chartTop}>
        <Image
          source={require("../../assets/images/piper.png")} // put your logo inside assets folder
          style={styles.piperImg}
          resizeMode="cover"
        />
        <View style={styles.chatDirect}>
          <Text style={styles.chartTitle}>
            I have gathered this from Johnny’s {"\n"}info and life log, hope
            this helps !
          </Text>
          <Text style={styles.chatLink}>
            Click on any you&apos;d like my help with!
          </Text>
          <View style={styles.chartSuggestion}>
            {chats.map((chat, index) => (
              <LinearGradient
                key={index}
                colors={["#E100FF", "#007AFF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientBorder}
              >
                <View style={styles.innerBox}>
                  <TouchableOpacity style={styles.eachChat}>
                    <Text style={{ color: "#000" }}>{chat}</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.chatSearchWrap}>
        <PiperSearch onMicPress={() => setVisible(true)} />
        <PiperModal visible={visible} onClose={() => setVisible(false)} />
      </View>
    </ScrollView>
  );
};

export default PiperTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface_bg,
  },
  chatHistory: {
    position: "relative",
    textAlign: "right",
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.strokeColor,
  },
  chatHistoryTitle: {
    textAlign: "right",
  },
  chartTop: {
    position: "relative",
    textAlign: "center",
    paddingHorizontal: 24,
    flex: 1,
  },
  piperImg: {
    width: 133,
    height: 133,
    marginHorizontal: "auto",
  },
  chatDirect: {
    position: "relative",
  },
  chartTitle: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: "#141514",
    textAlign: "center",
  },
  chatLink: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    fontStyle: "italic",
    color: Colors.blue_link,
    textAlign: "center",
  },
  chartSuggestion: {
    paddingTop: 24,
  },
  eachChat: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  gradientBorder: {
    padding: 1, // border thickness
    borderRadius: 8,
    marginBottom: 4,
  },
  innerBox: {
    backgroundColor: "#fff", // inside background
    borderRadius: 8,
  },
  chatSearchWrap: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
});
