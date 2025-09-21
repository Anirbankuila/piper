import React from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import styles from "./RadiobuttonCss";

interface RadioOption {
  id: string | number;
  label: string;
}

interface CustomRadioProps {
  options: RadioOption[];
  selectedValue: string | number | null;
  onSelect: (id: string | number) => void;
  optionStyle?: StyleProp<ViewStyle>;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  options,
  selectedValue,
  onSelect,
  optionStyle,
}) => {
  return (
    <View style={styles.container}>
      {options.map((item, index) => {
        const isSelected = selectedValue === item.id; // compare id
        return (
          <TouchableOpacity
            key={index}
            style={[styles.option, optionStyle]}
            onPress={() => onSelect(item.id)} // send id on select
          >
            <View style={styles.radioCircle}>
              {isSelected && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.optionText}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomRadio;
