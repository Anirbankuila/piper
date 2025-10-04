import PiperModal from "@/app/components/PiperModal/PiperModal";
import PiperSearch from "@/app/components/PiperSearch/PiperSearch";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { FlatList, Image, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Styles from "./TalkToDoctorCss";
import { Colors, Fonts } from "@/constants/theme";
import moment from "moment";

interface ChatMessage {
  id: string;
  message: string;
  time: string;
  sender: "user" | "piper";
  type?: "text" | "list";
  heading?: string;
  listItems?: string[];
}

const chats: ChatMessage[] = [
  { id: "1", message: "There’s a lot of information in these docs, is there anything serious I need to know about?", time: "09:00 AM", sender: "user" },
  {
    id: "2",
    sender: "piper",
    type: "list",
    heading: "Hi, Renee!",

    time: "09:05 AM",
    message: "There sure is a lot in these records! I’ve scrubbed through it all for you and the one thing I noticed is it looks like Johnny’s blood pressure has been steadily increasing over the last two weeks, would you like me to send a summary about this to Dr. Karnik?"
  },

];

const TalkToDoctor = () => {
  const [visible, setVisible] = useState(false);
  const [feedback, setFeedback] = useState<{ [key: string]: "like" | "dislike" | null }>({});
  const flatListRef = useRef<FlatList<ChatMessage>>(null);

  const dummyDocs = [
    { id: "1", name: "Report Cards", desc: "This document contains school info.", uri: "https://example.com/report.pdf" },
    { id: "2", name: "IEP/School Testing", desc: "This document contains school info.", uri: "https://example.com/iep.pdf" },
    { id: "3", name: "Neuropsychological Reports", desc: "This document contains school info.", uri: "https://example.com/neuro.pdf" },
  ];
  const handleShare = async (doc: any) => {
    try {
      await Share.share({
        message: `📄 ${doc.name}\n${doc.uri}`,
      });

      // Navigate to Success Screen after sharing
      // navigateScreen(Routes.shareSuccess)
    } catch (error) {
      console.log("Error sharing document:", error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        ref={flatListRef}
        data={chats}
        keyExtractor={(item) => item.id}
        contentContainerStyle={Styles.chatHistoryWrap}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={Styles.topSec}>
            <View style={Styles.topSecLeft}>
              <Text style={Styles.topSecHeading}>
                Uploading is {"\n"}just the start.
              </Text>
              <Text style={Styles.para}>
                Tell me what you’re wondering about, {"\n"}and I’ll help translate or simplify it.
              </Text>
            </View>
            <Image
              source={require("../../../assets/images/docbg.png")}
              style={Styles.topBg}
              resizeMode="contain"
            />
          </View>
        }
        renderItem={({ item }) => {
          const isPiper = item.sender === "piper";
          const today = moment().format("DD MMM YYYY");
          return (
            <View style={{ marginHorizontal: 24, marginVertical: 8 }}>
              <Text style={Styles.chatDate}>{today}</Text>
              {/* <Text style={Styles.chatTime}>{item.time}</Text> */}
              <View style={[Styles.chatBubble, isPiper ? Styles.piperBubble : Styles.userBubble]}>
                {item.type === "list" ? (
                  <>
                    {item.heading && <Text style={Styles.listHeading}>{item.heading}</Text>}
                    {item.message && <Text style={Styles.message}>{item.message}</Text>}
                    {/* {item.listItems?.map((li, index) => (
                      <Text key={index} style={Styles.listItem}>• {li}</Text>
                    ))} */}
                  </>
                ) : (
                  <Text style={[Styles.chatText, isPiper ? Styles.piperChat : Styles.userChat]}>
                    {item.message}
                  </Text>
                )}

                {/* Feedback only for Piper messages */}
                {isPiper && (
                  <View style={Styles.feedbackWrap}>
                    <TouchableOpacity onPress={() => handleShare(item)}>
                      <Ionicons name="share-social-outline" size={24} color={Colors.blue_link} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>

            </View>
          );
        }}
        ListFooterComponent={
          <View style={Styles.relatedItems}>
            <Text style={[Styles.relatedHeading]}>Related Documents</Text>
            {dummyDocs.map((doc) => (
              <View key={doc.id} style={Styles.docItem}>
                <View style={Styles.docItemLeft}>
                  <Image
                    source={require("../../../assets/icons/pdf.png")}
                    style={Styles.pdfIcon}
                    resizeMode="contain"
                  />
                  <View style={Styles.docItemContent}>
                    <Text style={Styles.docName}>{doc.name}</Text>
                    <Text style={Styles.docDesc}>{doc.desc}</Text>
                  </View>
                </View>

              </View>
            ))}
          </View>
        }
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      {/* Fixed search/mic input */}
      <View style={Styles.chatSearchWrap}>
        <PiperSearch onMicPress={() => setVisible(true)} />
        <PiperModal visible={visible} onClose={() => setVisible(false)} />
      </View>
    </View>
  );
};

export default TalkToDoctor;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg
  },
  content: {
    position: 'relative',
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  topSec: {
    position: 'relative',
    marginTop: -15,
    width: '100%',
    backgroundColor: '#d2fff6ff',
    zIndex: 9
  },
  topSecLeft: {
    position: 'relative',
    padding: 24,
    // width: 250,
    zIndex: 9
  },
  topBg: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    height: 170,
    zIndex: 0
  },
  topSecHeading: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: Colors.primary
  },
  para: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: Colors.text,
    marginTop: 5
  },
  chatHistoryWrap: {
    backgroundColor: Colors.bg,
    // paddingTop: 24,
    // paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.strokeColor,
    paddingBottom: 100,
  },
  chatList: {
    flex: 1,
  },
  chatDate:{
    fontSize: 12,
    color: Colors.text,
    paddingVertical:4,
    paddingHorizontal:16,
    backgroundColor: Colors.surface_bg,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: "center",
  },
  chatBubble: {
    maxWidth: "75%",
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 4,
  },
  userBubble: {
    backgroundColor: Colors.blue_link, // WhatsApp green
    alignSelf: "flex-end",

  },
  piperBubble: {
    alignSelf: "flex-start",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#E5E7EB",

  },
  chatText: {
    fontSize: 12,
    color: Colors.text,
    fontFamily: Fonts.Medium
  },
  message: {
    fontSize: 12,
    color: Colors.text,
    fontFamily: Fonts.Medium
  },
  userChat: {
    color: '#fff',
  },
  piperChat: {

    color: Colors.text,
    fontFamily: Fonts.Medium
  },
  chatTime: {
    fontSize: 11,
    color: "#555",
    marginTop: 4,
    alignSelf: "flex-end",
  },
  chatSearchWrap: {
    // position: "absolute",
    width: "100%",
    right: 0,
    bottom: 0,
    zIndex: 9,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.bg,
  },
  listHeading: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: Colors.text,
    marginBottom: 8
  },
  listItem: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: Colors.text
  },
  feedbackWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 8
  },
  feedbackText: {
    width: 16,
    height: 16,
    marginLeft: 12
  },
  feedbackSelected: {
    position: 'relative'
  },
  relatedItems: {
    position: 'relative'
  },
  relatedHeading: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: Colors.black,
    marginHorizontal: 24
  },
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
});
