import { SurveyDemoData } from "@/app/common/data/surveyDemoData";
import { Questions } from "@/app/common/Interface/Sruvey";
import Routes, { navigateScreen } from "@/app/common/Routes";
import CommonButton from "@/app/components/CommonButton/CommonButton";
import CommonInput from "@/app/components/CommonInput/CommonInput";
import CustomMultiSelect from "@/app/components/CustomCheckbox/CustomCheckbox";
import DatePicker from "@/app/components/Datepicker/DatePicker";
import GenderSelect from "@/app/components/GenderSelect/GenderSelect";
import { Colors, Fonts } from "@/constants/theme";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const surveyData = SurveyDemoData.find(
      (s) => s.categoryName === categoryQuestion
    );
    if (surveyData?.questions && Array.isArray(surveyData.questions)) {
      setQuestions(surveyData.questions);
      navigation.setOptions({
        title: surveyData?.headerTitle,
      });
    } else {
      setQuestions([]);
    }

    setCurrent(0);
    setSelected(null);
  }, [categoryQuestion, navigation]);

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
  const formatOption = (options: string[]) =>
    options.map((opt, index) => ({ id: index, label: opt }));
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
        {currentQuestion && (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* Question Text */}
            <Text style={styles.questionText}>{currentQuestion.question}</Text>

            {/* Options */}
            {!currentQuestion.isMultipleSelection &&
              currentQuestion?.options?.map((option, index) => (
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
            {currentQuestion.isMultipleSelection && (
              <CustomMultiSelect
                optionStyle={styles.selectBox}
                options={formatOption(currentQuestion.options ?? [])}
                selectedValues={selectedValues} // must be an array
                onSelect={(newSelected) => setSelectedValues(newSelected)}
              />
            )}
            {currentQuestion.isInputEnable && (
              <CommonInput
                onChangeText={() => {}}
                placeholder={currentQuestion.inputPlaceholder}
                keyboardType={currentQuestion.inputType}
              />
            )}
            {currentQuestion.childQuestions?.map((child, childIndex) => (
              <React.Fragment key={childIndex}>
                {/* Child Question Text */}
                {child.question && (
                  <Text style={styles.questionText}>{child.question}</Text>
                )}

                {/* Child Options */}
                {child.options?.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => {}}
                  >
                    <View style={styles.radioCircle}>
                      {/* optional: add child-specific selected state */}
                    </View>
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}

                {/* Child Input (if enabled) */}
                {child.isInputEnable && (
                  <CommonInput
                    onChangeText={() => {}}
                    placeholder={child.inputPlaceholder}
                    keyboardType={child.inputType}
                  />
                )}
                {child.isTimeType && (
                  <DatePicker
                    placeHolderText="Set Remainder"
                    isForTimePicker
                    value={new Date()}
                    onChange={(dateTime) => {}}
                  />
                )}
                {child.isDateType && (
                  <DatePicker
                    placeHolderText="Set Remainder"
                    value={new Date()}
                    onChange={(dateTime) => {}}
                  />
                )}
                {child.isDropDownType && (
                  <GenderSelect
                    value={
                      Array.isArray(child.dropDownOptions)
                        ? child.dropDownOptions[0]
                        : ""
                    }
                    placeHolderText="Choose Option"
                    style={{ fontSize: 14, fontFamily: Fonts.Regular }}
                    options={child.dropDownOptions}
                    onChange={
                      (val: string) => {}
                      // updateChildForm(child.id, "gender", val)
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </ScrollView>
        )}

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
              style={[styles.nextButton]}
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
  selectBox: {
    backgroundColor: Colors.surface_bg,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
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
