import { View, Text, ScrollView, TouchableOpacity, ToastAndroid, BackHandler, Image  } from 'react-native';
import React, { useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AddImage from './AddImage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Account = ({navigation}) => {
  const [ visible, setVisible]= useState(false);
  const [abv, setAbv] = useState('');
  const [loading, setLoading]= useState(false);
  const [profileimg, setProfileImg]= useState('');
  const [email, setEmail]= useState('');

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  
  };


  const getData = async()=>{
    try{
      const username = await AsyncStorage.getItem('username');
      const regexPattern = /\b(\w)/g;
      const abrreviate = username.match(regexPattern);
      setAbv(abrreviate);
      const Prof = await AsyncStorage.getItem('image');
      const mail = await AsyncStorage.getItem('email');
      setEmail(mail);
      setProfileImg(Prof)

    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    getData();
  },[]);


  const handleLogout= async()=>{
    setLoading(true)
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('image');
    await AsyncStorage.removeItem('email');
    
    BackHandler.exitApp();
    setLoading(false)

  };

  


const handleCommingSoon =()=>{
    ToastAndroid.show('Feature coming soon', ToastAndroid.SHORT)
};




  return (
    <SafeAreaView style={{ flex:1}}>
        <ScrollView>
    <View>
      <View style={{ flexDirection:"row", justifyContent:'space-between', padding:10}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{ backgroundColor:"#D3D3D3", borderRadius:20, padding:2, aligntems:'center'}}><AntDesign name="close" size={17} color="black" /></TouchableOpacity>
        <Feather name="bell" size={20} color="black" />
      </View>
      <Text style={{ fontFamily:'Montserrat-bold', marginLeft:10, marginTop:15, fontSize:22}}>Your Account</Text>
      <View style={{ padding:10}}>
        <Text style={{ fontFamily:'Montserrat-regular'}}>
            Currently using as:
        </Text>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:5}}></View>
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
            <View style={{ flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={toggleBottomNavigationView} style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                        <Text style={{ fontFamily:'Montserrat-bold', fontSize:24}}>{abv}</Text>
                        <View style={{position:'absolute', bottom:-1, right:5, backgroundColor:'#fff', padding:2, borderRadius:7}}><Entypo name="camera" size={12} color="black" /></View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Your account</Text>
                        <Text style={{ fontFamily:'Montserrat-regular'}}>You can edit your profile</Text>
                    </View>
            </View>
           
            <TouchableOpacity style={{ backgroundColor:'#d3d3d3', paddingHorizontal:10, borderRadius:7}}>
                <Text style={{ fontFamily:'Montserrat-regular'}}>Edit</Text>
            </TouchableOpacity>
        </View>

            <Text style={{ fontFamily:'Montserrat-regular'}}>
                Payment
            </Text>
            <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:5}}></View>

            <TouchableOpacity onPress={handleCommingSoon} style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <FontAwesome5 name="money-bill" size={18} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Make payments</Text>
                            <Text style={{ fontFamily:'Montserrat-regular'}}>You can make payment via mpesa</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <Text style={{ marginTop:10}}>
                General
            </Text>
            <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:5}}></View>

            <TouchableOpacity onPress={()=>navigation.navigate('Settings')} style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <Feather name="settings" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Settings</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Privacy')} style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                             <MaterialIcons name="privacy-tip" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Privacy & Security</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>navigation.navigate('Help')} style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <Feather name="help-circle" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{fontFamily:'Montserrat-bold', fontSize:17}}>Help</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <AntDesign name="logout" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Logout</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

        
            <Text style={{ color:'gray', marginTop:20, fontFamily:'Montserrat-regular'}}>ChapCash V1.00</Text>
      </View>
      </View>
      <AddImage visible={visible} toggleBottomNavigationView={toggleBottomNavigationView}/>
      </ScrollView>
      {
      loading?<View style={{ backgroundColor:'rgba(0, 0, 0, 0.2)', alignSelf:'center', alignItems:'center', justifyContent:'center',position:'absolute', top:0, left:0, right:0, bottom:0}}>
      <Image source={require('../../Assets/Images/loader.gif')} style={{ height:70, width:70}}/>
    </View>:<View/>
    }
    </SafeAreaView>
  )
};

export default Account;