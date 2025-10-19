import { HrefObject, router } from "expo-router";
import { NavigationOptions } from "expo-router/build/global-state/routing";

const Routes = {
  onBoarding: "screens/onboarding/onBoarding",
  logIn: "screens/Login/Login",
  faceDetection: "screens/FaceDetection/FaceDetection",
  faceDetectionFrame: "screens/FaceDetectionFeame/FaceDetectionFeame",
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
  lifeLogTab: "(tabs)/LifeLogTab",
  piperTab: "(tabs)/PiperTab",
  profileTab: "(tabs)/ProfileTab",
  calendarTab: "(tabs)/CalendarTab",
  notification: "screens/Notification/Notification",
  chatList: "screens/ChatHistory/ChatHistory",
  chatDetails: "screens/ChatDetails/ChatDetails",
  newAppointment: "screens/AddNewAppointment/NewAppointment",
  patientDetails: "screens/EnterPatientDetails/PatientDetails",
  updateProfile: "screens/UpdateProfile/UpdateProfile",
  OrderGeneticTest: "screens/OrderGeneticTest/OrderGeneticTest",
  uploadDoc: "screens/DocumentUpload/DocumentUpload",
  documentScan: "screens/DocumentScanner/DocumentScanner",
  docDetails: "screens/DocumentDetails/DocumentDetails",
  orderGeneticTest: "screens/OrderGeneticTest/OrderGeneticTest",
  documentSuccess: "screens/DocumentSuccess/DocumentSuccess",
  documentUpload: "screens/UploadDocuments/UploadDocuments",
  documentCategory: "screens/DocumentCategory/DocumentCategory",
  schoolDocuments: "screens/SchoolDocuments/SchoolDocuments",
  medicalDocuments: "screens/MedicalDocuments/MedicalDocuments",
  AddSchoolDocument: "screens/AddSchoolDoc/AddSchoolDoc",
  AddMedicalDocument: "screens/AddMedicalDocs/AddMedicalDocs",
  AddTherapyDocument: "screens/AddTherapyDocs/AddTherapyDocs",
  AddAllergyDocument: "screens/AddAllergyDocs/AddAllergyDocs",
  AddImmunizingDocument: "screens/AddImmunizingDocs/AddImmunizingDocs",
  therapyDocumnets: "screens/TherapyDocuments/TherapyDocuments",
  allergyDocuments: "screens/AllergyDocuments/AllergyDocuments",
  immunizationDocuments: "screens/Immunization/Immunization",
  shareSuccess: "screens/ShareSuccess/ShareSuccess",
  talkToDoctor: "screens/TalkToDoctor/TalkToDoctor",
  medicine: "screens/Medicine/Medicine",
  medicineDetails: "screens/AddMedicineDetails/MedicineDetails",
  medicationNudge: "screens/MedicationNudge/MedicationNudge",
  medicineSearch: "screens/Medicine/MedicineSearch",
  surveyEntry: "screens/SurveyEntryScreen/SurveyEntryScreen",
  surveyQuestionScreen: "screens/SurveyEntryScreen/SurveyQuestionScreen",
  SurveyCompleteScreen: "screens/SurveyEntryScreen/SurveyCompleteScreen",
  DeleteLog: "screens/DeleteLog/DeleteLog",
  AddChildTeam: "screens/AddChildTeam/AddChildTeam",
  addChildSuccess: "screens/AddChildSuccess/AddChildSuccess",
  medicalTeamReport: "screens/MedicalTeamReport/MedicalTeamReport",
  doctorList: "screens/DoctorList/DoctorList",
  reportShareSuccess: "screens/ReportShareSuccess/ReportShareSuccess",
  medicalTeam: "screens/MedicalTeam/MedicalTeam",
  progressTracking: "screens/ProgressTracking/ProgressTracking",
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
