import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './APP/Navigation/RootNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <MainStack/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
});
