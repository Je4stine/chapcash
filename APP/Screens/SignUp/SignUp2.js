import { View, Text, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const SignUp2 = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor:'#fff', flex:1}}>
      
        <View style={{ alignItems:'center', marginTop:40}}>
            <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#000", marginTop:0}}>
                Welcome to ChapCash
            </Text>
            <Text style={{  fontFamily:'Montserrat-regular'}}>You can signup as...</Text>
        </View>
        <View style={{ alignItems:'center', flex:1, justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('User1')} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginBottom:40, flexDirection:'row'}}>
                <Text style={{ color:'#fff', fontSize:24,  fontFamily:'Montserrat-bold', marginRight:10}}>Staff</Text>
                <AntDesign name="arrowright" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp3')}} style={{ flexDirection:'row',justifyContent:'center', alignItems:'center', backgroundColor:'#D9D9D9', width:'80%', height:50, borderRadius:48}}>
                <Text style={{ color:'#5AB500', fontSize:24,  fontFamily:'Montserrat-bold', marginRight:10}}>Manager</Text>
                <AntDesign name="arrowright" size={24} color="#5AB500" />
            </TouchableOpacity>
        </View>
       
    </SafeAreaView>
  )
};

export default SignUp2;