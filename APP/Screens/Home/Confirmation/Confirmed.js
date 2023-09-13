import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Clipboard from '@react-native-community/clipboard';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Confirmed = ({  route }) => {
  const [copiedText, setCopiedText] = useState('');
  const { FirstName, Amount, MSISDN, ID}= route.params;
  const [person, setPerson] = useState('');
  const navigation = useNavigation();

  const regexPattern = /\b(\w)/g;
  const abrreviate = FirstName.match(regexPattern);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
    ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  const getIt = async () => {
   const username = await AsyncStorage.getItem('username');
    setPerson(username)

  }

  useEffect(()=>{
    getIt()
  },[]);


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{ position:'absolute', top:50, left:20 }}>
          <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ justifyContent:'center', borderRadius:20,alignItems:'center', backgroundColor:'#fff', width:'90%', paddingVertical:20}}>
            
            <View style={styles.regx}>
                <Text style={{ color:'#ffff', fontSize:40, fontFamily:'Montserrat-bold'}}>{abrreviate}</Text>
            </View>
          <Text style={{ fontFamily:'Montserrat-bold', fontSize:20, color:'#5AB500', marginBottom:10}}>{FirstName}</Text>
          <View style={{ flexDirection:'row', marginBottom:10}}>
            <Text style={{ marginTop:5, fontFamily:'Hank'}}>Ksh.</Text>
            <Text style={{ fontSize:30, fontFamily:'Novera-black', color:'#5AB500'}}>{Amount}</Text>
            <Text style={{ marginTop:5, fontFamily:'Hank'}}>.00</Text>
          </View>
          <View style={{ paddingHorizontal:30,paddingVertical:8, marginBottom:10,backgroundColor:'#FBFFF8', borderRadius:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontFamily:'Montserrat-bold', color:'#5AB500', marginRight:10, fontSize:20}}>{ID}</Text>
            <TouchableOpacity onPress={copyToClipboard}><FontAwesome5 name="copy" size={18} color="#5AB500" /></TouchableOpacity>
          </View>
          <View style={{ alignItems:'center'}}>
            <Text style={{ color:'gray', fontFamily:'Montserrat-bold'}}>Contact</Text>
            <Text style={{ color:'gray', fontFamily:'Montserrat-bold', fontSize:18}}>{MSISDN}</Text>
          </View>
          <View style={{ marginVertical:20, padding:18, width:'50%', backgroundColor:'#EFFAE5', borderRadius:40, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ color:'#5AB500', fontFamily:'Montserrat-bold', fontSize:20}}>Confirmed</Text>
          </View>
          <Text style={{ color:'gray', fontFamily:'Montserrat-bold'}}>
            Confirmed By {person}
          </Text>
      </View>
    </SafeAreaView>
  )
}

export default Confirmed;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#EFFAE5'
    },
    regx:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:'#5AB500',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    }
})