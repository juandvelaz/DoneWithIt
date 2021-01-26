import React from 'react';
import { StyleSheet } from 'react-native';

// COMPONENTS
import AppScreen from './app/components/AppScreen';
import AppTextInput from './app/components/AppTextInput';

// SCREENS
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({});
