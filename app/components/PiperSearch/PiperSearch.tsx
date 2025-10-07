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

interface PiperSearch extends TextInputProps {
    onMicPress?: () => void;
}

const PiperSearch: React.FC<PiperSearch> = ({ onMicPress, ...textInputProps }) => {
    const [text, setText] = useState<string>("");

    return (
        <View style={styles.askPiper} >
            <TextInput
                style={styles.input}
                placeholder={`Ask me anything !`}
                value={text}
                multiline={true}
                onChangeText={setText}
                placeholderTextColor={Colors.textLight}
                returnKeyType="done"
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

export default PiperSearch;

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
});
