import { View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';


const UserPayBill = ({ navigation }) => {
   const [shopNumber, setShopNumber]=useState(0);

    GenerateRandomNumber=()=>
    {
    
    var RandomNumber = Math.floor(Math.random() * 1000000) + 1 ;
    
    setShopNumber(RandomNumber)
    };

    useState(()=>{
        GenerateRandomNumber()
    },[]);

    

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
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
       
      
    </View>
    <View style={{paddingHorizontal:30, marginTop:20}}>
       <TextInput
        placeholder='Phone Number'
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
     </View>

     <View style={{paddingHorizontal:30, marginTop:20, position:'relative'}}>
       <TextInput
        placeholder='Shop Code'
        keyboardType='numeric'
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
       <Text style={{ marginTop:20, fontFamily:'Montserrat-regular'}}>Provided by your manager</Text>
     </View>
   
   <View style={{flex:1, justifyContent:'flex-end', marginBottom:30}}>
        
        <TouchableOpacity onPress={()=>navigation.navigate('User2')} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginTop:40, alignSelf:'center'}}>
                <Text style={{ color:'#fff', fontSize:24, fontFamily:'Montserrat-bold'}}>Continue</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default UserPayBill;