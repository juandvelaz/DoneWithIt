import React from 'react';
import { StyleSheet } from 'react-native';

import AppScreen from './app/components/AppScreen';
import AppIcon from './app/components/AppIcon';

export default function App() {
  return (
    <AppScreen>
      <AppIcon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
      ></AppIcon>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
