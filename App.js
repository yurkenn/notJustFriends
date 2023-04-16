import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigator from './src/navigation';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withAuthenticator(App);
