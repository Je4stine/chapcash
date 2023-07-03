import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp1 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
    <View style={{ alignItems:'center'}}>
        <Image source={require('../../Assets/Images/logo2.1.png')} style={{ height:260, width:268}}/>
    </View>
    <View style={{ alignItems:'center'}}>
        <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#5AB500", marginTop:0}}>
            Welcome to
        </Text>
        <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#000", marginTop:0}}>
            ChapCash
        </Text>
    </View>
    <View style={{ alignItems:'center', marginTop:40}}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginBottom:40}}>
            <Text style={{ color:'#fff', fontSize:24,  fontFamily:'Montserrat-bold'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp2')}} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#D9D9D9', width:'80%', height:50, borderRadius:48}}>
            <Text style={{ color:'#5AB500', fontSize:24,  fontFamily:'Montserrat-bold'}}>Signup</Text>
        </TouchableOpacity>
    </View>
    <View style={{ alignItems:'center', marginTop:40, flexDirection:'row', justifyContent:'center'}}>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'25%'}}></View>
        <Text style={{ marginHorizontal:10, fontSize:19, color:'#8E8A8A',  fontFamily:'Montserrat-regular'}}>Or continue with</Text>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'25%'}}></View>
    </View>
    <View style={{ flexDirection:'row', justifyContent:'space-around', marginTop:50}}>
        <TouchableOpacity style={{ paddingHorizontal:20, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/google-icon.png')} style={{height:30, width:29}}/></TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal:20, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/facebook.png')} style={{height:30, width:30}}/></TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal:20, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/baseline-apple.png')} style={{height:37, width:36}}/></TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default SignUp1;