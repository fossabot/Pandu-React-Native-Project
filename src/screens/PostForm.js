// PostForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const PostForm = ({ onClose }) => {
  const [comment, setComment] = useState('');
  const [type, setType] = useState('Anniversary');
  const [years, setYears] = useState('1');

  const handleSubmit = () => {
    if (comment.length < 100 || comment.length > 1000) {
      Alert.alert('Comment must be between 100 and 1000 characters');
      return;
    }
    
    onClose(); 
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create a Post</Text>

      <TextInput
        placeholder="Write your comment here..."
        value={comment}
        onChangeText={setComment}
        multiline
        style={styles.input}
      />

      <TouchableOpacity onPress={() => setType(type === 'Anniversary' ? 'Birthday' : 'Anniversary')} style={styles.dropdown}>
        <Text style={styles.dropdownText}>Type: {type}</Text>
      </TouchableOpacity>

      {type === 'Anniversary' && (
        <TouchableOpacity onPress={() => setYears(years === '1' ? '2' : '1')} style={styles.dropdown}>
          <Text style={styles.dropdownText}>Years: {years}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={() => { setComment(''); setType('Anniversary'); setYears('1'); }}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={onClose}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PostForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '90%', // 90% of the screen width
  }
  ,
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 120,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  dropdown: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#4CAF50', 
  },
  resetButton: {
    backgroundColor: '#FF9800', 
  },
  closeButton: {
    backgroundColor: '#F44336', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
