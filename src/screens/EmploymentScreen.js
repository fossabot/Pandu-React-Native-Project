import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const employees = [
  { id: '1', name: 'Aarav Sharma', designation: 'Software Engineer' },
  { id: '2', name: 'Priya Verma', designation: 'Project Manager' },
  { id: '3', name: 'Rahul Singh', designation: 'Data Analyst' },
  { id: '4', name: 'Ananya Iyer', designation: 'UX Designer' },
  { id: '5', name: 'Vikram Patel', designation: 'Marketing Specialist' },
  { id: '6', name: 'Kavya Rao', designation: 'HR Manager' },
  { id: '7', name: 'Rohan Mehta', designation: 'Backend Developer' },
  { id: '8', name: 'Sneha Gupta', designation: 'Frontend Developer' },
  { id: '9', name: 'Akash Nair', designation: 'DevOps Engineer' },
  { id: '10', name: 'Neha Deshmukh', designation: 'QA Engineer' }
];

const EmployeeListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.employeeCard}
      onPress={() => navigation.navigate('EmployeeDetailsScreen', { employee: item })}
    >
      <Text style={styles.employeeName}>{item.name}</Text>
      <Text style={styles.employeeDesignation}>{item.designation}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EmployeeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F6F9',
  },
  employeeCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // Applies shadow on Android
    borderColor: '#D1D9E6',
    borderWidth: 1,
    flexDirection: 'row', // Aligns items side by side (name and designation)
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
  },
  employeeDesignation: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
});
