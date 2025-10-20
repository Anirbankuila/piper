import React from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Checkbox } from "react-native-paper";
import styles from "./CustomCheckCss";

interface MultiOption {
  id: string | number;
  label: string;
}

interface CustomMultiSelectProps {
  options: MultiOption[];
  selectedValues: (string | number)[]; // multiple selected values
  onSelect: (values: (string | number)[]) => void;
  optionStyle?: StyleProp<ViewStyle>;
  isTypeOfCheckBox?: boolean;
}

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  options,
  selectedValues,
  onSelect,
  optionStyle,
  isTypeOfCheckBox,
}) => {
  const handlePress = (id: string | number) => {
    if (selectedValues.includes(id)) {
      // already selected → remove
      onSelect(selectedValues.filter((val) => val !== id));
    } else {
      // not selected → add
      onSelect([...selectedValues, id]);
    }
  };

  return (
    <View style={styles.container}>
      {options.map((item, index) => {
        const isSelected = selectedValues.includes(item.id);
        return (
          <TouchableOpacity
            key={index}
            style={[styles.option, optionStyle]}
            onPress={() => handlePress(item.id)}
          >
            {isTypeOfCheckBox ? (
              <Checkbox.Android
                status={
                  selectedValues.includes(item.id) ? "checked" : "unchecked"
                }
                onPress={() => handlePress(item.id)}
              />
            ) : (
              <View style={styles.radioCircle}>
                {isSelected && <View style={styles.selectedRb} />}
              </View>
            )}

            <Text style={styles.optionText}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomMultiSelect;
