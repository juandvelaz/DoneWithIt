import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomIcon from './CustomIcon';
import CustomText from './CustomText';

function CustomCategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <CustomIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <CustomText style={styles.label}>{item.label}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CustomCategoryPickerItem;
