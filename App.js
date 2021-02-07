import React from 'react';
import { StyleSheet } from 'react-native';

// SCREENS
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen />;
  // return <LoginScreen />;
  // return <ListingsScreen />;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  // return <AccountScreen />;
  // return <MessagesScreen />;
}

const styles = StyleSheet.create({});
