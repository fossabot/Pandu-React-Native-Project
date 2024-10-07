// EventCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCard = ({ event }) => {
  return (
    <View style={styles.card}>
      {event.image && <Image source={{ uri: event.image }} style={styles.image} />}
      <Text style={styles.type}>{event.type}</Text>
      <Text style={styles.details}>{event.description}</Text>
      <Text style={styles.details}>
        {event.createdBy} | {event.date}
      </Text>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  type: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    color: '#777',
    fontSize: 12,
  },
});
