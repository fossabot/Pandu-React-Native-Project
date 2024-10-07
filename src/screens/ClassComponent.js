// src/components/MyForm.js
import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, Image, ScrollView } from 'react-native';
import {commonStyles} from '../utils/styles/commonStyles';
class MyForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    errors: {},
  };

  validateForm = () => {
    const { firstName, lastName, email, phone } = this.state;
    const errors = {};

    if (!firstName) errors.firstName = 'First name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = 'Valid email is required';
    if (!phone || !/^\d{10}$/.test(phone)) errors.phone = 'Phone number must be 10 digits';

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = () => {
    if (this.validateForm()) {
      Alert.alert('Form Submitted', 'All fields are valid!');

    }
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { firstName, lastName, email, phone, errors } = this.state;

    return (
        <View style={commonStyles.container}>
          <Text style={{ fontSize: 30, fontWeight: 700 }} >FIRST ASSESSMENT</Text>
          <View>

            <Text style={{ fontSize: 24 }}>
              SEE View
            </Text>

            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' }}  // Sea view image URL
              style={{ width: 300, height: 200, resizeMode: 'contain', marginBottom: 16 }}
            />



          </View>
          <Text style={{ fontSize: 30, fontWeight: 700 }}> SECOND ASSESSMENT</Text>
          <Text style={commonStyles.label}>First Name:</Text>
          <TextInput
            style={commonStyles.input}
            value={firstName}
            onChangeText={(text) => this.handleChange('firstName', text)}
          />
          {errors.firstName && <Text style={commonStyles.error}>{errors.firstName}</Text>}

          <Text style={commonStyles.label}>Last Name:</Text>
          <TextInput
            style={commonStyles.input}
            value={lastName}
            onChangeText={(text) => this.handleChange('lastName', text)}
          />
          {errors.lastName && <Text style={commonStyles.error}>{errors.lastName}</Text>}

          <Text style={commonStyles.label}>Email:</Text>
          <TextInput
            style={commonStyles.input}
            value={email}
            onChangeText={(text) => this.handleChange('email', text)}
            keyboardType="email-address"
          />
          {errors.email && <Text style={commonStyles.error}>{errors.email}</Text>}

          <Text style={commonStyles.label}>Phone Number:</Text>
          <TextInput
            style={commonStyles.input}
            value={phone}
            onChangeText={(text) => this.handleChange('phone', text)}
            keyboardType="phone-pad"
          />
          {errors.phone && <Text style={commonStyles.error}>{errors.phone}</Text>}

          <View style={{ marginTop: 20 }}>
          <Button
            title="Submit"
            onPress={this.handleSubmit}
          />
        </View>
        </View>
      
    );
  }
}

export default MyForm;
