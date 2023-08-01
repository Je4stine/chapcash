import { View, Text, Image, TouchableOpacity } from 'react-native';
import React,{ useEffect, useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeHeader = ({onPress, name= 'John Doe', URL }) => {
  const [theUser, setTheUser]=useState('');
  const [imgurl, setimgurl]= useState('');

    const navigation = useNavigation();
    const getData =async()=>{
      try{
        const username = await AsyncStorage.getItem('username');
        const userImage = await AsyncStorage.getItem('image');
        setTheUser(username);
        setimgurl(userImage)
      }catch(error){
        console.log(error)
      }
    };

    useEffect(()=>{
      getData()
    },[]);

  return (
    <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20, alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Account')} style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        {
          imgurl === null || imgurl === '' ?<Image source={require('../../Assets/Images/user.png')} style={{ marginRight:10, height:50, width:50, borderRadius:25}}/>: 
          <Image source={{ uri: imgurl }} style={{ marginRight:10, height:50, width:50, borderRadius:25}}/>
        }
       
        <View>
            <Text style={{ fontFamily:'Montserrat-bold', fontSize:18}}>{theUser}</Text>
            <Text style={{ fontFamily:'Montserrat-bold', color:"#5AB500", fontSize:18}}>W001</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}><Feather name="search" size={20} color="black" /></TouchableOpacity>
    </View>
  )
};

export default HomeHeader;