import React, { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

const CustomToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const offset = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    const toValue = isEnabled ? 0 : 1;
    Animated.timing(offset, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsEnabled(!isEnabled);
  };

  const translateX = offset.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], // knob movement
  });

  const backgroundColor = offset.interpolate({
    inputRange: [0, 1],
    outputRange: ["#d3d3d3", "#34C759"], // off -> on color
  });

  return (
    <Pressable onPress={toggleSwitch}>
      <Animated.View style={[styles.toggle, { backgroundColor }]}>
        <Animated.View
          style={[
            styles.circle,
            { transform: [{ translateX }] },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggle: {
    width: 51,
    height: 31,
    borderRadius: 20,
    padding: 2,
    justifyContent: "center",
  },
  circle: {
    width: 27,
    height: 27,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "absolute",
  },
});

export default CustomToggle;
