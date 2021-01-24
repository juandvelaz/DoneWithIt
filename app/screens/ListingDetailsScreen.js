import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '500',
  },
});

export default ListingDetailsScreen;
