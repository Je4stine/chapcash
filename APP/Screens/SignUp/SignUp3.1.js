import { View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';


const UserPayBill = ({ navigation, route }) => {
  const [fullname, setFullname]= useState('');
  const [phone, setPhone]= useState( '');
  const [ shopCode, setShopCode] = useState('');
  const { password, email} = route.params;

  const handleNext =()=>{
    if( fullname && phone === ''){
      console.log(password)
    } else{
      navigation.navigate('User2',{
        email:email,
        password: password,
        phone: phone,
        shopCode: shopCode,
        fullname: fullname
      })
      console.log(password)
    }
    
  };
  

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
    <View style={{ paddingHorizontal:20}}>
        <View>
            <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#000", marginTop:20, marginBottom:5}}>
                Complete Your
            </Text>
            <Text style={{ fontSize:27, fontFamily:'Montserrat-bold', color:"#000", marginBottom:20, color:'#5AB500'}}>
                Personal Profile{"  "}📝
            </Text>
            <Text style={{ fontFamily:'Montserrat-regular'}}>Kindly Fill in the details to personalize the application</Text>
        </View>
    </View>
    <View style={{paddingHorizontal:30, marginTop:40}}>
       <TextInput
        placeholder='Full Name'
        onChangeText={(text)=>setFullname(text)}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
       
      
    </View>
    <View style={{paddingHorizontal:30, marginTop:20}}>
       <TextInput
        placeholder='Phone Number'
        onChangeText={(text)=>setPhone(text)}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
     </View>

     <View style={{paddingHorizontal:30, marginTop:20, position:'relative'}}>
       <TextInput
        placeholder='Shop Code'
        keyboardType='numeric'
        onChangeText={(text)=>setShopCode(text)}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
       <Text style={{ marginTop:20, fontFamily:'Montserrat-regular'}}>Provided by your manager</Text>
     </View>
   
   <View style={{flex:1, justifyContent:'flex-end', marginBottom:30}}>
        
        <TouchableOpacity onPress={handleNext} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginTop:40, alignSelf:'center'}}>
                <Text style={{ color:'#fff', fontSize:24, fontFamily:'Montserrat-bold'}}>Continue</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default UserPayBill;