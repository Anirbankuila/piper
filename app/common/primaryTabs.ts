import Routes, { navigateScreen } from "./Routes";

export const primaryTabs = [
  {
    name: "Home",
    iconPath: require("../../assets/icons/home.png"),
    activeIconPath:require("../../assets/icons/homeActive.png"),
    onTabPress: () => {
      navigateScreen(Routes.homeTab);
    },
  },
  {
    name: "LifeLog",
    iconPath: require("../../assets/icons/booknew.png"),
    activeIconPath:require("../../assets/icons/bookactive.png"),
    onTabPress: () => {
      navigateScreen(Routes.lifeLogTab);
    },
  },
  {
    name: "Piper",
    iconPath: require("../../assets/icons/pipertabicon.png"),
    activeIconPath:require("../../assets/icons/pipertab.png"),
    onTabPress: () => {
      navigateScreen(Routes.piperTab);
    },
  },
  {
    name: "Calendar",
    iconPath: require("../../assets/icons/calendartab.png"),
    activeIconPath:require("../../assets/icons/calenderActive.png"),
    onTabPress: () => {
      navigateScreen(Routes.calendarTab);
    },
  },
  {
    name: "Profile",
    iconPath: require("../../assets/images/profile.png"),
    activeIconPath:require("../../assets/icons/profile.png"),
    onTabPress: () => {
      navigateScreen(Routes.profileTab);
    },
  },
];
