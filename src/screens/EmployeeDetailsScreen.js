import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const EmployeeDetailsScreen = ({ route }) => {
  const { employee } = route.params;
  const [activeTab, setActiveTab] = useState('Projects');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Projects':
        const projects = [
          { id: '1', name: 'Progress Rail', description: 'An application for Locomotive Tracking System.' },
          { id: '2', name: 'Qount', description: 'An Application for Project Management' },
          { id: '3', name: 'UnifyCare', description: 'An application for Hospital Management.' },
          { id: '4', name: 'PreonBoarding', description: 'An Application for onboarding' },
        ];

        return (
          <FlatList
            data={projects}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            )}
          />
        );
      case 'Tech Stack Details':
        return (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Primary Skills</Text>
              <Text style={styles.cardDescription}>JavaScript, TypeScript</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Secondary Skills</Text>
              <Text style={styles.cardDescription}>React Native, Redux</Text>
            </View>
          </View>
        );
      case 'Org Structure':
        return (
          <View style={styles.orgStructure}>
            <View style={styles.levelCard}>
              <View style={styles.levelContent}>
                <Text style={styles.cardTitle}>Manager</Text>
                <Text style={styles.cardDescription}>John Doe</Text>
              </View>
              <View style={styles.verticalLine}></View>
              <View style={styles.levelContent}>
                <Text style={styles.cardTitle}>Lead</Text>
                <Text style={styles.cardDescription}>Jane Smith</Text>
              </View>
              <View style={styles.verticalLine}></View>
              <View style={styles.levelContent}>
                <Text style={styles.cardTitle}>Me</Text>
                <Text style={styles.cardDescription}>Michael Lee</Text>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setActiveTab('Projects')} style={activeTab === 'Projects' ? styles.activeTab : styles.tab}>
          <Text style={activeTab === 'Projects' ? styles.activeTabText : styles.tabText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Tech Stack Details')} style={activeTab === 'Tech Stack Details' ? styles.activeTab : styles.tab}>
          <Text style={activeTab === 'Tech Stack Details' ? styles.activeTabText : styles.tabText}>Tech Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Org Structure')} style={activeTab === 'Org Structure' ? styles.activeTab : styles.tab}>
          <Text style={activeTab === 'Org Structure' ? styles.activeTabText : styles.tabText}>Org Structure</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {renderTabContent()}
      </View>
    </View>
  );
};

export default EmployeeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f9fc',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#dfe6f0',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2c82c9',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#7f8c8d',
    fontWeight: '600',
    fontSize: 14,
  },
  activeTabText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  card: {
    backgroundColor: '#eef4fb',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  orgStructure: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  levelCard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  levelContent: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#eef4fb',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width : '100%'
  },
  verticalLine: {
    width: 2,
    height: 60,
    backgroundColor: '#3498db',
  },
});
