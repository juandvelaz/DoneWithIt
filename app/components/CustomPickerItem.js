import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import CustomText from './CustomText';

function CustomPickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText style={styles.text}>{label}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default CustomPickerItem;
