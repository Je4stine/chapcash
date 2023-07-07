import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding2 = ({ navigation}) => {

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
          <Text style={{ fontFamily:'Montserrat-bold', fontSize:25, marginTop:30}}>Welcome Onboard</Text>
          <Text style={{ fontFamily:'Montserrat-regular', fontSize:25}}>you are not alone</Text>
          <Image source={require('../../Assets/Images/logo2.1.png')} style={{height:260, width:260 }}/>
      </View>
      <View style={{ height:0.5, backgroundColor:'#D9D9D9', width:'90%', alignSelf:'center', marginBottom:20}}></View>
      <View style={{ paddingHorizontal:20}}>
          <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{ fontSize:14, fontFamily:'Montserrat-bold', marginBottom:10}}>Club Bruno</Text>
              <Text style={{fontFamily:'Montserrat-regular'}}>Nairobi</Text>
          </View>
          <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{ fontSize:14, fontFamily:'Montserrat-bold', marginBottom:10}}>Black Pearl</Text>
              <Text style={{fontFamily:'Montserrat-regular'}}>Kisumu</Text>
          </View>
          <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{ fontSize:14, fontFamily:'Montserrat-bold', marginBottom:10}}>Signature</Text>
              <Text style={{fontFamily:'Montserrat-regular'}}>Kisumu</Text>
          </View>
          <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{ fontSize:14, fontFamily:'Montserrat-bold', marginBottom:10}}>Tribeka</Text>
              <Text style={{fontFamily:'Montserrat-regular'}}>Nairobi</Text>
          </View>
      </View>
      <View style={{ height:0.5, backgroundColor:'#D9D9D9', width:'90%', alignSelf:'center', marginBottom:20}}></View>

      <View style={{ flexDirection:'row', marginTop:30, justifyContent:'space-around',position:'absolute', bottom:20, alignSelf:'center' }}>
          <TouchableOpacity onPress={handleOnboardingSkip} style={{ height:40, backgroundColor:'#D9D9D9', paddingHorizontal:30, justifyContent:'center', alignItems:'center', borderRadius:20, marginRight:40}}>
            <Text style={{ color:"#5AB500",  fontFamily:'Montserrat-bold', fontSize:19}}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Onboarding3')} style={{ height:40, backgroundColor:'#5AB500', paddingHorizontal:30, justifyContent:'center', alignItems:'center', borderRadius:20}}>
            <Text style={{ color:"#ffff",  fontFamily:'Montserrat-bold', fontSize:19}}>Next</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default OnBoarding2;