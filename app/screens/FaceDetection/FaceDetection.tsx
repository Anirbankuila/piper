import Routes, { navigateScreen } from "@/app/common/Routes";
import { Colors, Fonts } from "@/constants/theme";
import { useCameraPermissions } from "expo-camera";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonButton from "../../components/CommonButton/CommonButton";

const FaceDetection: React.FC = () => {
    const navigation = useNavigation();
    const [showBack, setShowBack] = useState(true);
    const [permission, requestPermission] = useCameraPermissions();

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        setShowBack(scrollY < 250);
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerBackVisible: showBack,
        });
    }, [navigation, showBack]);

    const handleEnable = async () => {
        const res = await requestPermission();
        if (res.granted) {
            navigateScreen(Routes.faceDetectionFrame); // 👉 navigate to camera frame screen
        } else {
            alert("Camera permission not granted!");
        }
    };

    return (
        <SafeAreaView style={Styles.safeArea}>
            <StatusBar style="auto" backgroundColor="transparent" />
            <ScrollView
                contentContainerStyle={Styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <View style={Styles.content}>
                    <View style={Styles.imageBottomContainer}>
                        <Image
                            source={require("../../../assets/images/faceImg.png")}
                            style={Styles.alexPersonalImg}
                        />
                    </View>
                    <Text style={Styles.title}>
                        Enable Face ID for {"\n"}extra security
                    </Text>
                </View>
            </ScrollView>

            <View style={Styles.fixedBottomButton}>
                <View style={Styles.bottomButtonInner}>
                    <CommonButton
                        title="Maybe Later"
                        textStyle={Styles.signButtonText}
                        style={Styles.signBtn}
                        backgroundColor="#fff"
                        color="#000"
                        onPress={() => navigateScreen(Routes.logIn)}
                    />
                    <View style={{ width: 12 }} />
                    <CommonButton
                        title="Enable"
                        textStyle={Styles.buttonText}
                        style={Styles.button}
                        onPress={handleEnable}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FaceDetection;

const Styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.bg,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingBottom: 120,
    },
    content: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: Fonts.Bold,
        color: Colors.main_purple,
        marginTop: 25,
        textAlign: "center",
    },
    imageBottomContainer: {
        alignItems: "center",
        justifyContent: "flex-end",
        width: 104,
        height: 104,
        borderRadius: 52,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: "#01BA38",
    },
    alexPersonalImg: {
        width: 104,
        height: 104,
        resizeMode: "cover",
    },
    fixedBottomButton: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.bg,
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    bottomButtonInner: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: Colors.black,
        flex: 1,
    },
    signBtn: {
        backgroundColor: Colors.bg,
        borderWidth: 1,
        borderColor: Colors.black,
        flex: 1,
    },
    buttonText: {
        color: Colors.surface,
    },
    signButtonText: {
        color: Colors.black,
    },
});
