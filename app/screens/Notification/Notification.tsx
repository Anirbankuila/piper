import { Notification } from "@/app/common/Interface/Notification";
import { useNavigation } from "expo-router";
import React from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./NotificationCss";

const PipersNotificationScreen = () => {
  // Sample notification data - replace with your actual data source
  const navigation = useNavigation();
  const notifications: Notification[] = [
    {
      id: "1",
      title: "I noticed some patterns that might...",
      subTitle: "Tap to see insights and self-care suggestions.",
      timeStamp: new Date(),
      type: "insight",
      isRead: false,
    },
    {
      id: "2",
      title: "Mood fluctuated between neutral a...",
      subTitle: "Engage in a favorite activity or reach out to a friend.",
      timeStamp: new Date(),
      type: "mood",
      isRead: true,
    },
    {
      id: "3",
      title: "I noticed some patterns that might...",
      subTitle: "Tap to see insights and self-care suggestions.",
      timeStamp: new Date(),
      type: "insight",
      isRead: false,
    },
    {
      id: "4",
      title: "Mood fluctuated between neutral a...",
      subTitle: "Engage in a favorite activity or reach out to a friend.",
      timeStamp: new Date(),
      type: "mood",
      isRead: true,
    },
    {
      id: "5",
      title: "I noticed some patterns that might...",
      subTitle: "Tap to see insights and self-care suggestions.",
      timeStamp: new Date(),
      type: "insight",
      isRead: false,
    },
    {
      id: "6",
      title: "Mood fluctuated between neutral a...",
      subTitle: "Engage in a favorite activity or reach out to a friend.",
      timeStamp: new Date(),
      type: "mood",
      isRead: true,
    },
    {
      id: "7",
      title: "I noticed some patterns that might...",
      subTitle: "Tap to see insights and self-care suggestions.",
      timeStamp: new Date(),
      type: "insight",
      isRead: false,
    },
    {
      id: "8",
      title: "Mood fluctuated between neutral a...",
      subTitle: "Engage in a favorite activity or reach out to a friend.",
      timeStamp: new Date(),
      type: "mood",
      isRead: true,
    },
    {
      id: "9",
      title: "I noticed some patterns that might...",
      subTitle: "Tap to see insights and self-care suggestions.",
      timeStamp: new Date(),
      type: "insight",
      isRead: false,
    },
    {
      id: "10",
      title: "Mood fluctuated between neutral a...",
      subTitle: "Engage in a favorite activity or reach out to a friend.",
      timeStamp: new Date(),
      type: "mood",
      isRead: true,
    },
    {
      id: "11",
      title: "I noticed some patterns that might...",
      subTitle: "Tap to see insights and self-care suggestions.",
      timeStamp: new Date(),
      type: "insight",
      isRead: false,
    },
    {
      id: "12",
      title: "Mood fluctuated between neutral a...",
      subTitle: "Engage in a favorite activity or reach out to a friend.",
      timeStamp: new Date(),
      type: "mood",
      isRead: true,
    },
    {
      id: "13",
      title: "I noticed some patterns that might...",
      subTitle: "Tap to see insights and self-care suggestions.",
      timeStamp: new Date(),
      type: "insight",
      isRead: false,
    },
    {
      id: "14",
      title: "Mood fluctuated between neutral a...",
      subTitle: "Engage in a favorite activity or reach out to a friend.",
      timeStamp: new Date(),
      type: "mood",
      isRead: true,
    },
  ];

  const handleNotificationPress = (notification: Notification) => {
    console.log("Notification pressed:", notification);
    // Navigate to specific notification detail screen based on type
    // navigation.navigate('NotificationDetail', { notification });
  };

  const renderNotificationItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.notificationCard}
      onPress={() => handleNotificationPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.notificationContent}>
        <View style={styles.notificationTextPart}>
          {!item.isRead && <View style={styles.redDot} />}
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.notificationSubtitle} numberOfLines={2}>
              {item.subTitle}
            </Text>
          </View>
        </View>
        <Text style={styles.timestamp}>
          {new Date(item.timeStamp).toDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateIcon}>🔔</Text>
      <Text style={styles.emptyStateTitle}>No notifications</Text>
      <Text style={styles.emptyStateSubtitle}>
        You&apos;re all caught up! New insights and updates will appear here.
      </Text>
    </View>
  );

  const renderItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      {/* FlatList for Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        ListEmptyComponent={renderEmptyState}
        ItemSeparatorComponent={renderItemSeparator}
        contentContainerStyle={styles.listContentContainer}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        bounces={true}
        // Performance optimizations
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={10}
      />
    </View>
  );
};

export default PipersNotificationScreen;
