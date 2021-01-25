import React from 'react';
import { StyleSheet } from 'react-native';
import AppIcon from './app/components/AppIcon';

import AppListItem from './app/components/AppListItem';
import AppScreen from './app/components/AppScreen';

export default function App() {
  return (
    <AppScreen>
      <AppListItem
        title="Title"
        subTitle="SubTitle"
        ImageComponent={<AppIcon name="email" />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
