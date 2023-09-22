import { View, Text, Image, TouchableOpacity, Share } from 'react-native';
import React,{ useContext, useEffect, useState} from 'react';
import { Feather, Entypo, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../Context/AppContext';

const HomeHeader = ({onPress, name= 'John Doe', URL, handleShare }) => {
  const [theUser, setTheUser]=useState('');
  const [imgurl, setimgurl]= useState('');
  const { user } = useContext(AppContext)

    const navigation = useNavigation();
    // const getData =async()=>{
    //   try{
    //     const username = await AsyncStorage.getItem('username');
    //     const userImage = await AsyncStorage.getItem('image');
    //     setTheUser(username);
    //     setimgurl(userImage)
    //     console.log('User image', userImage )
    //   }catch(error){
    //     console.log(error)
    //   }
    // };

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'https://www.chapcash.co.ke',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    };

    // useEffect(()=>{
    //   getData();
    //   console.log(imgurl)
    // },[]);

  

  return (
    <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20, alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Account')} style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        {
          user.imageUrl === null || user.imageUrl === '' ?<Image source={require('../../Assets/Images/user.png')} style={{ marginRight:10, height:50, width:50, borderRadius:25, borderWidth:2, borderColor:'green'}}/>: 
          <Image source={{ uri: user.imageUrl }} style={{ marginRight:10, height:50, width:50, borderRadius:25, borderWidth:2, borderColor:'green'}}/>
        }
       
        <View>
            <Text style={{ fontFamily:'Montserrat-bold', fontSize:18}}>{user.name}</Text>
            <Text style={{ fontFamily:'Montserrat-bold', color:"#5AB500", fontSize:18}}>W001</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection:'row', alignItems:"center"}}>
          <TouchableOpacity onPress={onPress} style={{ marginRight:10}}><Feather name="search" size={22} color="black" /></TouchableOpacity>
          {user.role === 'admin'?<TouchableOpacity onPress={onShare}><EvilIcons name="share-google" size={35} color="black" /></TouchableOpacity>:<TouchableOpacity onPress={()=>navigation.navigate('Analytics')}><MaterialCommunityIcons name="google-analytics" size={24} color="black" /></TouchableOpacity>}
      </View>
      
    </View>
  )
};

export default HomeHeader;