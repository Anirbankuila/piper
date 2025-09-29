import Routes, { navigateScreen } from "@/app/common/Routes";
import CustomBottomTab from "@/app/components/CustomBottomTab/CustomBottomTab";
import { Colors } from "@/constants/theme";
import { BlurView } from "expo-blur";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "./OrderGeneticTest.style";
const steps = [
  {
    label: "Order Received",
    descriptions: [
      {
        text: "Confirmation Received",
        color: "#01BA38",
      },
      {
        text: "Date: 11 Sep,2023",
        color: Colors.black,
      },
    ],
    completed: true,
  },
  {
    label: "Sample Kit Shipped",
    descriptions: [
      {
        text: "Tracking ID: [ABC123456]",
        color: Colors.blue_link,
      },
      {
        text: "Expected Delivery: 11 Sep, 2023",
        color: Colors.black,
      },
    ],
    completed: true,
  },
  {
    label: "Sample Collected",
    descriptions: [
      {
        text: "Status: Awaiting pickup / Picked up",
        color: Colors.grey,
      },
      {
        text: "Location: [Home / Clinic]",
        color: Colors.grey,
      },
    ],
    completed: false,
  },
  {
    label: "Sample Received by Lab",
    descriptions: [],
    completed: false,
  },
  {
    label: "DNA Analysis in Progress",
    descriptions: [],
    completed: false,
  },
  {
    label: "Report Ready",
    descriptions: [],
    completed: false,
  },
  {
    label: "Review with Specialist",
    descriptions: [],
    completed: false,
  },
];
const tabs = [
  {
    name: "Home",
    iconPath: require("../../../assets/icons/arrow-left.png"),
    onTabPress: () => {
      navigateScreen(Routes.homeTab);
    },
  },
  {
    name: "Order Details",
    iconPath: require("../../../assets/icons/box.png"),
    onTabPress: () => {
      navigateScreen(Routes.orderGeneticTest);
    },
  },
  {
    name: "Edit Details",
    iconPath: require("../../../assets/icons/edit-details-tab.png"),
    onTabPress: () => {
      navigateScreen(Routes.patientDetails);
    },
  },
];
const OrderGeneticTest = () => {
  return (
    <>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.topImageContainer}>
          <ImageBackground
            source={require("../../../assets/images/order-generic-bg.png")}
            style={styles.topImage}
            imageStyle={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <BlurView intensity={36.1} tint="dark" style={styles.blurCard}>
              <LinearGradient
                colors={[
                  "rgba(255,255,255,0.1)",
                  "transparent",
                  "rgba(255,255,255,0.29)",
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: 20,
                }}
              />
              <View style={styles.orderDetails}>
                <View style={styles.orderRow}>
                  <Text style={styles.label}>Order Date</Text>
                  <Text style={styles.value}>11 Sep, 2024</Text>
                </View>
                <View style={styles.orderRow}>
                  <Text style={styles.label}>Expected Date</Text>
                  <Text style={styles.value}>20 Sep, 2024</Text>
                </View>
                <View style={styles.orderRow}>
                  <Text style={styles.label}>Current Status</Text>
                  <View style={styles.statusContainer}>
                    <Text style={styles.value}>In Progress</Text>
                    <View style={styles.statusDot} />
                  </View>
                </View>
              </View>
            </BlurView>
          </ImageBackground>
        </View>
        <View style={styles.orderSteps}>
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <View key={index} style={styles.stepContainer}>
                {/* Left Side: Step indicator */}
                <View style={styles.leftSide}>
                  <View
                    style={[
                      styles.circle,
                      step.completed
                        ? steps[index + 1].completed === false
                          ? styles.progressCircle
                          : styles.completedCircle
                        : styles.incompleteCircle,
                    ]}
                  />
                  {!isLast && (
                    <View
                      style={[
                        styles.line,
                        {
                          backgroundColor: steps[index + 1]?.completed
                            ? Colors.black
                            : Colors.strokeColor,
                        },
                      ]}
                    />
                  )}
                </View>

                {/* Right Side: Label and description */}
                <View style={styles.rightSide}>
                  <Text
                    style={[
                      styles.stepLabel,
                      {
                        color: !step.completed ? Colors.grey : Colors.black,
                      },
                    ]}
                  >
                    {step.label}
                  </Text>
                  {step.descriptions?.map((desc, idx) => (
                    <React.Fragment key={idx}>
                      <Text style={[styles.description, { color: desc.color }]}>
                        {desc.text}
                      </Text>
                    </React.Fragment>
                  ))}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <CustomBottomTab activeTab={"Order Details"} tabs={tabs} />
    </>
  );
};

export default OrderGeneticTest;
