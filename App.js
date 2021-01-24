import React from 'react';
import { StyleSheet, View } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';

export default function App() {
  // <WelcomeScreen />
  // <ViewImageScreen />;
  // <AppButton title="Login" />;
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
