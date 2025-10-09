import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import { Colors, Fonts } from "@/constants/theme";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const questions = [
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
const SurveyQuestionScreen = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const totalQuestions = questions.length;
  const progressWidth = ((current + 1) / totalQuestions) * 100;

  const nextQuestion = () => {
    // if (current === totalQuestions) {
    //   //   navigateScreen(Routes.s);
    // }
    if (current < totalQuestions - 1) {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    }
  };

  const currentQuestion = questions[current];
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: Colors.surface_bg }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={styles.container}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progressWidth}%` }]} />
        </View>

        {/* Question Number */}
        <Text style={styles.questionNumber}>
          {`${current + 1}/${totalQuestions}`}
        </Text>

        {/* Question Text */}
        <Text style={styles.questionText}>{currentQuestion.question}</Text>

        {/* Options */}
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton]}
            onPress={() => setSelected(index)}
          >
            <View style={styles.radioCircle}>
              {selected === index && <View style={styles.selectedRb} />}
            </View>
            <Text style={[styles.optionText]}>{option}</Text>
          </TouchableOpacity>
        ))}

        {/* Navigation Buttons */}
        {current === totalQuestions - 1 ? (
          <CommonButton
            title="Done"
            backgroundColor={Colors.black}
            color={Colors.bg}
            onPress={() => navigateScreen(Routes.SurveyCompleteScreen)}
            style={{ marginTop: "auto", marginBottom: 15 }}
          />
        ) : (
          <View style={styles.navButtons}>
            <CommonButton
              title="Previous"
              onPress={prevQuestion}
              style={styles.prevButton}
              disabled={current === 0}
            />
            <CommonButton
              title="Next"
              backgroundColor={Colors.black}
              color={Colors.bg}
              onPress={nextQuestion}
              disabled={selected === null}
              style={[
                styles.nextButton,
                { backgroundColor: selected !== null ? "#000" : "#999" },
              ]}
            />
            {/* <TouchableOpacity
            style={styles.prevButton}
            onPress={prevQuestion}
            disabled={current === 0}
          >
            <Text style={styles.prevText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              { backgroundColor: selected !== null ? "#000" : "#999" },
            ]}
            onPress={nextQuestion}
            disabled={selected === null}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity> */}
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default SurveyQuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  progressContainer: {
    height: 4,
    backgroundColor: "#eee",
    borderRadius: 3,
    overflow: "hidden",
    marginTop: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#007AFF",
  },
  questionNumber: {
    fontSize: 13,
    color: "#007AFF",
    marginTop: 15,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 20,
    fontFamily: Fonts.Bold,
    color: "##3B3D3B",
  },
  optionButton: {
    padding: 16,
    backgroundColor: Colors.surface_bg,
    borderRadius: 12,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
  },
  optionText: {
    color: Colors.text,
    fontFamily: Fonts.Regular,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingVertical: 20,
  },
  prevButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginRight: 10,
  },
  prevText: {
    color: Colors.black,
    fontWeight: "500",
  },
  nextButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  nextText: {
    color: Colors.bg,
    fontWeight: "500",
  },
  radioCircle: {
    height: 16,
    width: 16,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#757575",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#1E1E1E",
  },
});
