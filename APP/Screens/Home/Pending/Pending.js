import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Message from './Message';

const Pending = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Today</Text>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </View>
  )
};

export default Pending;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop:10,
        backgroundColor:'#EFFAE5',
        
    },
    text1:{
        color:'#136207',
        fontFamily:'Hank_black',
        fontSize:18,
        marginTop:20
    }
})