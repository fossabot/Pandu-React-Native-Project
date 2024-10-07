import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const VerticalDetailsScreen = ({ route, navigation }) => {
  const { vertical } = route.params;
  const [activeTab, setActiveTab] = useState('Projects');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Projects':
        const projects = [
          { id: '1', name: 'Project Alpha', lead: 'John Doe', members: 10 },
          { id: '2', name: 'Project Beta', lead: 'Jane Smith', members: 15 },
        ];

        return (
          <FlatList
            data={projects}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>Lead: {item.lead}</Text>
                <Text style={styles.cardDescription}>Members: {item.members}</Text>
              </View>
            )}
            contentContainerStyle={styles.listContainer}
          />
        );

      case 'Employees':
        const employees = [
          { id: 'E001', name: 'Alice Johnson', experience: '5 years', email: 'alice@example.com' },
          { id: 'E002', name: 'Bob Williams', experience: '3 years', email: 'bob@example.com' },
        ];

        return (
          <FlatList
            data={employees}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('EmployeeDetailsScreen', { employee: item })}
              >
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>Experience: {item.experience}</Text>
                <Text style={styles.cardDescription}>Email: {item.email}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContainer}
          />
        );

      case 'Tech Stack':
        const techStack = [
          { id: '1', name: 'Java', contact: 'Charlie Brown', members: 8 },
          { id: '2', name: 'React', contact: 'Dave Smith', members: 5 },
        ];

        return (
          <FlatList
            data={techStack}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>Point of Contact: {item.contact}</Text>
                <Text style={styles.cardDescription}>Members: {item.members}</Text>
              </View>
            )}
            contentContainerStyle={styles.listContainer}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.verticalName}>Vertical: {vertical.name}</Text>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => setActiveTab('Projects')}
          style={activeTab === 'Projects' ? styles.activeTab : styles.tab}
        >
          <Text style={activeTab === 'Projects' ? styles.activeTabText : styles.tabText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Employees')}
          style={activeTab === 'Employees' ? styles.activeTab : styles.tab}
        >
          <Text style={activeTab === 'Employees' ? styles.activeTabText : styles.tabText}>Employees</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Tech Stack')}
          style={activeTab === 'Tech Stack' ? styles.activeTab : styles.tab}
        >
          <Text style={activeTab === 'Tech Stack' ? styles.activeTabText : styles.tabText}>Tech Stack</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {renderTabContent()}
      </View>
    </View>
  );
};

export default VerticalDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F9FC', // Light background color for the screen
  },
  verticalName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker color for the vertical name
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  activeTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff', // Primary color for active tab
    borderRadius: 10,
  },
  tabText: {
    color: '#333', // Darker color for tab text
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff', // White color for active tab text
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background for content
    borderRadius: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff', // Primary color for card titles
  },
  cardDescription: {
    fontSize: 14,
    color: '#555', // Slightly darker color for card descriptions
  },
});
