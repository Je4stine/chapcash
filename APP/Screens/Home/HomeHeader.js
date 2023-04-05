import { View, Text, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const HomeHeader = () => {
  return (
    <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20}}>
      <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../../Assets/Images/user.png')} style={{ marginRight:10, height:50, width:50, borderRadius:25}}/>
        <View>
            <Text style={{ fontFamily:'Hank_black', fontSize:18}}>John Doe</Text>
            <Text style={{ fontFamily:'Novera-bold', color:"#136207", fontSize:18}}>W001</Text>
        </View>
      </View>
      <Ionicons name="menu" size={24} color="black" />
    </View>
  )
};

export default HomeHeader;