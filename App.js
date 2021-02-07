import React from 'react';
import { StyleSheet } from 'react-native';

// SCREENS
import AccountScreen from './app/screens/AccountScreen';
import ListingEditScreen from './app/screens/ListingsEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {
  // return <WelcomeScreen />;
  // return <LoginScreen />;
  return <RegisterScreen />;
  // return <ListingsScreen />;
  // return <ListingDetailsScreen />;
  // return <ListingEditScreen />;
  // return <ViewImageScreen />;
  // return <AccountScreen />;
  // return <MessagesScreen />;
}

const styles = StyleSheet.create({});
