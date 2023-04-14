import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LikeImage from '../../../assets/images/like.png';
import { Entypo, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useState } from 'react';

const FeedPost = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.User.image }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo name="dots-three-horizontal" size={18} color="gray" style={styles.icon} />
      </View>
      {/* Body */}
      {post.description && <Text style={styles.description}>{post.description}</Text>}
      {post.image && <Image source={{ uri: post.image }} style={styles.image} />}
      {/* Footer */}
      <View style={styles.footer}>
        {/* StatsRow */}
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />
          <Text style={styles.likedBy}>Elon Musk {post.numberOfLikes} and others</Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>
        {/* ButtonsRow */}
        <View style={styles.buttonsRow}>
          <Pressable onPress={() => setIsLiked(!isLiked)} style={styles.iconButton}>
            <AntDesign name="like2" size={18} color={isLiked ? 'royalblue' : 'gray'} />
            <Text
              style={[
                styles.iconButtonText,
                {
                  color: isLiked ? 'royalblue' : 'gray',
                },
              ]}
            >
              Like
            </Text>
          </Pressable>

          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>

          <View style={styles.iconButton}>
            <MaterialCommunityIcons name="share-outline" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedPost;
