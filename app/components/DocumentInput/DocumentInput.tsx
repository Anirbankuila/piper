import { Colors, Fonts } from "@/constants/theme";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View
} from "react-native";

interface DocumentInput extends TextInputProps {
    onMicPress?: () => void;
}

const DocumentInput: React.FC<DocumentInput> = ({ onMicPress, ...textInputProps }) => {
    const [text, setText] = useState<string>("");
    const onCamPress = async () => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permission Denied", "Camera access is required.");
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            });

            if (!result.canceled) {
                console.log("Captured image:", result.assets[0].uri);
                // You can now upload or use result.assets[0].uri
            }
        } catch (error) {
            console.error("Camera error:", error);
        }
    };

    const onFileUpload = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: ["image/*", "application/pdf"],
                copyToCacheDirectory: true,
            });

            if (result.canceled) return;
            const file = result.assets?.[0];
            console.log("Selected file:", file);
            // You can now upload or process file.uri
        } catch (error) {
            console.error("File picker error:", error);
        }
    };


    return (
        <View style={styles.askPiper} >
            <TouchableOpacity style={styles.fileUpload} onPress={onFileUpload}>
                <Ionicons name="add-circle" size={24} color={Colors.blue_link} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder={`Ask me anything !`}
                value={text}
                multiline={true}
                onChangeText={setText}
                placeholderTextColor={Colors.textLight}
                {...textInputProps} // allow overriding props from parent
            />
            <TouchableOpacity style={styles.cameraBtn} onPress={onCamPress}>
                <Feather name="camera" size={20} color={Colors.black} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.micBtn} onPress={onMicPress}>
                <MaterialIcons name="mic-none" size={24} color={Colors.black} />               
            </TouchableOpacity>
        </View>
    );
};

export default DocumentInput;

const styles = StyleSheet.create({
    askPiper: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        flex: 1,
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: Colors.textLight,
        borderRightWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 9,
        borderRightColor: Colors.strokeColor,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: Colors.strokeColor
    },
    micBtn: {
        paddingLeft: 5,
        width: 24,
        height: 24,

    },
    micIcon: {
        width: 24,
        height: 24,
    },
    fileUpload: {
        paddingRight: 8,
    },
    cameraBtn: {
        paddingLeft: 8,
    },

});
