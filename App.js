import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './APP/Navigation/RootNavigation';
import Confirm from './APP/Screens/Home/Confirmation/Confirm';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainStack/> */}
      <Confirm/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
});
