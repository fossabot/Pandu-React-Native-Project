import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { functionalstyles } from '../utils/styles/commonStyles';

const CricketerList = () => {
    
  const cricketers = [
    { id: '1', name: 'Sachin Tendulkar' },
    { id: '2', name: 'Rahul' },
    { id: '3', name: 'MS Dhoni' },
    { id: '4', name: 'Brian Lara' },
    { id: '5', name: 'AB de Villiers' },
  ];

  const renderItem = ({ item }) => (
    <View style={functionalstyles.item}>
      <Text style={functionalstyles.name}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={cricketers}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default CricketerList;


