import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import CustomListItem from '../components/CustomListItem';
import CustomListItemDeleteAction from '../components/CustomListItemDeleteAction';
import CustomListItemSeperator from '../components/CustomListItemSeperator';
import CustomScreen from '../components/CustomScreen';

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
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <CustomScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => {
          return (
            <CustomListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('Message selected', item)}
              renderRightActions={() => {
                return (
                  <CustomListItemDeleteAction
                    onPress={() => handleDelete(item)}
                  />
                );
              }}
            />
          );
        }}
        ItemSeparatorComponent={CustomListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: 'T4',
              description: 'D4',
              image: require('../assets/mosh.jpg'),
            },
          ]);
        }}
      />
    </CustomScreen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
