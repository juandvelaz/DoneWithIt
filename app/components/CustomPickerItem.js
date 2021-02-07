import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import CustomText from './CustomText';

function CustomPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText style={styles.text}>{item.label}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default CustomPickerItem;
