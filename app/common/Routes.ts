const Routes = {
  ONBOARDING: "screens/onboarding/onBoarding",
  PROFILE: "screens/Profile/Profile",
  PRIVACY: "screens/Privacy/Privacy",
  OTP: "screens/OtpScreen/OtpScreen",
  ABOUT: "screens/AboutScreen/AboutScreen",
  DOCUMENT: "screens/DocumentScreen/DocumentScreen",
  CHILDTEAM: "screens/ChildTeam/ChildTeam",
  LOGSUCCESS: "screens/LogSuccess/LogSuccess",
  ALLLOGS: "screens/AllLogs/AllLogs",
  LOGSUMMARY: "screens/LogSummary/[id]",
  MOMENTLOG: "screens/MomentLog/MomentLog",
  TABS: "(tabs)",
  NOTIFICATION: "screens/Notification/Notification",
  CHATLIST: "screens/ChatHistory/ChatHistory",
  CHATDETAILS: "screens/ChatDetails/ChatDetails",
} as const;

export default Routes;
