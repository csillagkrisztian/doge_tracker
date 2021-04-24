import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require('./images/doge.jpeg')}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBEDC8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode:'center',
  }
});
