import React from 'react';
import { StyleSheet, View } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';

export default function App() {
  // <WelcomeScreen />
  // <ViewImageScreen />;
  // <AppButton title="Login" />;
  return (
    <View style={styles.container}>
      <AppCard
        title="Red jacket for sale"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
  },
});
