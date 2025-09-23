import { Colors, Fonts } from "@/constants/theme";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";

interface AskPiperInputProps extends TextInputProps {
    onMicPress?: () => void;
}

const AskPiperInput: React.FC<AskPiperInputProps> = ({ onMicPress, ...textInputProps }) => {
    const [text, setText] = useState<string>("");

    return (
        <View style={styles.askPiper}>
            <TextInput
                style={styles.input}
                placeholder={`Write or speak what’s happening\nright now...`}
                value={text}
                multiline={true}   
                onChangeText={setText}
                placeholderTextColor={Colors.textLight}
                {...textInputProps} // allow overriding props from parent
            />
            <TouchableOpacity style={styles.micBtn} onPress={onMicPress}>
                <Image
                    source={require("../../../assets/icons/mic.png")} // replace with your mic icon
                    style={styles.micIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

export default AskPiperInput;

const styles = StyleSheet.create({
    askPiper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 16,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: Colors.strokeColor
    },
    input: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 0,
        fontFamily: Fonts.Regular,
        color: Colors.textLight,
        height: 36,
        borderRightWidth: 1,
        borderRightColor: Colors.strokeColor
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
});
