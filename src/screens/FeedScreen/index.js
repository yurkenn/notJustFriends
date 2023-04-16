import React, { useEffect, useState } from 'react';
import { Pressable, Text, FlatList, Image } from 'react-native';
import '@azure/core-asynciterator-polyfill';
import FeedPost from '../../components/FeedPost';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Post } from '../../../src/models';

const img = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const FeedScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const subscription = DataStore.observeQuery(Post, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    }).subscribe(({ items }) => setPosts(items));

    return () => subscription.unsubscribe();
  }, []);

  const createPost = () => {
    navigation.navigate('Create Post');
  };

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          <Image source={{ uri: img }} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo name="images" size={24} color="limegreen" style={styles.icon} />
        </Pressable>
      )}
    />
  );
};

export default FeedScreen;
