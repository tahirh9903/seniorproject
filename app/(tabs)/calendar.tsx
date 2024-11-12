import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  // Function to handle date selection
  const onDayPress = (day: { dateString: React.SetStateAction<string>; }) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendar Screen</Text>
      <Calendar
        onDayPress={onDayPress}  // Called when a date is selected
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' }
        }}
      />
      {selectedDate ? (
        <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
      ) : (
        <Text style={styles.selectPrompt}>Please select a date</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  selectedDateText: {
    marginTop: 16,
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
  selectPrompt: {
    marginTop: 16,
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});
