import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  const image = { uri: 'https://picsum.photos/1242/2688' };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView>
          <Text style={styles.text}>Hello World!</Text>
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
