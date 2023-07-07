import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding3 = ({ navigation }) => {

  const handleOnboardingSkip = async () => {
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
          <Image source={require('../../Assets/Images/image3.1.png')} style={{ width:320, height:410, marginTop:20}}/>
      </View>
      <View style={{ paddingHorizontal:90, marginTop:20}}>
          <Text style={{ fontSize:25,  fontFamily:'Montserrat-bold', textAlign:'center'}}>
              Save time 
          </Text>
          <Text style={{ fontSize:25,  fontFamily:'Montserrat-bold', textAlign:'center'}}>Forget about the papers</Text>
      </View>
      <View style={{ flexDirection:'row', marginTop:50, alignSelf:'center'}}>
            <View style={{ width:5, height:5, backgroundColor:'#D9D9D9', borderRadius:2.5, marginRight:5}}></View>
            <View style={{ width:'7%', height:5, backgroundColor:'#5AB500', borderRadius:10, marginRight:5}}></View>
            <View style={{ width:5, height:5, backgroundColor:'#D9D9D9', borderRadius:2.5}}></View>
        </View>
        <View style={{ height:0.5, backgroundColor:'#D9D9D9', width:'90%', marginTop:30, alignSelf:'center'}}></View>

      <View style={{ flexDirection:'row', marginTop:30, justifyContent:'space-around',position:'absolute', bottom:20, alignSelf:'center' }}>
          <TouchableOpacity onPress={handleOnboardingSkip} style={{ height:40, backgroundColor:'#D9D9D9', paddingHorizontal:30, justifyContent:'center', alignItems:'center', borderRadius:20, marginRight:40}}>
            <Text style={{ color:"#5AB500",  fontFamily:'Montserrat-bold', fontSize:19}}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Onboarding4')} style={{ height:40, backgroundColor:'#5AB500', paddingHorizontal:30, justifyContent:'center', alignItems:'center', borderRadius:20}}>
            <Text style={{ color:"#ffff", fontFamily:'Montserrat-bold', fontSize:19}}>Next</Text>
          </TouchableOpacity>
      </View>
        
    </SafeAreaView>
  )
};

export default OnBoarding3;