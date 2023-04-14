import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './assets/data/posts.json';

export default function App() {
  const renderItem = ({ item }) => <FeedPost post={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={posts} renderItem={renderItem} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
