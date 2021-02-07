import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import CustomText from '../components/CustomText';
import CustomListItem from '../components/CustomListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>Red jacket for sale</CustomText>
        <CustomText style={styles.price}>$100</CustomText>
        <View style={styles.userContainer}>
          <CustomListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
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
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
