import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Clipboard from '@react-native-community/clipboard';
import { Feather } from '@expo/vector-icons';

const Confirm = ({ navigation}) => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    // Clipboard.setString('hello world');
    ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
  };


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{ position:'absolute', top:50, left:20 }}>
          <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#fff', width:'90%', paddingVertical:20, borderRadius:20}}>
            
            <View style={styles.regx}>
                <Text style={{ color:'#ffff', fontSize:20, fontFamily:'Hank_bold'}}>KM</Text>
            </View>
          <Text style={{ fontFamily:'Hank_bold', fontSize:20, color:'#01722E', marginBottom:10}}>Kevin Moriasi</Text>
          <View style={{ flexDirection:'row', marginBottom:10}}>
            <Text style={{ marginTop:5, fontFamily:'Hank'}}>Ksh.</Text>
            <Text style={{ fontSize:30, fontFamily:'Novera-black',color:'#01722E'}}>3,500</Text>
            <Text style={{ marginTop:5, fontFamily:'Hank'}}>.00</Text>
          </View>
          <View style={{ paddingHorizontal:30,paddingVertical:8, marginBottom:10,backgroundColor:'#cefad0', borderRadius:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontFamily:'Hank_bold', color:'green', marginRight:10, fontSize:20}}>BKOO67KG</Text>
            <TouchableOpacity onPress={copyToClipboard}><FontAwesome5 name="copy" size={18} color="green" /></TouchableOpacity>
          </View>
          <View>
            <Text style={{ color:'gray', fontFamily:'Hank_bold'}}>Contact</Text>
            <Text style={{ color:'gray', fontFamily:'Hank_bold'}}>07***152</Text>
          </View>
          <TouchableOpacity style={{ marginVertical:20, padding:18, width:'50%', backgroundColor:'#01722E', borderRadius:40, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ color:'#fff', fontFamily:'Hank_black', fontSize:20}}>Confirm</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Confirm;

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
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    }
})