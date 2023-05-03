import { View, Text, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const SignUp2 = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor:'#fff', flex:1}}>
      
        <View style={{ alignItems:'center', marginTop:40}}>
            <Text style={{ fontSize:27, fontWeight:'700', color:"#000", marginTop:0}}>
                Welcome to ChapCash
            </Text>
            <Text>You can signup as...</Text>
        </View>
        <View style={{ alignItems:'center', flex:1, justifyContent:'center'}}>
            <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#D9D9D9', width:'80%', height:50, borderRadius:48, marginBottom:40, flexDirection:'row'}}>
                <Text style={{ color:'#5AB500', fontSize:24, fontWeight:'700', marginRight:10}}>Staff</Text>
                <AntDesign name="arrowright" size={24} color="#5AB500" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp3')}} style={{ flexDirection:'row',justifyContent:'center', alignItems:'center', backgroundColor:'#D9D9D9', width:'80%', height:50, borderRadius:48}}>
                <Text style={{ color:'#5AB500', fontSize:24, fontWeight:'700', marginRight:10}}>Manager</Text>
                <AntDesign name="arrowright" size={24} color="#5AB500" />
            </TouchableOpacity>
        </View>
       
    </SafeAreaView>
  )
};

export default SignUp2;