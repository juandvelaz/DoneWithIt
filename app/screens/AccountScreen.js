import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import CustomIcon from '../components/CustomIcon';
import CustomListItem from '../components/CustomListItem';
import CustomListItemSeperator from '../components/CustomListItemSeperator';
import CustomScreen from '../components/CustomScreen';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <CustomScreen style={styles.screen}>
      <View style={styles.container}>
        <CustomListItem
          title="Mosh Hamedani"
          subTitle="Programmingwithmosh@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={CustomListItemSeperator}
          renderItem={({ item }) => (
            <CustomListItem
              title={item.title}
              IconComponent={
                <CustomIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <CustomListItem
        title="Log Out"
        IconComponent={<CustomIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
