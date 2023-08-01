import { View, Text, Image, TouchableOpacity, Alert, Animated,  Keyboard} from 'react-native';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import { Entypo, Ionicons  } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements'
import { AppContext } from '../../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';




const SignIn = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    const [passwordShown, setPasswordShown]=useState(false);
    const [ secure, setSecure]=useState(true);
    const [ loading, setLoading]= useState(false);
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [ errorMsg, setErrorMsg]= useState('');
    const [isError, setIsError] =useState(false);
    const { user, setUser}= useContext(AppContext)

    const handleShowPassword =()=>{
        setPasswordShown(!passwordShown);
        setSecure(!secure);
    };

    const animationValue = useRef(new Animated.Value(0)).current;

    const startAnimation = () => {
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000, // Animation duration in milliseconds
        easing: Animated.ease, // Easing function (default: easeInOut)
        useNativeDriver: true, // Enable native driver for better performance
      }).start();
    };

    
    const animatedStyle = {
      opacity: animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      transform: [
        {
          translateY: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
          }),
        },
      ],
      marginTop: 20,
      marginBottom: 10,
      alignSelf: 'center',
      width: '85%',
      height: 50,
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    };

    useEffect(() => {
  startAnimation();
}, []);



    const handleSignIn = async ()=>{
        setLoading(true);
        setIsError(false);
        setErrorMsg('');
        Keyboard.dismiss();

        if(password && email == ''){
          setLoading(false);
          setIsError(true);
          setErrorMsg('Email or Password cannot be empty');
        }else if(email == ''){
          setLoading(false);
          setIsError(true);
          setErrorMsg('Email cannot be empty');
        } 
        else if(password == ''){
          setLoading(false);
          setIsError(true);
          setErrorMsg('Password cannot be empty');
        }
        else {
          await fetch ('https://www.chapcash.mopawa.co.ke/api/signin',{
            method: 'POST',
            headers:{
              'Accept':'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              password,
              email
            })
          })
          .then((response)=>response.json())
          .then((response)=>{
            if (response.token !=undefined){
              setLoading(false)
              setUser(response)
              AsyncStorage.setItem('username', response.name);
              AsyncStorage.setItem('image', response.url);
              AsyncStorage.setItem('email', response.user);
              AsyncStorage.setItem('token', response.token); 
              navigation.navigate('Main');
            }else {
              setTimeout(()=>{
                setIsError(true);
                setErrorMsg(response.error)
              }, 100);
              setLoading(false);
            }
          }).catch(error=> setTimeout(()=>{
            setIsError(true);
            setErrorMsg("Network error occurred, please check your internet connection before you continue")
            setLoading(false)
          },100))

        }
       
      };

      const height = useHeaderHeight()
  



  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
   
    <View style={{ alignItems:'center'}}>
        <View>
            <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#000", marginTop:20, marginBottom:20}}>
                Welcome back 👋
            </Text>
            <Text style={{  fontFamily:'Montserrat-regular', fontSize:16}}>Please enter your email address and password to login</Text>
        </View>
    </View>

    <View style={{paddingHorizontal:30, marginTop:40}}>
      <Text style={{ fontFamily:'Montserrat-bold', color:'grey', fontSize:18}}>Email</Text>
       <TextInput
        // placeholder='Email'
        // value={email}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:5,  fontFamily:'Montserrat-regular'}}
        onChangeText={(text)=>setEmail(text)}
       />
       
       <Entypo name="mail" size={18} color="black" style={{ position:'absolute', bottom:5, right:30}}/>
    </View>
    <View style={{paddingHorizontal:30, marginTop:10}}>
    <Text style={{ fontFamily:'Montserrat-bold', marginTop:20, color:'grey', fontSize:18}}>Password</Text>
       <TextInput
        secureTextEntry={secure}
        onChangeText={(text)=>setPassword(text)}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:5,  fontFamily:'Montserrat-regular'}}
       />
       {
        passwordShown?
        <TouchableOpacity onPress={handleShowPassword} style={{ position:'absolute', bottom:5, right:30}}><Ionicons name="eye" size={18} color="black" /></TouchableOpacity>:
        <TouchableOpacity onPress={handleShowPassword} style={{ position:'absolute', bottom:5, right:30}}><Entypo name="eye-with-line" size={18} color="black" /></TouchableOpacity>
       }
      
      
    </View>
    {
      isError?<View style={{ marginTop:20, paddingHorizontal: 5,marginBottom:10, alignSelf:'center', width:'85%', height:50, backgroundColor:'rgba(255, 0, 0, 0.1)', borderRadius:5, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <MaterialIcons name="error-outline" size={20} color="red" />
      <Text style={{ fontFamily:'Montserrat-regular', marginLeft:10, textAlign:'center', marginRight:10}}>{errorMsg}</Text>
    </View>:<View/>
    }
      <TouchableOpacity onPress={handleSignIn} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginTop:50, alignSelf:'center'}}>
                <Text style={{ color:'#fff', fontSize:24,  fontFamily:'Montserrat-bold'}}>Sign In</Text>
        </TouchableOpacity>
    
    <View style={{ alignSelf:'center', alignItems:'center', marginTop:30}}>
        <Text style={{ color:'#5AB500',  fontFamily:'Montserrat-bold', fontSize:16, marginBottom:20}}>Forgot passord</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp2')} ><Text style={{  fontFamily:'Montserrat-regular', fontSize:16}}>Don't have an account yet? SignUp</Text></TouchableOpacity>
    </View>
   
    {/* position:'absolute', bottom:'10%', */}
   
   <View style={{flex:1, justifyContent:'center',  alignSelf:'center'}}>
        <View style={{ alignItems:'center', marginTop:30, flexDirection:'row', justifyContent:'center'}}>
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
    {
      loading?<View style={{ backgroundColor:'rgba(0, 0, 0, 0.2)', alignSelf:'center', alignItems:'center', justifyContent:'center',position:'absolute', top:0, left:0, right:0, bottom:0}}>
      <Image source={require('../../Assets/Images/loader.gif')} style={{ height:70, width:70}}/>
    </View>:<View/>
    }
    </SafeAreaView>
  )
}

export default SignIn;