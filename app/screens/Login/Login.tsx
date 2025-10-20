import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import CustomRBSheet, { CustomRBSheetRef } from "@/app/components/CustomBottomSheet/CustomRBSheet";
import { Colors, Fonts } from "@/constants/theme";
import { ImageBackground } from "expo-image";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import CommonButton from "../../components/CommonButton/CommonButton";

type ChildForm = {
    id: number;
    name: string;
    dob: Date;
    gender: string;
    diagnosis: string[];
    superpower?: string;
    imageUri?: string;
};

const Login: React.FC = () => {
    const navigation = useNavigation();
    const [showBack, setShowBack] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        // hide back button after scrolling past image (e.g., 300px)
        setShowBack(scrollY < 250);
    };

    // Dynamically update headerBackVisible
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerBackVisible: showBack,
        });
    }, [navigation, showBack]);
    const forgotSheetRef = useRef<CustomRBSheetRef>(null);

    const openForgotSheet = () => {
        forgotSheetRef.current?.open();
    };

    return (
        <ScrollView
            contentContainerStyle={[Styles.container]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        >
            <StatusBar style="auto" backgroundColor="transparent" />
            <ImageBackground
                source={require("../../../assets/images/loginBg.png")}
                style={Styles.piperIntroContainer}
                contentFit="cover"
                imageStyle={Styles.bgImageStyle}
            >
                <View style={Styles.textAndImageWrapper}>
                    <Text style={Styles.title}>Welcome to {"\n"}Piper App</Text>

                    {/* 👇 Move image to the bottom */}
                    <View style={Styles.imageBottomContainer}>
                        <Image
                            source={require("../../../assets/images/loginPiper.png")}
                            style={Styles.alexPersonalImg}
                        />
                    </View>
                </View>
            </ImageBackground>

            {/* Content */}
            <View style={Styles.content}>
                <View style={Styles.formWrap}>
                    <CommonInput
                        placeholder="Email"
                        onChangeText={(text) => console.log(text)}
                        keyboardType="email-address"
                    />
                    <CommonInput
                        placeholder="Mobile Phone"
                        onChangeText={(text) => console.log(text)}
                        keyboardType="phone-pad"
                    />
                    <View style={Styles.passwordWrapper}>
                        <CommonInput
                            placeholder="Password"
                            secureTextEntry={!showPassword} // ✅ toggle visibility
                            onChangeText={(text) => console.log(text)}
                        />
                        <TouchableOpacity
                            style={Styles.iconWrapper}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeSlashIcon size={20} color={Colors.primary} />
                            ) : (
                                <EyeIcon size={20} color={Colors.primary} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={Styles.link}
                        onPress={openForgotSheet} // open the sheet
                    >
                        Forgot password?
                    </Text>

                </View>
                <Text style={Styles.orText}>Or</Text>
                <TouchableOpacity style={Styles.faceIdBtn} onPress={() => navigateScreen(Routes.faceDetection)}>
                    <Text style={Styles.faceText}>Use Face ID</Text>
                </TouchableOpacity>

            </View>
            <View style={Styles.bottomButton}>
                <CommonButton
                    title="Log In"
                    textStyle={Styles.buttonText}
                    style={Styles.button}
                    onPress={() => navigateScreen(Routes.homeTab)}
                />
                <CommonButton
                    title="Sign Up"
                    textStyle={Styles.signButtonText}
                    style={Styles.signBtn}
                    backgroundColor="#fff"
                    color="#000"
                    onPress={() => navigateScreen(Routes.profile)}
                />
            </View>
            <CustomRBSheet ref={forgotSheetRef} title="Reset Password">
                <View style={{ padding: 10 }}>
                    <Text style={{ fontFamily: Fonts.Medium, fontSize: 14, marginBottom: 12 }}>
                        Enter your phone number and set a new password
                    </Text>

                    {/* Phone */}
                    <CommonInput
                        placeholder="Phone"
                        keyboardType="phone-pad"
                        onChangeText={(text) => console.log("Phone:", text)}
                    />

                    {/* New Password */}
                    <View style={Styles.passwordWrapper}>
                        <CommonInput
                            placeholder="Password"
                            secureTextEntry={!showPassword} // ✅ toggle visibility
                            onChangeText={(text) => console.log(text)}
                        />
                        <TouchableOpacity
                            style={Styles.iconWrapper}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeSlashIcon size={20} color={Colors.primary} />
                            ) : (
                                <EyeIcon size={20} color={Colors.primary} />
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* Confirm Password */}
                    <View style={Styles.passwordWrapper}>
                        <CommonInput
                            placeholder="Password"
                            secureTextEntry={!showConfirmPassword} // ✅ toggle visibility
                            onChangeText={(text) => console.log(text)}
                        />
                        <TouchableOpacity
                            style={Styles.iconWrapper}
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? (
                                <EyeSlashIcon size={20} color={Colors.primary} />
                            ) : (
                                <EyeIcon size={20} color={Colors.primary} />
                            )}
                        </TouchableOpacity>
                    </View>


                    <CommonButton
                        title="Reset Password"
                        textStyle={Styles.buttonText}
                        style={Styles.button}
                        backgroundColor="#fff"
                        color="#000"
                        onPress={() => {
                            forgotSheetRef.current?.close();
                            console.log("Password reset submitted");
                            // Optional: show a snackbar or popup
                        }}
                    />
                </View>
            </CustomRBSheet>


        </ScrollView>
    );
};

