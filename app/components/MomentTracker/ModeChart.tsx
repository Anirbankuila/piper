import { Colors, Fonts } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');
console.log(width)

const moodData = {
    D: {
        labels: ['12AM', '6AM', '12PM', '6PM', '12AM'],
        moods: [5, 6, 4, 8, 7],
        emojis: ['🙂', '🙂', '🙂', '😃', '😃'],
    },
    W: {
        labels: ['W1', 'W2', 'W3', 'W4'],
        moods: [6, 4, 5, 8],
        emojis: ['😃', '😞', '😐', '😃'],
    },
    M: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        moods: [5, 2, 2, 5, 3.5, 5],
        emojis: ['😃', '😞', '😞', '😐', '😞', '😃'],
    },
    '6M': {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        moods: [5, 2, 2, 5, 3.5, 5],
        emojis: ['😃', '😞', '😞', '😐', '😞', '😃'],
    },
    Y: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        moods: [5, 2, 2, 5, 3.5, 5],
        emojis: ['😃', '😞', '😞', '😐', '😞', '😃'],
    },
};

export default function MomentTracker() {
    const [activeTab, setActiveTab] = useState<'D' | 'W' | 'M' | '6M' | 'Y'>('M');

    const data = {
        labels: moodData[activeTab].labels,
        datasets: [
            {
                data: moodData[activeTab].moods,
                color: (opacity = 1) => `rgba(66, 135, 245, ${opacity})`,
                strokeWidth: 0,
            },
        ],
    };

    return (
        <View style={styles.container}>
            {/* Tabs */}
            <View style={styles.tabRow}>
                {['D', 'W', 'M', '6M', 'Y'].map(t => (
                    <TouchableOpacity
                        key={t}
                        style={[styles.tab, activeTab === t && styles.activeTab]}
                        onPress={() => setActiveTab(t as any)}
                    >
                        <Text style={[styles.tabText, activeTab === t && styles.activeTabText]}>{t}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Chart */}
            <LinearGradient
                colors={['#E6F0FB', '#ffffff']} // gradient color
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.chartCard}
            >
                <Text style={styles.title}>Life Log Moment Tracker</Text>
                <LineChart
                    data={data}
                    width={width + 40}
                    height={240}
                    fromZero
                    withHorizontalLines={false}
                    withShadow
                    withHorizontalLabels={false}
                    withOuterLines={false}
                    chartConfig={{
                        paddingTop: 20,
                        backgroundGradientFrom: '#E6F0FB',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 0.23) => `rgba(0, 10, 255, ${opacity})`,
                        labelColor: () => '#0064D2',
                      
                        propsForLabels: {
                            fontSize: 11, // এখানে আপনার পছন্দসই font size দিন
                            fontFamily: Fonts.SemiBold,
                            y: 8
                        },
                        strokeWidth: 1,
                        barPercentage: 0.5
                    }}
                    // bezier
                    style={styles.chart}

                    renderDotContent={({ x, y, index }) => (
                        <Text
                            key={index}
                            style={{
                                position: 'absolute',
                                left: x - 10,
                                top: y - 10,
                                fontSize: 18,
                            }}
                        >
                            {moodData[activeTab].emojis[index]}
                        </Text>
                    )}
                />

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: 12,
        paddingBottom: 20,
        backgroundColor: '#fff'
    },
    tabRow: {
        flexDirection: 'row',
        backgroundColor: '#F2F2F7',
        borderRadius: 8,
        paddingVertical: 4,
        marginBottom: 20,
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tab: {
        paddingVertical: 8,
        borderRadius: 8,
        paddingHorizontal: 25,
        marginHorizontal: 4
    },
    activeTab: {
        backgroundColor: '#1E1E1E',

    },
    tabText: {
        color: Colors.textLight,
        fontSize: 12,
        fontFamily: Fonts.Regular
    },
    activeTabText: { color: '#fff' },

    chartCard: {
        paddingTop: 12,
        alignItems: 'center',
        width: width - 24,
        borderRadius: 8
    },
    title: {
        fontSize: 10,
        fontFamily: Fonts.SemiBold,
        marginBottom: 6,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 4,
        color: '#003269'
    },
    chart: {
        paddingTop: 20,   // চার্টের ভেতরে উপরে স্পেস
        marginVertical: 8
    }
});
