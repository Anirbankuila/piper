import { CategoryWiseSurvey, Questions } from "../Interface/Sruvey";
const questions: Questions[] = [
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
];
const epilepsyQuestions: Questions[] = [
  {
    id: 1,
    question: "Activity before event",
    options: ["Resting", "Sleeping", "Walking", "Exercising", "Eating"],
    isInputEnable: true,
    inputPlaceholder: "Others",
    inputType: "default",
  },
  {
    id: 2,
    question: "Recent illness/fever/infection?",
    options: ["Yes", "No"],
    isInputEnable: true,
    inputPlaceholder: "Others",
    inputType: "default",
  },
  {
    id: 3,
    question: "Head injury in past 24 hrs?",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    question: "Recent illness/fever/infection?",
    options: ["Yes", "No"],
    isInputEnable: true,
    inputPlaceholder: "Others",
    inputType: "default",
  },
  {
    id: 5,
    question: "Missed medication dose?",
    options: ["Yes", "No"],
    isInputEnable: true,
    inputPlaceholder: "Others",
    inputType: "default",
  },
  {
    id: 6,
    question: "Sleep deprivation?",
    options: ["Yes", "No"],
  },
  {
    id: 7,
    question: "Aura/warning signs (check all that apply):",
    isMultipleSelection: true,
    options: [
      "Odd smell",
      "Strange taste",
      "Weakness",
      "Strange taste",
      "Vision changes",
      "Tingling",
      "Déjà vu",
      "Fear/anxiety",
      "Nausea",
    ],
    isInputEnable: true,
    inputPlaceholder: "Others",
    inputType: "default",
  },
  // {
  //   id: 8,
  //   question: "Time",
  //   options: [],
  // },
  {
    id: 9,
    question: "Consciousness",
    options: ["Fully aware", "Partial awareness", "Unconscious"],
  },
  {
    id: 10,
    question: "Movements",
    options: [
      "Stiffening",
      "Rhythmic jerking",
      "Twitching",
      "Limp/collapse",
      "One-sided",
      "Whole body",
    ],
  },
  {
    id: 11,
    question: "Breathing",
    options: [
      "Stopped",
      "Noisy",
      "Twitching",
      "Limp/collapse",
      "Irregular",
      "Normal",
    ],
  },
  {
    id: 12,
    question: "Eyes",
    options: [
      "Stopped",
      "Noisy",
      "Twitching",
      "Limp/collapse",
      "Irregular",
      "Normal",
    ],
  },
  {
    id: 13,
    question: "Skin color",
    options: ["Normal", "Pale", "Bluish"],
  },
  {
    id: 14,
    question: "Injuries",
    options: ["Tongue bite (front/side)", "Head injury", "Bluish"],
    isInputEnable: true,
    inputPlaceholder: "Others",
    inputType: "default",
  },
  {
    id: 15,
    question: "Bladder/bowel control lost?",
    options: ["Yes", "No"],
  },
  {
    id: 16,
    question: "Post-seizure symptoms",
    options: ["Confusion", "Sleepiness", "Headache", "Difficulty speaking"],
    isInputEnable: true,
    inputPlaceholder: "Others",
    inputType: "default",
  },
  // {
  //   id: 17,
  //   question: "Return to baseline",
  //   options: [],
  //   isInputEnable: true,
  //   inputPlaceholder: "Others",
  //   inputType: "default",
  // },
  {
    id: 18,
    question: "Memory of event",
    options: ["Full", "Partial", "None"],
  },
  // {
  //   id: 19,
  //   question: "Post-seizure symptoms",
  //   options: ["Confusion", "Sleepiness", "Headache", "Difficulty speaking"],
  //   isInputEnable: true,
  //   inputPlaceholder: "Others",
  //   inputType: "default",
  // },
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
    questions: epilepsyQuestions,
    headerTitle: "Before the Seizure",
    bannerPageTitle: "Epilepsy Survey",
  },
];
