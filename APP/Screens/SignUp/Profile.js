import { View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';


const Profile = ({ navigation }) => {
   
    

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
   
    <View style={{ alignItems:'center'}}>
        <View>
            <Text style={{ fontSize:27, fontWeight:'700', color:"#000", marginTop:20, marginBottom:5}}>
                Please Fill in
            </Text>
            <Text style={{ fontSize:27, fontWeight:'700', color:"#000", marginBottom:20, color:'#5AB500'}}>
                Till/Paybill details
            </Text>
            <View style={{}}>
                <Text>A verification code will be sent to your mobile number after you click verify</Text>
            </View>
            
        </View>
    </View>
    <View style={{paddingHorizontal:30, marginTop:40}}>
       <TextInput
       
        placeholder='Till/Paybill No.'
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10}}
       />
       
      
    </View>
    <View style={{paddingHorizontal:30, marginTop:20}}>
       <TextInput
        placeholder='Organization Name'
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10}}
       />
     </View>

    
   
   <View style={{flex:1, justifyContent:'flex-end', marginBottom:30}}>
        
        <TouchableOpacity onPress={()=>navigation.navigate('OTP')} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginTop:40, alignSelf:'center'}}>
                <Text style={{ color:'#fff', fontSize:24, fontWeight:'700'}}>Verify</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Profile;