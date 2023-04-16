import { useState, useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import LikeImage from '../../../assets/images/like.png';
import { Entypo, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { S3Image } from 'aws-amplify-react-native';
import { DataStore } from 'aws-amplify';
import { User } from '../../../src/models';

const dummy_img = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const FeedPost = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    DataStore.query(User, post.postUserId).then(setUser);
  }, []);

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Profile', { id: post.postUserId })}>
          {user?.image ? (
            <S3Image imgKey={user.image} style={styles.profileImage} />
          ) : (
            <Image source={{ uri: dummy_img }} style={styles.profileImage} />
          )}
        </Pressable>
        <View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo name="dots-three-horizontal" size={18} color="gray" style={styles.icon} />
      </View>
      {/* Body */}
      {post.description && <Text style={styles.description}>{post.description}</Text>}
      {post.image && <S3Image imgKey={post.image} style={styles.image} />}
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
