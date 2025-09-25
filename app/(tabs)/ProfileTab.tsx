import { Image } from "expo-image";
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/theme";
import MenuItem from "../components/MenuItem/MenuItem";
import styles from "../tabStyles/ProfileTabStyle";

const ProfileTab = () => {
  const handleMenuPress = (item: string) => {
    console.log(`${item} pressed`);
    // Add navigation logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={Colors.bg}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.profileImage}
              contentFit="contain"
            />
          </View>
          <Text style={styles.profileName}>Johnny</Text>
          {/* <View style={styles.profileNameContainer}>
          </View> */}
        </View>
        <MenuItem
          icon={
            <Image
              source={require("../../assets/icons/profile.png")}
              style={styles.icon}
            />
          }
          title="Profile"
          onPress={() => handleMenuPress("Profile")}
        />
        <MenuItem
          icon={
            <Image
              source={require("../../assets/icons/notification-icon.png")}
              style={styles.icon}
            />
          }
          title="Status of Genetic test"
          onPress={() => handleMenuPress("Status of Genetic test")}
        />
        <MenuItem
          icon={
            <Image
              source={require("../../assets/icons/bag-tick.png")}
              style={styles.icon}
            />
          }
          title="Order Genetic test"
          onPress={() => handleMenuPress("Order Genetic test")}
        />
        <MenuItem
          icon={
            <Image
              source={require("../../assets/icons/logout.png")}
              style={styles.icon}
            />
          }
          title="Log Out"
          onPress={() => handleMenuPress("Log Out")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTab;
