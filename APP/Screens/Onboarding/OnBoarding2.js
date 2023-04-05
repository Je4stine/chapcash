import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const OnBoarding2 = ({ navigation}) => {
  return (
    <SafeAreaView style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:"#EFFAE5"}}>
      <Image source={require('../../Assets/Images/Pic2.png')} style={{ }}/>
      <Text style={{ fontFamily:'Novera-black', color:'#01722E', fontSize:40, textAlign:'center'}}>SAY BYE BYE TO PAPERS</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Onboarding3')} style={{ flexDirection:'row', marginTop:70,backgroundColor:'#01722E', height:50, width:'80%', alignSelf:'center', justifyContent:'center', alignItems:'center', borderRadius:30}}>
        <Text style={{ color:'#fff', fontFamily:'Hank_black', fontSize:22, marginRight:20}}>
            Get Started
        </Text>
        <AntDesign name="arrowright" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnBoarding2;