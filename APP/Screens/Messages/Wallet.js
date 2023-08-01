import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wallet = () => {
  return (
    <SafeAreaView style={{ backgroundColor:'#fff', flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>No messages yet</Text>
    </SafeAreaView>
  )
};

export default Wallet;