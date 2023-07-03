import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20, alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('#002C11')} style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../../Assets/Images/user.png')} style={{ marginRight:10, height:50, width:50, borderRadius:25}}/>
        <View>
            <Text style={{ fontFamily:'Montserrat-bold', fontSize:18}}>John Doe</Text>
            <Text style={{ fontFamily:'Montserrat-bold', color:"#5AB500", fontSize:18}}>W001</Text>
        </View>
      </TouchableOpacity>
      <Feather name="search" size={20} color="black" />
    </View>
  )
};

export default HomeHeader;