export default Login;

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.bg,
        // padding: 24,
    },
    piperIntroContainer: {
        position: "relative",
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: "hidden", // 👈 ensures image respects radius
    },

    bgImageStyle: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },

    textAndImageWrapper: {
        flex: 1,
        flexDirection: "row", // 👈 side by side
        justifyContent: "space-between", // text left, image right
        alignItems: "center",
        paddingLeft: 30
    },

    title: {
        flex: 1,
        fontSize: 28,
        lineHeight: 34,
        fontFamily: Fonts.Bold,
        color: Colors.main_purple,
        marginTop: 30
    },


    imageBottomContainer: {
        alignItems: "center",
        justifyContent: "flex-end",
    },

    alexPersonalImg: {
        width: 148,
        height: 209,
        resizeMode: "cover",
        marginBottom: -90,
        paddingLeft: 30
    },
    content: {
        padding: 24,
    },
    subtitle: {
        fontSize: 17,
        textAlign: "left",
        marginVertical: 10,
        fontFamily: Fonts.Bold,
        color: Colors.text,
    },
    eachInput: {
        padding: 16,
        marginTop: 0,
    },
    bottomButton: {
        flexDirection: 'column',
        // marginTop: 40,
        padding: 24
    },
    button: {
        backgroundColor: Colors.black,
    },
    signBtn: {
        backgroundColor: Colors.bg,
        borderWidth: 1,
        borderColor: Colors.black,
        marginTop: 10
    },
    buttonText: {
        color: Colors.surface,

    },
    signButtonText: {
        color: Colors.black
    },
    formWrap: {
        marginTop: 0,
    },
    terms: {
        fontSize: 13,
        color: Colors.text,
        lineHeight: 18,
        fontFamily: Fonts.Medium,
    },
    link: {
        color: Colors.blue_link,
        textDecorationLine: "underline",
    },

    passwordWrapper: {
        position: "relative",
        marginBottom: 10,
    },
    iconWrapper: {
        position: "absolute",
        right: 10,
        top: "50%",
        transform: [{ translateY: -10 }],
    },
    eyeIcon: {
        color: "#0064D2",
    },
    orText: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color: Colors.black,
        marginVertical: 14
    },
    faceIdBtn: {
        width: '100%',
        backgroundColor: "#F1EBFF",
        paddingVertical: 15,
        borderRadius: 15,
        textAlign: 'center'
    },
    faceText: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Fonts.Medium,
        color: Colors.main_purple
    }

});