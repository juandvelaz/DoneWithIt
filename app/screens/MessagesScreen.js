import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AppListItem from '../components/AppListItem';
import AppListItemDeleteAction from '../components/AppListItemDeleteAction';
import AppListItemSeperator from '../components/AppListItemSeperator';
import AppScreen from '../components/AppScreen';

const initilaMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/mosh.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initilaMessages);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => {
          return (
            <AppListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('Message selected', item)}
              renderRightActions={() => {
                return (
                  <AppListItemDeleteAction onPress={() => handleDelete(item)} />
                );
              }}
            />
          );
        }}
        ItemSeparatorComponent={AppListItemSeperator}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
