import React, { useRef, useState } from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/outline";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from "../../../constants/theme";
import styles from "./GenderSelect.style";
interface GenderSelectProps {
  value?: string;
  onChange: (value: string) => void;
  placeHolderText?: string;
  style?: StyleProp<TextStyle>;
  options?: string[];
}
interface RBSheetRef {
  open: () => void;
  close: () => void;
}
const GenderSelect: React.FC<GenderSelectProps> = ({
  value,
  onChange,
  placeHolderText = "Select Gender",
  style,
  options = ["Male", "Female", "Other"],
}) => {
  const refRBSheet = useRef<RBSheetRef>(null);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    value === "" ? undefined : value
  );
  return (
    <View>
      {/* Selected Value */}
      <TouchableOpacity
        style={styles.inputBox}
        onPress={() => refRBSheet?.current?.open()}
      >
        <Text
          style={[selectedValue ? styles.selectedText : styles.placeholderText]}
        >
          {selectedValue ?? placeHolderText}
        </Text>
        <ChevronDownIcon
          size={16}
          color={selectedValue ? Colors.black : Colors.grey}
        />
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        height={250}
        customStyles={{
          wrapper: { backgroundColor: "rgba(0,0,0,0.5)" },
          container: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        }}
      >
        <View style={styles.sheetContent}>
          <Text style={[styles.sheetTitle, style]}>Choose Gender</Text>
          {options.map((opt, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => {
                onChange(opt);
                setSelectedValue(opt);
                refRBSheet?.current?.close();
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
