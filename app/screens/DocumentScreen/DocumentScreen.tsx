import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/outline";
import RBSheet from "react-native-raw-bottom-sheet";
import CommonButton from "../../components/CommonButton/CommonButton";
import CustomRadio from "../../components/Radiobutton/Radiobutton";
import Styles from "./DocumentScreenCss";

// Types
interface Option {
  id: string;
  label: string;
  type?: "dropdown";
}

interface ReminderOption {
  id: string;
  label: string;
}

const DocumentScreen: React.FC = () => {
  const rbSheetRef = useRef<typeof RBSheet>(null);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedReminder, setSelectedReminder] =
    useState<ReminderOption | null>(null);

  const options: Option[] = [
    {
      id: "opt1",
      label:
        "I have at least 10 minutes and would like to start uploading right away",
    },
    {
      id: "opt2",
      label: "I don’t have the time right now send me the reminder in:",
      type: "dropdown",
    },
    { id: "opt3", label: "I want to explore the app on my own for now" },
  ];

  const reminderOptions: ReminderOption[] = [
    { id: "rem1", label: "2 days" },
    { id: "rem2", label: "7 days" },
    { id: "rem3", label: "10 days" },
    { id: "rem4", label: "Tomorrow" },
  ];

  const handleOptionSelect = (id: string) => {
    setSelectedOption(id);
  };

  const handleReminderSelect = (reminder: ReminderOption) => {
    setSelectedReminder(reminder);
    rbSheetRef.current?.close();
  };

  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={Styles.topImageContainer}>
        <Image
          source={require("../../../assets/images/doc_img.png")}
          style={Styles.topImage}
        />
      </View>

      <View style={Styles.content}>
        <Text style={Styles.title}>
          Uploading your child’s documents might take a few minutes- have time
          right now?
        </Text>

        {options.map((option) => {
          if (option.type === "dropdown") {
            return (
              <View key={option.id} style={Styles.optionWrap}>
                <CustomRadio
                  optionStyle={Styles.selectBoxOption}
                  options={[option]}
                  selectedValue={selectedOption}
                  onSelect={handleOptionSelect}
                />

                {selectedOption === option.id && (
                  <TouchableOpacity
                    style={[Styles.reminderDropdown]}
                    onPress={() => rbSheetRef.current?.open()}
                  >
                    <Text
                      style={[
                        selectedReminder
                          ? Styles.textSelected
                          : Styles.textUnselected,
                      ]}
                    >
                      {selectedReminder
                        ? selectedReminder.label
                        : "Select Reminder"}
                    </Text>
                    <ChevronDownIcon style={Styles.inputBoxIcon} />
                  </TouchableOpacity>
                )}
              </View>
            );
          } else {
            return (
              <CustomRadio
                key={option.id}
                optionStyle={Styles.selectBox}
                options={[option]}
                selectedValue={selectedOption}
                onSelect={handleOptionSelect}
              />
            );
          }
        })}

        <RBSheet
          ref={rbSheetRef}
          height={250}
          openDuration={250}
          closeOnDragDown={true}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            },
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 12 }}>
            Select Reminder Time
          </Text>
          {reminderOptions.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={{ paddingVertical: 12 }}
              onPress={() => handleReminderSelect(item)}
            >
              <Text style={{ fontSize: 16 }}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </RBSheet>

        <View style={Styles.bottomButton}>
          <CommonButton
            title="Continue"
            textStyle={Styles.buttonText}
            style={Styles.button}
            onPress={() => router.push("/screens/ChildTeam/ChildTeam")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DocumentScreen;
