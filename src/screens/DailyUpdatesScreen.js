import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import PostCard from './PostCardScreen';
import EventCard from './EventCard';
import PostForm from './PostForm';
import EventForm from './EventForm';
import { Icon } from 'react-native-elements';
import { POST_IMAGES , EVENT_IMAGES } from '../utils/images';

const DailyUpdatesScreen = () => {
  const [activeTab, setActiveTab] = useState('Posts');
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('Post');

  const posts = [
    {
      id: '1',
      type: 'Anniversary',
      comment: 'Happy Anniversary!',
      commentedBy: 'Sharief',
      date: '2024-09-01',
      image: POST_IMAGES.ANNIVERSARY_IMAGE_ONE ,
    },
    {
      id: '2',
      type: 'Anniversary',
      comment: 'Happy Anniversary!',
      commentedBy: 'Pandu Jakkula',
      date: '2024-09-01',
      image: POST_IMAGES.ANNIVERSARY_IMAGE_TWO,
    },
    {
      id: '3',
      type: 'Anniversary',
      comment: 'Happy Anniversary!',
      commentedBy: 'Pavan',
      date: '2024-09-01',
      image: POST_IMAGES.ANNIVERSARY_IMAGE_THREE,
    },
    {
      id: '4',
      type: 'Anniversary',
      comment: 'Happy Anniversary!',
      commentedBy: 'Nishanth',
      date: '2024-09-01',
      image: POST_IMAGES.ANNIVERSARY_IMAGE_FOUR,
    },
    {
      id: '5',
      type: 'Anniversary',
      comment: 'Happy Anniversary!',
      commentedBy: 'Prathyusha',
      date: '2024-09-01',
      image: POST_IMAGES.ANNIVERSARY_IMAGE_FIVE,
    },
    
  ];

  const events = [
    {
      id: '1',
      type: 'Open House',
      duration: '30 Min',
      description: 'Join us for an open house!',
      createdBy: 'HR Team',
      date: '2024-09-10',
      image: EVENT_IMAGES.EVENT_IMAGE_ONE,
    },
    {
      id: '2',
      type: 'Dhandia and Bathukamma',
      duration: '30 Min',
      description: 'Join us for an Dhandia Celebrations',
      createdBy: 'HR Team',
      date: '2024-10-09',
      image: EVENT_IMAGES.EVENT_IMAGE_TWO,
    },
  ];

  const renderContent = () => {
    if (activeTab === 'Posts') {
      return (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostCard post={item} />}
          contentContainerStyle={styles.contentList}
        />
      );
    } else {
      return (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventCard event={item} />}
          contentContainerStyle={styles.contentList}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity 
          onPress={() => { setActiveTab('Posts'); setFormType('Post'); }} 
          style={[styles.tab, activeTab === 'Posts' && styles.activeTab]}
        >
          <Text style={[styles.tabText, activeTab === 'Posts' && styles.activeTabText]}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => { setActiveTab('Events'); setFormType('Event'); }} 
          style={[styles.tab, activeTab === 'Events' && styles.activeTab]}
        >
          <Text style={[styles.tabText, activeTab === 'Events' && styles.activeTabText]}>Events</Text>
        </TouchableOpacity>
      </View>

      {renderContent()}

      <TouchableOpacity style={styles.addButton} onPress={() => { setShowForm(true); }}>
        <Icon name="plus" size={20} type="feather" color="#fff" />
      </TouchableOpacity>

      {/* Full-Screen Modal for the Form */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={showForm}
        onRequestClose={() => setShowForm(false)}
      >
        <View style={styles.modalContainer}>
          {formType === 'Post' ? (
            <PostForm onClose={() => setShowForm(false)} />
          ) : (
            <EventForm onClose={() => setShowForm(false)} />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default DailyUpdatesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f7fa',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  activeTabText: {
    color: '#fff',
  },
  contentList: {
    paddingBottom: 100,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#3498db',
    borderRadius: 50,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
});
