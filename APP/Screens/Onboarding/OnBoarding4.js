import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const OnBoarding4 = ({ navigation }) => {

  const handleOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      navigation.navigate('SignUp1')
      
    } catch (error) {
      console.log('Error storing onboarding status:', error);
    }
  };


  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
      <View style={{ alignItems:'center'}}>
          <Image source={require('../../Assets/Images/image4.1.png')} style={{ width:320, height:410, marginTop:20}}/>
      </View>
      <View style={{ paddingHorizontal:80, marginTop:20}}>
          <Text style={{ fontSize:25,  fontFamily:'Montserrat-bold', textAlign:'center'}}>
              Just tap or swipe to
          </Text>
          <Text style={{ fontSize:25,  fontFamily:'Montserrat-bold', textAlign:'center'}}>confirm the Mpesa payment</Text>
      </View>
      <View style={{ flexDirection:'row', marginTop:50, alignSelf:'center'}}>
            <View style={{ width:5, height:5, backgroundColor:'#D9D9D9', borderRadius:2.5, marginRight:5}}></View>
            <View style={{ width:5, height:5, backgroundColor:'#D9D9D9', borderRadius:2.5, marginRight:5}}></View>
            <View style={{ width:'7%', height:5, backgroundColor:'#5AB500', borderRadius:10}}></View>
        </View>
        <View style={{ height:0.5, backgroundColor:'#D9D9D9', width:'90%', marginTop:30, alignSelf:'center'}}></View>

      <View style={{ flexDirection:'row', marginTop:30, justifyContent:'space-around',position:'absolute', bottom:20, alignSelf:'center' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp1')} style={{ height:40, backgroundColor:'#D9D9D9', paddingHorizontal:30, justifyContent:'center', alignItems:'center', borderRadius:20, marginRight:40}}>
            <Text style={{ color:"#5AB500",  fontFamily:'Montserrat-bold', fontSize:19}}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOnboardingComplete} style={{ height:40, backgroundColor:'#5AB500', paddingHorizontal:30, justifyContent:'center', alignItems:'center', borderRadius:20}}>
            <Text style={{ color:"#ffff",  fontFamily:'Montserrat-bold', fontSize:19}}>Next</Text>
          </TouchableOpacity>
      </View>
        
    </SafeAreaView>
  )
};

export default OnBoarding4;