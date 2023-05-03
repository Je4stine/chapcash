import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const OnBoarding1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#F5F5F5"}}>
      <Image source={require('../../Assets/Images/image2.1.png')} style={{ width:330, height:420, marginTop:20, alignSelf:'center' }}/>
      <View style={{ padding:30, alignItems:'center', flex:1}}>
        <Text style={{ fontWeight:700, fontSize:25, alignItems:'center', color:'#002C11', textAlign:'center'}}>
          Serving over 5,000 resturants in East Africa
        </Text>
        <TouchableOpacity><Text style={{ textAlign:'center', marginTop:20, fontSize:17, textDecorationLine:'underline'}}>See Who's onboard</Text></TouchableOpacity>
        <View style={{ flexDirection:'row', marginTop:20}}>
            <View style={{ width:'7%', height:5, backgroundColor:'#5AB500', borderRadius:10, marginRight:5}}></View>
            <View style={{ width:5, height:5, backgroundColor:'#D9D9D9', borderRadius:2.5, marginRight:5}}></View>
            <View style={{ width:5, height:5, backgroundColor:'#D9D9D9', borderRadius:2.5}}></View>
        </View>
        <View style={{ height:0.5, backgroundColor:'#D9D9D9', width:'95%', marginTop:20}}></View>
      </View>
      
      <View style={{ flexDirection:'row', marginTop:30, justifyContent:'space-around', position:'absolute', bottom:20, alignSelf:'center' }}>
          <TouchableOpacity style={{ height:40, backgroundColor:'#D9D9D9', paddingHorizontal:30, justifyContent:'center', alignItems:'center', borderRadius:20, marginRight:40}}>
            <Text style={{ color:"#5AB500", fontWeight:'700', fontSize:19}}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Onboarding2')}} style={{ height:40, backgroundColor:'#5AB500', paddingHorizontal:30, justifyContent:'center', alignItems:'center', borderRadius:20}}>
            <Text style={{ color:"#ffff", fontWeight:'700', fontSize:19}}>Next</Text>
          </TouchableOpacity>
        </View>
    
    </SafeAreaView>
  )
}

export default OnBoarding1;