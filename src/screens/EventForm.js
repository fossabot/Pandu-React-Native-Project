import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EventForm = ({ onClose }) => {
  const [eventType, setEventType] = useState('Open House');
  const [eventDuration, setEventDuration] = useState('30 Min');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [otherEventType, setOtherEventType] = useState('');

  const handleSubmit = () => {
    if (eventDescription.length < 200 || eventDescription.length > 1000) {
      Alert.alert('Description must be between 200 and 1000 characters');
      return;
    }
    
    onClose(); 
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create an Event</Text>

     
      <TouchableOpacity
        onPress={() => setEventType(eventType === 'Open House' ? 'Other' : 'Open House')}
        style={styles.dropdown}
      >
        <Text style={styles.dropdownText}>Event Type: {eventType}</Text>
      </TouchableOpacity>
      {eventType === 'Other' && (
        <TextInput
          placeholder="Specify Other Event Type"
          value={otherEventType}
          onChangeText={setOtherEventType}
          style={styles.input}
        />
      )}

     
      <TouchableOpacity
        onPress={() => setEventDuration(eventDuration === '30 Min' ? '60 Min' : '30 Min')}
        style={styles.dropdown}
      >
        <Text style={styles.dropdownText}>Event Duration: {eventDuration}</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Event Description"
        value={eventDescription}
        onChangeText={setEventDescription}
        multiline
        style={styles.textArea}
      />

      
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dropdown}>
        <Text style={styles.dropdownText}>Event Date: {eventDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={eventDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setEventDate(selectedDate);
          }}
        />
      )}

     
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

     
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => {
          setEventType('Open House');
          setEventDuration('30 Min');
          setEventDescription('');
          setOtherEventType('');
          setEventDate(new Date());
        }}
      >
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>

     
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EventForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '100%',
    paddingBottom:10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdown: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
  },
  dropdownText: {
    color: '#333',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  resetButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});

