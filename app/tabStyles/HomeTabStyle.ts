import { Colors, Fonts } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  headerWrapper: {
    // flex: 1,
    backgroundColor: Colors["secondary-100"],
  },
  header: {
    backgroundColor: "#CBF2F6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  starContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FF6B35",
    alignItems: "center",
    justifyContent: "center",
  },
  starIcon: {
    fontSize: 16,
    color: "white",
  },
  headerRightIcon: {
    height: 25,
    width: 25,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerButton: {
    marginLeft: 15,
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: "#CBF2F6",
  },
  profilePhoto: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  profileEmoji: {
    fontSize: 18,
  },
  userDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: Colors.text,
    marginRight: 5,
  },
  dropdownIcon: {
    marginTop: 5,
    fontWeight: "600",
  },

  dropdown: {
    position: "absolute",
    width: '80%',
    top: 40, // adjust depending on header height
    left: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5, // for shadow on Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 999,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomColor: '#D9D9DC',
    borderBottomWidth: 1,
    flex: 1
  },
  dropdownPhoto: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  dropdownName: {
    marginLeft: 10,
    fontSize: 15,
    fontFamily: Fonts.Bold,
    color: Colors.text,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: "rgba(0,0,0,0.3)", // semi-transparent
    zIndex: 999,
    justifyContent: "flex-start",
    paddingTop: 60, // adjust depending on header
  },
  addProfileButton: {
    flexDirection: "row",        // horizontal layout
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  piperIntroContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    width: width,
    paddingHorizontal: 30,
  },
  alexPersonalImg: {
    width: 126,
    height: 180,
    resizeMode: "contain",
  },
  piperDetailsCard: {
    backgroundColor: "#FFF3E9",
    borderRadius: 15,
    padding: 12,
    textAlign: "center",
  },
  piperCard: {
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
  },
  piperContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  mainText: {
    fontSize: 16,
    color: "#004693",
    fontFamily: Fonts.Bold,
    lineHeight: 20,
  },
  subText: {
    fontSize: 10,
    color: '#141514',
    marginVertical: 2,
    fontFamily: Fonts.Regular,
  },
  cardBtn: {
    backgroundColor: "#0F62FE",
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 8
  },
  btnText: {
    fontSize: 10,
    fontFamily: Fonts.Medium,
    lineHeight: 16,
    color: '#fff'
  },
  piperTextContainer: {
    flex: 1,
  },
  piperGreeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 5,
  },
  piperDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 18,
    marginBottom: 15,
  },
  tourButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "flex-start",
  },
  tourButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  piperCharacterContainer: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  piperCharacterEmoji: {
    fontSize: 60,
  },
  sectionContainer: {
    paddingHorizontal: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  progressCard: {
    backgroundColor: "#FFF3E9",
    borderRadius: 12,
    // padding: 15,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderBlockColor: Colors.black,
    borderWidth: 1,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  progressStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 3,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF9500",
    marginLeft: 5,
  },
  statusText: {
    fontSize: 12,
    color: "#666",
    margin: 5,
  },
  statusTextChip: {
    backgroundColor: Colors.bg,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },

  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 110,
  },
  chartItem: {
    alignItems: "center",
    flex: 1,
  },
  barContainer: {
    height: 80,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  progressBar: {
    width: 16,
    borderRadius: 13,
    minHeight: 8,
  },
  dayLabel: {
    fontSize: 12,
    color: "#141514",
    opacity: 0.5,
    fontFamily: Fonts.Medium
  },
  cardDetailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    backgroundColor: "#F8F8FC",
    width: "48%",
    borderRadius: 16,
    padding: 12,
    marginVertical: 10,
    minHeight: 125,
    justifyContent: "space-between",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingVertical: 10,
  },
  cardIcon: {
    width: 16,
    height: 16,
  },
  cardTitle: {
    fontSize: 10,
    marginLeft: 3,
    color: "#004693",
    fontFamily: Fonts.SemiBold,
  },
  cardSubTitle: {
    fontSize: 8,
    color: Colors.text,
    fontFamily: Fonts.Medium,
    marginTop: 4,
  },
  cardBtnHeading: {
    fontSize: 24,
    fontFamily: Fonts.Bold,
    color: '#141514'
  },
  cardSubText: {
    fontSize: 10,
    color: Colors.textLight,
    fontFamily: Fonts.Medium
  },
  cardCountContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  cardCountSection: {
    backgroundColor: Colors.bg,
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  navigateIconSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  cardView: {
    backgroundColor: "#F2F2F7",
    justifyContent: "space-between",
  },
  careTeamContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 0

  },
  eachTeamMember: {
    width: "30%",
    alignItems: "center",
    marginBottom: 15,

  },
  careTeamMember: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#D8DFF7",
    alignItems: "center",
  },
  memberText: {
    color: Colors.text,
    fontFamily: Fonts.Medium,
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
  },

  careTeamMemberImg: {
    height: 52,
    width: 52,
    resizeMode: "cover",
  },
  summarySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 15,
    columnGap: 1,
  },
  summaryDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#F2F2F7",
    width: width / 2.25,
  },
  summaryText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.primary,
    width: "70%",
    fontSize: 12,
  },
  summaryImg: {
    height: 52,
    width: 65,
    resizeMode: "contain",
  },
});
export default styles;
