import { Image } from "expo-image";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Routes, { navigateScreen } from "../common/Routes";
import MenuItem from "../components/MenuItem/MenuItem";
import styles from "../tabStyles/ProfileTabStyle";

const ProfileTab = () => {
  const handleMenuPress = (item: string) => {
    console.log(`${item} pressed`);
    // Add navigation logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={Colors.bg}
      /> */}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../../assets/images/profileimg.png")}
              style={styles.profileImage}
              contentFit="contain"
            />
          </View>
          <Text style={styles.profileName}>Johnny</Text>
        </View>
        <View style={styles.menuList}>
          <MenuItem
            icon={
              <Image
                source={require("../../assets/icons/profile.png")}
                style={styles.icon}
              />
            }
            title="Profile"
            onPress={() => navigateScreen(Routes.updateProfile)}
          />
          <MenuItem
            icon={
              <Image
                source={require("../../assets/icons/notification-icon.png")}
                style={styles.icon}
              />
            }
            title="Status of Genetic test"
            onPress={() => navigateScreen(Routes.orderGeneticTest)}
          />
          <MenuItem
            icon={
              <Image
                source={require("../../assets/icons/bag-tick.png")}
                style={styles.icon}
              />
            }
            title="Order Genetic test"
            onPress={() => navigateScreen(Routes.patientDetails)}
          />
          <MenuItem
            icon={
              <Image
                source={require("../../assets/icons/logout.png")}
                style={styles.icon}
              />
            }
            title="Log Out"
            onPress={() => navigateScreen(Routes.logIn)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTab;
