import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Message from './Message';
import Test from './Test';

const Pending = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Today</Text>
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
      
        
    },
    text1:{
        color:'#002C11',
        fontFamily:'Montserrat-bold',
        fontSize:18,
        marginTop:20
    }
})