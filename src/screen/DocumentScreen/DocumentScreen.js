import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Styles from './DocumentScreenCss';
import CustomRadio from '../../components/Radiobutton/Radiobutton';
import CommonButton from '../../components/CommonButton/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon } from 'react-native-heroicons/outline';
import Routes from '../../navigation/Routes';

const DocumentScreen = () => {
  const navigation = useNavigation();
  const rbSheetRef = useRef();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedReminder, setSelectedReminder] = useState(null);

  const options = [
    { id: 'opt1', label: 'I have at least 10 minutes and would like to start uploading right away' },
    { id: 'opt2', label: 'I don’t have the time right now send me the reminder in:', type: 'dropdown' },
    { id: 'opt3', label: 'I want to explore the app on my own for now' },
  ];

  const reminderOptions = [
    { id: 'rem1', label: '2 days' },
    { id: 'rem2', label: '7 days' },
    { id: 'rem3', label: '10 days' },
    { id: 'rem4', label: 'Tomorrow' },
  ];

  const handleOptionSelect = id => {
    setSelectedOption(id);
  };

  const handleReminderSelect = reminder => {
    setSelectedReminder(reminder);
    rbSheetRef.current.close();
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.topImageContainer}>
        <Image
          source={require('../../../assets/images/doc_img.png')}
          style={Styles.topImage}
        />

        <TouchableOpacity style={Styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/back.png')}
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.title}>
          Uploading your child’s documents might take a few minutes- have time right now?
        </Text>

        {options.map(option => {
          if (option.type === 'dropdown') {
            // Option 2 + dropdown wrapper
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
                    style={[
                      Styles.reminderDropdown,
                      selectedReminder
                        ? Styles.reminderSelected
                        : Styles.reminderUnselected,
                    ]}
                    onPress={() => rbSheetRef.current.open()}
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
                        : 'Select Reminder'}
                    </Text>
                    <ChevronDownIcon style={Styles.inputBoxIcon} />
                  </TouchableOpacity>
                )}
              </View>
            );
          } else {
            // Other options
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
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>
            Select Reminder Time
          </Text>
          {reminderOptions.map(item => (
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
            onPress={() => navigation.navigate(Routes.CHILDTEAM)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DocumentScreen;
