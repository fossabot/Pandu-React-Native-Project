
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostCard = ({ post }) => {
  return (
    <View style={styles.card}>
      {post.type === 'Anniversary' && post.image && <Image source={{ uri: post.image }} style={styles.image} />}
      <Text style={styles.type}>{post.type}</Text>
      <Text style={styles.comment}>{post.comment.length > 150 ? `${post.comment.substring(0, 150)}...` : post.comment}</Text>
      <Text style={styles.details}>
        {post.commentedBy} | {post.date}
      </Text>
    </View>
  );
};

export default PostCard;

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
  comment: {
    marginBottom: 5,
  },
  details: {
    color: '#777',
    fontSize: 12,
  },
});
