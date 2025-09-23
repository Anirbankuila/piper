import { useNavigation } from "expo-router";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const PipersNotificationScreen = () => {
  // Sample notification data - replace with your actual data source
  const navigation = useNavigation();
  const notifications = [
    {
      id: "1",
      title: "I noticed some patterns that might...",
      subtitle: "Tap to see insights and self-care suggestions.",
      timestamp: "21/06/2025",
      hasRedDot: true,
      type: "insight",
    },
    {
      id: "2",
      title: "Mood fluctuated between neutral a...",
      subtitle: "Engage in a favorite activity or reach out to a friend.",
      timestamp: "21/06/2025",
      hasRedDot: false,
      type: "mood",
    },
    {
      id: "3",
      title: "Sleep pattern analysis complete",
      subtitle: "Your sleep quality has improved by 15% this week.",
      timestamp: "20/06/2025",
      hasRedDot: true,
      type: "sleep",
    },
    {
      id: "4",
      title: "Weekly wellness summary ready",
      subtitle: "Review your progress and get personalized recommendations.",
      timestamp: "19/06/2025",
      hasRedDot: false,
      type: "summary",
    },
    {
      id: "5",
      title: "Meditation streak: 7 days!",
      subtitle: "Keep up the great work with your daily mindfulness practice.",
      timestamp: "18/06/2025",
      hasRedDot: false,
      type: "achievement",
    },
  ];

  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    }
    console.log("Back pressed");
  };

  const handleNotificationPress = (notification: any) => {
    console.log("Notification pressed:", notification);
    // Navigate to specific notification detail screen based on type
    // navigation.navigate('NotificationDetail', { notification });
  };

  const renderNotificationItem = ({ item: any, index }) => (
    <TouchableOpacity
      style={styles.notificationCard}
      onPress={() => handleNotificationPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          {item.hasRedDot && <View style={styles.redDot} />}
          <Text style={styles.notificationTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.notificationSubtitle} numberOfLines={2}>
          {item.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateIcon}>🔔</Text>
      <Text style={styles.emptyStateTitle}>No notifications</Text>
      <Text style={styles.emptyStateSubtitle}>
        You're all caught up! New insights and updates will appear here.
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.listHeader}>
      <Text style={styles.sectionTitle}>Recent Notifications</Text>
      <Text style={styles.sectionSubtitle}>
        Stay updated with your wellness insights and recommendations
      </Text>
    </View>
  );

  const renderItemSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <ArrowLeftIcon size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Piper's Notification</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* FlatList for Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        ListHeaderComponent={renderHeader}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginRight: 40, // Compensate for back button width
  },
  headerSpacer: {
    width: 40,
  },
  flatList: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  listHeader: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#6c757d",
    lineHeight: 18,
  },
  separator: {
    height: 12,
  },
  notificationCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#4a90e2",
    borderStyle: "dashed",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  notificationContent: {
    padding: 16,
  },
  notificationHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#dc3545",
    marginRight: 8,
    marginTop: 6,
  },
  notificationTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    lineHeight: 20,
    marginRight: 8,
  },
  timestamp: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 2,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: "#6c757d",
    lineHeight: 18,
    marginLeft: 16, // Align with title text (red dot width + margin)
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  emptyStateSubtitle: {
    fontSize: 14,
    color: "#6c757d",
    lineHeight: 20,
    textAlign: "center",
  },
});

export default PipersNotificationScreen;
