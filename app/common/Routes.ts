import { HrefObject, router } from "expo-router";
import { NavigationOptions } from "expo-router/build/global-state/routing";

const Routes = {
  onBoarding: "screens/onboarding/onBoarding",
  profile: "screens/Profile/Profile",
  privacy: "screens/Privacy/Privacy",
  otp: "screens/OtpScreen/OtpScreen",
  about: "screens/AboutScreen/AboutScreen",
  document: "screens/DocumentScreen/DocumentScreen",
  childTeam: "screens/ChildTeam/ChildTeam",
  logSuccess: "screens/LogSuccess/LogSuccess",
  allLogs: "screens/AllLogs/AllLogs",
  logsSummary: "screens/LogSummary/[id]",
  momentLog: "screens/MomentLog/MomentLog",
  tabs: "(tabs)",
  homeTab: "(tabs)/HomeTab",
  notification: "screens/Notification/Notification",
  chatList: "screens/ChatHistory/ChatHistory",
  chatDetails: "screens/ChatDetails/ChatDetails",
  newAppointment: "screens/AddNewAppointment/NewAppointment",
  patientDetails: "screens/EnterPatientDetails/PatientDetails",
  updateProfile: "screens/UpdateProfile/UpdateProfile",
  OrderGeneticTest: "screens/OrderGeneticTest/OrderGeneticTest",
};

export function navigateScreen(
  path: string | HrefObject,
  options?: NavigationOptions
) {
  if (typeof path == "string") {
    path = `/${path}`;
  }
  router.push(path as any, options);
}

export default Routes;
