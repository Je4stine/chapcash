import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const OnBoarding1 = ({navigation}) => {
  return (
    <SafeAreaView style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:"#EFFAE5"}}>
      <Image source={require('../../Assets/Images/Notes.png')} style={{ }}/>
      <Text style={{ fontFamily:'Novera-black', color:'#01722E', fontSize:40, textAlign:'center'}}>1000 RESTAURANTS</Text>
      <Text style={{ textDecorationLine:'underline', marginTop:20}}>See our Partners</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Onboarding2')} style={{ flexDirection:'row', backgroundColor:'#01722E', height:50, width:'80%', alignSelf:'center', justifyContent:'center', alignItems:'center', borderRadius:30, marginTop:20}}>
        <Text style={{ color:'#fff', fontFamily:'Hank_black', fontSize:22, marginRight:20}}>
            Get Started
        </Text>
        <AntDesign name="arrowright" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnBoarding1