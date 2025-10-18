import Routes, { navigateScreen } from "@/app/common/Routes";
import { Colors, Fonts } from "@/constants/theme";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Snackbar } from "react-native-paper";

const FaceCaptureScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView | null>(null);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    useEffect(() => {
        if (!permission) {
            requestPermission();
        }
    }, []);

    useEffect(() => {
        if (permission?.granted) {
            const timer = setTimeout(async () => {
                try {
                    if (cameraRef.current) {
                        await cameraRef.current.takePictureAsync();
                        setSnackbarVisible(true); // ✅ Show snackbar message

                        // Wait 2 seconds before redirecting
                        setTimeout(() => {
                            navigateScreen(Routes.homeTab);
                        }, 2000);
                    }
                } catch (error) {
                    console.log("Auto capture failed:", error);
                }
            }, 3000); // 3-second delay before capture

            return () => clearTimeout(timer);
        }
    }, [permission]);

    if (!permission?.granted) return null;

    return (
        <View style={styles.container}>
            <View style={styles.cameraWrapper}>
                <CameraView style={styles.camera} ref={cameraRef} facing="front" />
            </View>

            <Text style={styles.instructionText}>Position your face to fit the frame</Text>

            {/* ✅ Snackbar Alert */}
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={2000}
                style={styles.snackbar}
            >
                Your face captured successfully! Redirecting you to Home screen...
            </Snackbar>
        </View>
    );
};

export default FaceCaptureScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    cameraWrapper: {
        width: 266,
        height: 266,
        overflow: "hidden",
        borderRadius: 133,
        borderWidth: 5,
        borderColor: "#01BA38",
        justifyContent: "center",
        alignItems: "center",
    },
    camera: {
        width: 266,
        height: 266,
    },
    instructionText: {
        color: Colors.text,
        fontSize: 18,
        marginTop: 24,
        textAlign: "center",
        fontFamily:Fonts.Bold,
        opacity: 1,
    },
    snackbar: {
        backgroundColor: "#01BA38",
        borderRadius: 8,
        bottom: 40,
        color: Colors.bg,
        fontSize: 14,
        fontFamily:Fonts.Bold,
    },
});
