import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: 'Avenir',
      },
      andriod: {
        fontSize: 18,
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default AppText;
