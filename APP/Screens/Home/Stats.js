import { View, Text } from 'react-native';
import React from 'react';

const Stats = () => {
  return (
    <View style={{ justifyContent:'center', alignItems:'center', marginVertical:18}}>
      <View style={{ flexDirection:'row'}}>
        <Text style={{ color:'#136207', marginTop:5}}>Ksh.</Text>
        <Text style={{ fontSize:35, fontWeight:"bold", color:'#136207'}}>25,000</Text>
        <Text style={{ color:'#136207', marginTop:5}}>.35</Text>
      </View>
      <Text style={{ color:'#136207', fontWeight:'bold'}}>Confirmed today</Text>
    </View>
  )
};

export default Stats;