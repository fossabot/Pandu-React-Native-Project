import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'; // Import from react-native-elements

import ProfileScreen from './ProfileScreen';
import EmployeeListScreen from './EmploymentScreen';
import DashboardScreen from './DashboardScreen';
import DailyUpdatesScreen from './DailyUpdatesScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
      <Tab.Navigator
        
        screenOptions={{
          
          headerStyle: {
            backgroundColor: '#2980B9', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
          tabBarStyle: {
            backgroundColor: '#3498DB', 
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ccc',
        }}
      >
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} />
              
            ),
          }} 
        />
        <Tab.Screen 
          name="Employee List" 
          component={EmployeeListScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="group" color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="dashboard" color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Post" 
          component={DailyUpdatesScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="post-add" color={color} />
            ),
          }} 
        />
      </Tab.Navigator>
  );
};

export default HomeScreen;
