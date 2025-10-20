import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors, Fonts } from "@/constants/theme";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ShareSuccess = () => {
    return (
        <ScrollView
            contentContainerStyle={Styles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            {/* Content */}
            <View style={Styles.content}>
                <View style={Styles.topWrap}>
                    <Text style={Styles.title}>Document Shared!</Text>
                    <Image
                        source={require("../../../assets/images/saveimg.png")} // put your logo inside assets folder
                        style={Styles.topBg}
                        resizeMode="cover"
                    />

                </View>
                <View style={Styles.btnWrap}>
                    <CommonButton
                        style={Styles.btn}
                        onPress={() => navigateScreen(Routes.uploadDoc)}
                        backgroundColor={Colors.primary}
                        color="#fff"
                        title="Done"
                        textStyle={Styles.btnText}
                    />
                </View>
            </View>
            {/* <View style={Styles.piperStar}>
                <Image
                    source={require("../../../assets/images/PiperStar.png")} // put your logo inside assets folder
                    style={Styles.piperStarImg}
                    resizeMode="cover"
                />
            </View> */}
        </ScrollView>
    );
};
export default ShareSuccess;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.warm,
        padding: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: Fonts.SemiBold,
        color: Colors.primary,
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
        borderColor: '#F1ECF8',
        width: '100%',
        paddingTop: 20
    },
    topWrap: {
        paddingTop: 15,
        textAlign: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#F1ECF8",
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
    btnText: {
        fontSize: 14,
    },
    topBg: {
        marginTop: 0,
        width: '100%',
        height: 200
    },
    piperStar: {
        position: 'absolute',
        bottom: 50,
        left: 40
    },
    piperStarImg: {
        width: 120,
        height: 120
    }



});