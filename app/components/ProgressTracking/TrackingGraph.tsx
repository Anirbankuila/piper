import { Colors, Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const screenWidth = Dimensions.get("window").width;
interface IGraphData {
  value: number;
  frontColor: string;
}
interface TrackingGraphProps {
  title: string;
  xAxisLabel: string[];
  yAxisLabel: string[];
  data: IGraphData[];
}
const TrackingGraph: React.FC<TrackingGraphProps> = ({
  title,
  xAxisLabel,
  yAxisLabel,
  data,
}) => {
  return (
    <LinearGradient
      colors={["#E8DEFF", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        width: screenWidth - 30,
        alignSelf: "center",
        overflow: "hidden",
        marginTop: 15,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontFamily: Fonts.SemiBold,
          color: "#4A2E80",
          marginBottom: 10,
          paddingBottom: 30,
        }}
      >
        {title}
      </Text>
      <BarChart
        data={data}
        width={screenWidth - 70}
        height={260}
        barWidth={12}
        barBorderRadius={10}
        roundedTop={true}
        spacing={37}
        yAxisLabelTexts={yAxisLabel}
        yAxisTextStyle={{
          color: "#6B4CAF",
          fontFamily: Fonts.Medium,
          fontSize: 9,
          backgroundColor: Colors.bg,
          paddingHorizontal: 2,
          transform: [{ rotate: "-90deg" }],
        }}
        noOfSections={5}
        yAxisTextNumberOfLines={5}
        initialSpacing={6}
        maxValue={6}
        yAxisThickness={0}
        xAxisThickness={0}
        rulesType="dashed"
        dashGap={6}
        rulesColor="#66A2E4"
        yAxisColor="transparent"
        backgroundColor="transparent"
        showVerticalLines={true}
        verticalLinesColor="#66A2E4"
        verticalLinesStrokeDashArray={[5, 10]}
      />
      <View
        style={{
          position: "absolute",
          bottom: 310,
          left: 30,
          width: screenWidth - 70,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        {xAxisLabel.map((d, i) => (
          <Text
            key={i}
            style={{
              fontFamily: Fonts.SemiBold,
              fontSize: 10,
              color: Colors.purple_text,
            }}
          >
            {d}
          </Text>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default TrackingGraph;
