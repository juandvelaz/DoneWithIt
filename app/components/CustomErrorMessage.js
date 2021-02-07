import React from 'react';
import { StyleSheet } from 'react-native';

import CustomText from './CustomText';

function CustomErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <CustomText style={styles.error}>{error}</CustomText>;
}
const styles = StyleSheet.create({
  error: { color: 'red' },
});

export default CustomErrorMessage;
