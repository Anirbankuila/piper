import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors, Fonts } from "@/constants/theme";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const DocumentSuccess = () => {
    return (
        <ScrollView
            contentContainerStyle={Styles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            {/* Content */}
            <View style={Styles.content}>
                <View style={Styles.topWrap}>
                    <Image
                        source={require("../../../assets/icons/saveddoc.png")} // put your logo inside assets folder
                        style={Styles.topBg}
                        resizeMode="cover"
                    />
                    <Text style={Styles.title}>Document Saved!</Text>


                </View>
                <View style={Styles.btnWrap}>
                    <CommonButton
                        style={[Styles.btn, Styles.pastLogBtn]} // same width add
                        onPress={() => navigateScreen(Routes.homeTab)}
                        backgroundColor="#fff"
                        color="#000"
                        title="Document List"
                        textStyle={Styles.btnText}
                    />
                    <CommonButton
                        style={Styles.btn}
                        onPress={() => navigateScreen(Routes.uploadDoc)}
                        backgroundColor="#000"
                        color="#fff"
                        title="Done"
                        textStyle={Styles.btnText}
                    />
                </View>

            </View>
        </ScrollView>
    );
};
export default DocumentSuccess;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8DFF7',
        padding: 24,
    },
    title: {
        fontSize: 20,
        lineHeight: 28,
        fontFamily: Fonts.SemiBold,
        color: Colors.black,
        maxWidth: "100%",
        textAlign: 'center',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: Fonts.Medium,
        color: Colors.text,
    },
    content: {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 12,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#B3D1F2',
        width: '100%'
    },
    topWrap: {
        paddingTop: 15,
        textAlign: 'center',
        paddingHorizontal: 20
    },
    topBg: {
        width: 78,
        height: 78,
        marginHorizontal: 'auto',
        marginBottom: 10
    },
    btnWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10, // space between buttons
        padding: 12,
    },
    btn: {
        flex: 1, // equal width for both
    },
    pastLogBtn: {
        borderWidth: 1,
        borderColor: "#000",
    },
    btnText:{
        fontSize:14,
    }



});