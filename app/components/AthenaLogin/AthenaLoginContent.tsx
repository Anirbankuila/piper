import Routes, { navigateScreen } from "@/app/common/Routes";
import { Colors, Fonts } from "@/constants/theme";
import React, { useEffect, useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import { Checkbox, Snackbar } from "react-native-paper";
import CommonButton from "../CommonButton/CommonButton";
import CommonInput from "../CommonInput/CommonInput";
import { CustomRBSheetRef } from "../CustomBottomSheet/CustomRBSheet";

const AthenaLoginContent = ({ rbSheetRef }: { rbSheetRef: React.RefObject<CustomRBSheetRef> }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    const [step, setStep] = useState<"login" | "next">("login");
    const [snackbarVisible, setSnackbarVisible] = useState(false);


    // ✅ Popup state
    const [showPopup, setShowPopup] = useState(false);
    const handleLogin = () => {
        setStep("next"); // go to next step
        setSnackbarVisible(true); // show snackbar
    };

    useEffect(() => {
        if (step === "next") {
            const timer = setTimeout(() => {
                setShowPopup(true);

                // Close popup and RBSheet after 2s
                setTimeout(() => {
                    setShowPopup(false);
                    rbSheetRef?.current?.close();
                }, 2000);
            }, 3000); // 5s delay before showing popup

            return () => clearTimeout(timer);
        }
    }, [step]);

    return (
        <View style={styles.container}>
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={2000} // 2 seconds
                style={{
                    backgroundColor: "#4BB543",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999, // ensure it’s above other elements
                    borderRadius: 5,
                }}
            >
                Successfully logged in!
            </Snackbar>

            {step === "login" && (
                <View style={styles.loginContainer}>
                    <View style={styles.topText}>
                        <Text style={styles.loginText}>
                            Log in to athenahealth to connect to
                        </Text>
                        <Text style={styles.loginDesc}>
                            POD Health preview - preview
                        </Text>
                    </View>

                    <CommonInput
                        placeholder="Email"
                        onChangeText={(text) => console.log(text)}
                        keyboardType="email-address"
                    />
                    <View style={styles.passwordWrapper}>
                        <CommonInput
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            onChangeText={(text) => console.log(text)}
                        />
                        <TouchableOpacity
                            style={styles.iconWrapper}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeSlashIcon size={20} color={Colors.primary} />
                            ) : (
                                <EyeIcon size={20} color={Colors.primary} />
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            status={rememberPassword ? "checked" : "unchecked"}
                            onPress={() => setRememberPassword(!rememberPassword)}
                            color="rgba(3, 102, 214, 1)"
                        />
                        <Text style={styles.checkboxLabel}>Remember Password</Text>
                    </View>

                    <View style={styles.bottomButton}>
                        <CommonButton
                            title="Log In"
                            textStyle={styles.buttonText}
                            style={styles.button}
                            onPress={handleLogin}
                        />

                    </View>

                    <Text style={styles.terms}>
                        Don’t have an account?{" "}
                        <Text
                            style={styles.link}
                            onPress={() => navigateScreen(Routes.privacy)}
                        >
                            Sign up
                        </Text>
                    </Text>
                </View>
            )}

            {step === "next" && (
                <>
                    <View style={styles.topText}>
                        <Text style={styles.loginText}>Select a health record</Text>
                        <Text style={styles.loginText}>
                            Your account is linked to the following health records:
                        </Text>
                    </View>

                    <Text style={styles.athenaText}>athenahealth</Text>

                    {/* ✅ On press triggers popup */}
                    <TouchableOpacity
                        style={styles.profileWrap}

                    >
                        <Text style={styles.name}>Jake Medlock (you)</Text>
                        <Text style={styles.dob}>DOB: Jan 28, 1952</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.backWrap}
                        onPress={() => setStep("login")}
                    >
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                </>
            )}

            {/* === ✅ POPUP MODAL === */}
            <Modal visible={showPopup} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.popupBox}>
                        <Text style={styles.popupText}>
                            🎉 Congrats! Your records from{"\n"}
                            <Text style={{ fontFamily: Fonts.Bold }}>athenahealth</Text> are linked to{" "}
                            <Text style={{ fontFamily: Fonts.Bold }}>Piper</Text>
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { paddingVertical: 20 },
    loginContainer: { position: "relative" },
    topText: {
        borderTopWidth: 1,
        paddingTop: 16,
        paddingBottom: 20,
        borderTopColor: Colors.strokeColor,
    },
    loginText: {
        fontSize: 14,
        fontFamily: Fonts.Medium,
        marginBottom: 15,
        textAlign: "center",
    },
    athenaText: {
        fontSize: 24,
        fontFamily: Fonts.Medium,
        marginBottom: 15,
        textAlign: "left",
    },
    loginDesc: {
        fontSize: 20,
        fontFamily: Fonts.SemiBold,
        color: Colors.text,
        textAlign: "center",
    },
    passwordWrapper: { position: "relative" },
    iconWrapper: {
        position: "absolute",
        right: 10,
        top: "50%",
        transform: [{ translateY: -10 }],
    },
    bottomButton: {
        flexDirection: "column",
        paddingVertical: 24,
    },
    button: { backgroundColor: Colors.black },
    buttonText: { color: Colors.surface },
    terms: {
        fontSize: 14,
        color: Colors.textLight,
        lineHeight: 18,
        fontFamily: Fonts.Regular,
        textAlign: "center",
    },
    link: { color: Colors.blue_link },
    checkboxContainer: { flexDirection: "row", alignItems: "center" },
    checkboxLabel: {
        fontSize: 14,
        marginLeft: 8,
        color: Colors.text,
        fontFamily: Fonts.Regular,
    },
    profileWrap: { position: "relative", marginBottom: 30 },
    name: {
        fontSize: 14,
        color: Colors.blue_link,
        fontFamily: Fonts.Regular,
    },
    dob: {
        fontSize: 14,
        color: Colors.textLight,
        fontFamily: Fonts.Regular,
    },
    backWrap: {
        borderTopWidth: 1,
        paddingTop: 16,
        paddingBottom: 20,
        borderTopColor: Colors.strokeColor,
    },
    backText: {
        fontSize: 14,
        color: Colors.blue_link,
        fontFamily: Fonts.Regular,
    },
    // === Modal Styles ===
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    popupBox: {
        backgroundColor: "white",
        borderRadius: 12,
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: "80%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    popupText: {
        fontSize: 16,
        color: Colors.black,
        textAlign: "center",
        fontFamily: Fonts.Medium,
    },
});

export default AthenaLoginContent;
