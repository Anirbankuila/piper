import { Colors, Fonts } from "@/constants/theme";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PiperModal from "../PiperModal/PiperModal";
import PiperSearch from "../PiperSearch/PiperSearch";

const AskPiper = () => {
  const [visible, setVisible] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: Colors.surface_bg }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      {/* dismiss keyboard on outside tap */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <StatusBar barStyle="dark-content" backgroundColor="#FFF3E9" />

            {/* Top Section */}
            <View style={styles.chartTop}>
              <Image
                source={require("../../../assets/images/alexa-2.png")}
                style={styles.piperImg}
                resizeMode="cover"
              />
              <View style={styles.chatDirect}>
                <Text style={styles.chartTitle}>
                  I can help you understand the {"\n"}genetic test in plain
                  language, ask {"\n"}me a question here!
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* Input Section — stays above keyboard */}
          <View
            style={[
              styles.chatSearchWrap,
              { marginBottom: Platform.OS === "ios" ? insets.bottom : 0 },
            ]}
          >
            <PiperSearch onMicPress={() => setVisible(true)} />
            <PiperModal visible={visible} onClose={() => setVisible(false)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AskPiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface_bg,
  },
  chartTop: {
    position: "relative",
    textAlign: "center",
    paddingHorizontal: 24,
    flex: 1,
  },
  piperImg: {
    width: 134,
    height: 134,
    alignSelf: "center",
    borderRadius: 67,
    shadowColor: "#6A1BE2",
    shadowOffset: { width: 0, height: -0.63 },
    shadowOpacity: 0.3, // 30%
    shadowRadius: 15,
    // Android Shadow
    elevation: 10,
    marginVertical:15
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
  chatSearchWrap: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: Colors.surface_bg,
  },
});
