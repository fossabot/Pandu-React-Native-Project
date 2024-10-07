import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [userData] = useState({
    username: 'Pandu Jakkula', 
    loginTime: '09:00 AM',
    activeHours: '8 hours',
    logoutTime: '05:00 PM',
  });

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('LoginScreen'),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>{userData.username}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Login Time</Text>
          <Text style={styles.value}>{userData.loginTime}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Active Hours</Text>
          <Text style={styles.value}>{userData.activeHours}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Logout Time</Text>
          <Text style={styles.value}>{userData.logoutTime}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 25,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7F8C8D',
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#34495E',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%',
    shadowColor: '#16a085',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
