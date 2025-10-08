import Routes, { navigateScreen } from "./Routes";

export const primaryTabs = [
  {
    name: "Home",
    iconPath: require("../../assets/icons/home.png"),
    onTabPress: () => {
      navigateScreen(Routes.homeTab);
    },
  },
  {
    name: "LifeLog",
    iconPath: require("../../assets/icons/booknew.png"),
    onTabPress: () => {
      navigateScreen(Routes.lifeLogTab);
    },
  },
  {
    name: "Piper",
    iconPath: require("../../assets/icons/pipertabicon.png"),
    onTabPress: () => {
      navigateScreen(Routes.lifeLogTab);
    },
  },
  {
    name: "Calendar",
    iconPath: require("../../assets/icons/calendartab.png"),
    onTabPress: () => {
      navigateScreen(Routes.calendarTab);
    },
  },
  {
    name: "Profile",
    iconPath: require("../../assets/images/profile.png"),
    onTabPress: () => {
      navigateScreen(Routes.profileTab);
    },
  },
];
