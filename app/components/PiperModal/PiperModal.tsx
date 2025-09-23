import { Colors, Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

interface PiperModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
}

const PiperModal: React.FC<PiperModalProps> = ({ visible, onClose, title }) => {
    const pulse1 = useRef(new Animated.Value(0)).current;
    const pulse2 = useRef(new Animated.Value(0)).current;
    const pulse3 = useRef(new Animated.Value(0)).current;

    const [isRecording, setIsRecording] = useState(false);

    // Start staggered pulse animation
    const startPulse = (anim: Animated.Value, delay = 0) => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(anim, {
                    toValue: 1,
                    duration: 2000,
                    delay,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(anim, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
            ])
        ).start();
    };

   useEffect(() => {
  if (visible) {
    startPulse(pulse1, 0);
    startPulse(pulse2, 400);
    startPulse(pulse3, 800);
  } else {
    // Reset animation values when modal closes
    pulse1.setValue(0);
    pulse2.setValue(0);
    pulse3.setValue(0);
  }
}, [visible]); // watch visible prop


    const getAnimatedStyle = (anim: Animated.Value) => ({
        transform: [
            { scale: anim.interpolate({ inputRange: [0, 1], outputRange: [1, 2] }) },
        ],
        opacity: anim.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0] }),
    });

    const micColor = isRecording ? "#FF4D4D" : Colors.surface; // red while recording

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay} >
                    <TouchableWithoutFeedback>
                        <LinearGradient
                            colors={["#9F01FD33", "#002B5AE6"]}
                            locations={[0, 0.9]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.popup}
                        >
                            {/* Pulsating Rings */}
                            <View style={styles.micBox}>
                                <Animated.View style={[styles.pulseCircle, getAnimatedStyle(pulse1)]} />
                                <Animated.View style={[styles.pulseCircle, getAnimatedStyle(pulse2)]} />
                                <Animated.View style={[styles.pulseCircle, getAnimatedStyle(pulse3)]} />

                                {/* Mic button */}
                                <TouchableOpacity
                                    style={[styles.micWrap, { backgroundColor: micColor }]}
                                    onPress={() => setIsRecording(!isRecording)}
                                >
                                    <Image
                                        source={require("../../../assets/icons/microphone-2.png")}
                                        style={styles.mic}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.title}>{title || "Speak to Piper"}</Text>
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default PiperModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },
    popup: {
        width: 300,
        height: 385,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        borderRadius: 20,
        position: 'relative',
        zIndex: 9
    },
    micBox: {
        width: 160,
        height: 160,
        alignItems: "center",
        justifyContent: "center",
    },
    micWrap: {
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        zIndex: 2,
    },
    mic: { width: 48, height: 48 },
    title: {
        fontFamily: Fonts.SemiBold,
        fontSize: 24,
        color: "#fff",
        textAlign: "center",
        marginTop: 20,
    },
    pulseCircle: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#fff",
        zIndex: 1,
    },
});
