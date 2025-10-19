// components/CustomRBSheet.tsx
import { Colors, Fonts } from "@/constants/theme";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

interface CustomRBSheetProps {
    title?: string;
    children?: React.ReactNode;
    height?: number;
}

export type CustomRBSheetRef = {
    open: () => void;
    close: () => void;
};

const CustomRBSheet = forwardRef<CustomRBSheetRef, CustomRBSheetProps>(
    ({ title = "RBSheet Title", children, height = 500 }, ref) => {
        const rbRef = useRef<React.ComponentRef<typeof RBSheet> | null>(null);
        useImperativeHandle(ref, () => ({
            open: () => rbRef.current?.open(),
            close: () => rbRef.current?.close(),
        }));

        return (
            <RBSheet
                ref={rbRef}
                height={height}
                openDuration={250}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        padding: 20,
                    },
                }}
            >
                {/* Header with Cancel (left) and Close (right) */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => rbRef.current?.close()}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity onPress={() => rbRef.current?.close()}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>

                {/* Sheet Content */}
                <View style={{ marginTop: 20 }}>{children}</View>
            </RBSheet>
        );
    }
);

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.Bold,
        color: Colors.black,
        textAlign: "center",
        flex: 1,
    },
    cancelText: {
        fontSize: 14,
        color: Colors.blue_link,
        fontFamily: Fonts.Regular,
    },
    closeText: {
        fontSize: 14,
        color: Colors.blue_link,
        fontFamily: Fonts.Regular,
    },
});

export default CustomRBSheet;
