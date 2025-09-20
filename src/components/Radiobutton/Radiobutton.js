import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './RadiobuttonCss';
const CustomRadio = ({ options, selectedValue, onSelect, optionStyle }) => {
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
            {/* show label */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomRadio;
