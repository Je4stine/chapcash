import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import { Entypo, Ionicons, MaterialIcons  } from '@expo/vector-icons';




const SignUp3 = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    const [passwordShown, setPasswordShown]=useState(false);
    const [ secure, setSecure]=useState(true);
    const [ password, setPassword]= useState('')
    const [email, setEmail] = useState('');
    const [ isError, setIsError]= useState(false);

    const handleShowPassword =()=>{
        setPasswordShown(!passwordShown);
        setSecure(!secure);
    };

    const handleNext =()=>{
        if(isChecked){
            setIsError(false)
            navigation.navigate('Paybill',{
                password,
                email})

        } else {
            
        setIsError(true)

        }
       
    };

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
   
    <View style={{ alignItems:'center', paddingHorizontal:20}}>
        <View>
            <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#000", marginTop:20, marginBottom:20}}>
                Hello there 👋
            </Text>
            <Text style={{  fontFamily:'Montserrat-regular', fontSize:16}}>Please enter your email address and password to create an account</Text>
        </View>
    </View>
    <View style={{paddingHorizontal:30, marginTop:40}}>
        <Text style={{ fontFamily:'Montserrat-bold', marginTop:20, color:'grey', fontSize:18}}>Email</Text>
       <TextInput
       
        // placeholder='Email'
        onChangeText={(text)=>setEmail(text)}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
       
       <Entypo name="mail" size={18} color="black" style={{ position:'absolute', bottom:5, right:30}}/>
    </View>
    <View style={{paddingHorizontal:30, marginTop:10}}>
        <Text style={{ fontFamily:'Montserrat-bold', marginTop:20, color:'grey', fontSize:18}}>Password</Text>
       <TextInput
        // placeholder='Password'
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={secure}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10,  fontFamily:'Montserrat-regular'}}
       />
       {
        passwordShown?
        <TouchableOpacity onPress={handleShowPassword} style={{ position:'absolute', bottom:5, right:30}}><Ionicons name="eye" size={18} color="black" /></TouchableOpacity>:
        <TouchableOpacity onPress={handleShowPassword} style={{ position:'absolute', bottom:5, right:30}}><Entypo name="eye-with-line" size={18} color="black" /></TouchableOpacity>
       }
      
      
    </View>
    {
      isError?<View style={{ marginTop:20, paddingHorizontal: 10,marginBottom:10, alignSelf:'center', width:'85%', height:50, backgroundColor:'rgba(255, 0, 0, 0.1)', borderRadius:5, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <MaterialIcons name="error-outline" size={20} color="red" />
      <Text style={{ fontFamily:'Montserrat-regular', marginLeft:10, textAlign:'center', marginRight:10, }}>Please agree to our terms of usage before you continue</Text>
    </View>:<View/>
    }

    <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center',marginTop:20, paddingHorizontal:20}}>
        <Checkbox
            style={{marginRight: 11, height:15, width:15,marginLeft:10}}
            value={isChecked} 
            onValueChange={setChecked}
            color={isChecked ? 'green' : undefined}

          />
        <Text style={{  fontFamily:'Montserrat-regular'}}>
            I agree to ChapCash Public agreement, Terms and Privacy conditions
        </Text>
    </View>
    <TouchableOpacity onPress={handleNext} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginTop:40, alignSelf:'center'}}>
                <Text style={{ color:'#fff', fontSize:24,  fontFamily:'Montserrat-bold'}}>Continue</Text>
    </TouchableOpacity>
    <View style={{flex:1, justifyContent:'center', alignSelf:'center'}}>
        <View style={{ alignItems:'center', marginTop:40, flexDirection:'row', justifyContent:'center'}}>
            <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'25%'}}></View>
            <Text style={{ marginHorizontal:10, fontSize:19, color:'#8E8A8A',  fontFamily:'Montserrat-regular'}}>Or continue with</Text>
            <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'25%'}}></View>
        </View>
        <View style={{ flexDirection:'row', justifyContent:'space-around', marginTop:50}}>
            <TouchableOpacity style={{ paddingHorizontal:20, paddingVertical:10, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/google-icon.png')} style={{height:30, width:29}}/></TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal:20, paddingVertical:10, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/facebook.png')} style={{height:30, width:30}}/></TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal:20, paddingVertical:10, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/baseline-apple.png')} style={{height:37, width:36}}/></TouchableOpacity>
        </View>
        
    </View>
    </SafeAreaView>
  )
}

export default SignUp3;