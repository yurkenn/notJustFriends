import { Pressable, Text, FlatList, Image } from 'react-native';
import React from 'react';
import posts from '../../../assets/data/posts.json';
import FeedPost from '../../components/FeedPost';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

const img = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const FeedScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <FeedPost post={item} />;

  const createPost = () => {
    console.warn('Create Post');
    navigation.navigate('Create Post');
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
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
