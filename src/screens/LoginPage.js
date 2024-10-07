import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false); 
  const [otp, setOtp] = useState(new Array(6).fill('')); 
  const otpRefs = useRef([]);

  useFocusEffect(
    React.useCallback(() => {
      setEmail('');
      setIsOTPSent(false);
      setOtp(new Array(6).fill(''));
    }, [])
  );

  const handleLogin = () => {
    if (email.trim() === '') {
      Alert.alert('Login Failed', 'Please enter a valid email');
      return;
    }
    
    if (!email.endsWith('@gmail.com')) {
      Alert.alert('Invalid Email', 'Email must contain "@gmail.com"');
      return;
    }

    setIsOTPSent(true);
    Alert.alert('OTP Sent', `An OTP has been sent to ${email}`);
  };

  const handleOTPVerify = () => {
    if (otp.join('').length === 6) {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid 6-digit OTP');
    }
  };

  const handleOtpChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== '' && index < otp.length - 1) {
      otpRefs.current[index + 1].focus();
    }

    if (text === '' && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Bilvantis</Text>
      {!isOTPSent ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#7f8c8d"
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (otpRefs.current[index] = el)} 
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace' && otp[index] === '') {
                    if (index > 0) {
                      otpRefs.current[index - 1].focus();
                    }
                  }
                }}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleOTPVerify}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f6f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',
    fontSize: 18,
    color: '#34495e',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    height: 50,
    width: 50,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#ecf0f1',
    color: '#34495e',
  },
  button: {
    backgroundColor: '#16a085',
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#16a085',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
