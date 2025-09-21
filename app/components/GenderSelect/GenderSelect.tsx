import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/outline";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors, Fonts } from "../../../constants/theme";

const GenderSelect = ({ value, onChange }) => {
  const refRBSheet = useRef();
  const options = ["Male", "Female", "Other"];

  return (
    <View>
      {/* Selected Value */}
      <TouchableOpacity
        style={styles.inputBox}
        onPress={() => refRBSheet.current.open()}
      >
        <Text
          style={[
            value ? styles.selectedText : styles.placeholderText, // ✅ conditional style
          ]}
        >
          {value || "Select Gender"}
        </Text>
        <ChevronDownIcon style={styles.inputBoxIcon} />
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={250}
        customStyles={{
          wrapper: { backgroundColor: "rgba(0,0,0,0.5)" },
          container: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        }}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Choose Gender</Text>
          {options.map((opt, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => {
                onChange(opt);
                refRBSheet.current.close();
              }}
            >
              <Text style={{ fontSize: 16 }}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </RBSheet>
    </View>
  );
};

export default GenderSelect;

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.text,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  inputBoxIcon: {
    fontSize: 16,
    color: Colors.text,
  },
  placeholderText: {
    color: "#aaaaaa",
    fontSize: 16,
  },
  selectedText: {
    fontSize: 16,
    color: Colors.text,
  },
});
