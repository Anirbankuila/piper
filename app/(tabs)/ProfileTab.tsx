import { Image } from "expo-image";
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import {
  ArrowRightOnRectangleIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  UserIcon,
} from "react-native-heroicons/outline";
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
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bg} />

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
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileName}>Johnny</Text>
          </View>
        </View>
        <MenuItem
          icon={<UserIcon size={24} color={Colors.text} />}
          title="Profile"
          onPress={() => handleMenuPress("Profile")}
        />
        <MenuItem
          icon={<ClipboardDocumentListIcon size={24} color={Colors.text} />}
          title="Status of Genetic test"
          onPress={() => handleMenuPress("Status of Genetic test")}
        />
        <MenuItem
          icon={<ShoppingCartIcon size={24} color={Colors.text} />}
          title="Order Genetic test"
          onPress={() => handleMenuPress("Order Genetic test")}
        />
        <MenuItem
          icon={<ArrowRightOnRectangleIcon size={24} color={Colors.text} />}
          title="Log Out"
          onPress={() => handleMenuPress("Log Out")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTab;
