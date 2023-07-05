import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = ({onPress, name= 'John Doe' }) => {
    const navigation = useNavigation();
  return (
    <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20, alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Account')} style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../../Assets/Images/user.png')} style={{ marginRight:10, height:50, width:50, borderRadius:25}}/>
        <View>
            <Text style={{ fontFamily:'Montserrat-bold', fontSize:18}}>{name}</Text>
            <Text style={{ fontFamily:'Montserrat-bold', color:"#5AB500", fontSize:18}}>W001</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}><Feather name="search" size={20} color="black" /></TouchableOpacity>
    </View>
  )
};

export default HomeHeader;