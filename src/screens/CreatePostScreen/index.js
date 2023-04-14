import { View, Text, Image, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
const user = {
  id: 'u1',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

const CreatePostScreen = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const onSubmit = () => {
    console.warn('Submit post', description);
    setDescription('');
    navigation.goBack();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={110}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo onPress={pickImage} name="images" size={24} color="limegreen" style={styles.icon} />
      </View>

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="What is on your mind?"
        multiline
      />
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePostScreen;
