import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Help = () => {
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff', padding:10}}>
      <Text style={{ fontFamily:'Montserrat-bold', fontSize:23, marginTop:20, marginBottom:20 }}>What do you need help with?</Text>
      <TouchableOpacity style={{ }}>
        <Text style={{ fontFamily:'Montserrat-bold', fontSize:15, marginTop:20 }}>How to confirm payments</Text>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:20}}></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ }}>
        <Text style={{ fontFamily:'Montserrat-bold', fontSize:15, marginTop:20 }}>How to add an Image</Text>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:20}}></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ }}>
        <Text style={{ fontFamily:'Montserrat-bold', fontSize:15, marginTop:20 }}>How to make payments</Text>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:20}}></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ }}>
        <Text style={{ fontFamily:'Montserrat-bold', fontSize:15, marginTop:20 }}>How to Contact us</Text>
        <View style={{ backgroundColor:'#D9D9D9', height:1, width:'95%', marginTop:20}}></View>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default Help;