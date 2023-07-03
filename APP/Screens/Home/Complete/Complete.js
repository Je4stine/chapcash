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
        backgroundColor:'#fff',
        
    },
    text1:{
        color:'#002C11',
        fontFamily:'Montserrat-bold',
        fontSize:18,
        marginTop:20
    }
})