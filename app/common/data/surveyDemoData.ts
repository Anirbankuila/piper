import { CategoryWiseSurvey, Questions } from "../Interface/Sruvey";
export const questions: Questions[] = [
  {
    id: 1,
    question: "When were you formally diagnosed with ADHD?",
    options: ["Never", "Occasionally", "Often", "Very Often"],
  },
  {
    id: 2,
    question: "Are you currently taking steps to manage your ADHD?",
    options: ["Never", "Occasionally", "Often", "Very Often"],
  },
  {
    id: 3,
    question:
      "“My relationship have been negatively impacted by my ADHD symptoms”",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 4,
    question: "I find myself struggling to prioritize my time effectively",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 5,
    question:
      "I find myself struggling with the fear of rejection or criticism",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 6,
    question: "I find myself consumed by negative emotions",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 7,
    question:
      "I act on impulse without fully thinking through the consequences",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 8,
    question: "I find that poor time management interferes with my daily life",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 9,
    question:
      "I find myself struggling to use my time effectively in the morning",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 10,
    question: "I avoid starting or completed tasks",
    options: ["Never", "Sometimes", "Often", "Always"],
  },
  // ... more questions
];
export const SurveyDemoData: CategoryWiseSurvey[] = [
  {
    categoryName: "adhd",
    bannerImage: require("../../../assets/images/portrait-person.png"),
    title: "Welcome To ADHD Tracking",
    description:
      "This assessment uses standardized questions to give you a visualization of the effectiveness of your child’s treatment for ADHD Symptoms",
    questions: questions,
    headerTitle: "ADHD",
    bannerPageTitle: "ADHD",
  },
  {
    categoryName: "epilepsy",
    bannerImage: require("../../../assets/images/epilepsy-survey-bannerImg.png"),
    title: "Welcome To Epilepsy survey",
    description:
      "This assessment uses standardized questions to give you a visualization of the effectiveness of your child’s treatment for epilepsy survey.",
    questions: questions,
    headerTitle: "Before the Seizure",
    bannerPageTitle: "Epilepsy Survey",
  },
];
