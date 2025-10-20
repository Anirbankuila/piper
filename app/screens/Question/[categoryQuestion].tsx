import { SurveyDemoData } from "@/app/common/data/surveyDemoData";
import { Questions } from "@/app/common/Interface/Sruvey";
import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import { Colors, Fonts } from "@/constants/theme";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const SurveyQuestionScreen = () => {
  const { categoryQuestion } = useLocalSearchParams<{
    categoryQuestion: string;
  }>();
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const surveyData = SurveyDemoData.find(
      (s) => s.categoryName === categoryQuestion
    );

    if (surveyData?.questions && Array.isArray(surveyData.questions)) {
      setQuestions(surveyData.questions);
    } else {
      setQuestions([]);
    }

    setCurrent(0);
    setSelected(null);
  }, [categoryQuestion]);

  const totalQuestions = questions.length;
  const progressWidth = totalQuestions
    ? ((current + 1) / totalQuestions) * 100
    : 0;

  const nextQuestion = () => {
    if (current < totalQuestions - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
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
        {/* {currentQuestion.isInputEnable && <CommonInput />} */}

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
    backgroundColor: Colors.primary,
  },
  questionNumber: {
    fontSize: 13,
    color: Colors.primary,
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
