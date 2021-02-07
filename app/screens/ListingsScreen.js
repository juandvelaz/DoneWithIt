import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import CustomCard from '../components/CustomCard';
import CustomScreen from '../components/CustomScreen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

function ListingsScreen(props) {
  return (
    <CustomScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <CustomCard
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
