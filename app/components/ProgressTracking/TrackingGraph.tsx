import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const TrustedChart = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  const data = {
    labels: months,
    datasets: [
      {
        data: [20, 40, 35, 70, 90], // main curved line
        color: (opacity = 1) => `rgba(249,178,51, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [30, 30, 30, 30, 30], // medication horizontal line
        color: (opacity = 1) => `rgba(0,0,255, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [50, 50, 50, 50, 50], // therapy horizontal line
        color: (opacity = 1) => `rgba(0,255,0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Severity", "Medication", "Therapies"],
  };

  return (
    <View style={styles.container}>
      {/* Custom month labels on top */}
      <View style={styles.monthsRow}>
        {months.map((month, index) => (
          <Text key={index} style={styles.monthText}>
            {month}
          </Text>
        ))}
      </View>

      <LineChart
        data={data}
        width={screenWidth - 32}
        height={220}
        yAxisSuffix=""
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#F9B233",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        withShadow={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  monthsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  monthText: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default TrustedChart;
