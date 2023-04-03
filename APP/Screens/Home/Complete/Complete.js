import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Message from './Message';

const Complete = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Today</Text>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </View>
  )
};

export default Complete;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop:10,
        backgroundColor:'#f4fdf4',
        
    },
    text1:{
        fontWeight:'bold',
        color:'#136207'
    }
})