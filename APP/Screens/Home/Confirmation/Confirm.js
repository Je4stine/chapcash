import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const Confirm = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.regx}>
            <Text style={{ color:'#ffff', fontWeight:'bold', fontSize:20}}>KM</Text>
        </View>
      <Text style={{ fontWeight:'bold', fontSize:20}}>Kevin Moriasi</Text>
      <View style={{ flexDirection:'row'}}>
        <Text style={{ marginTop:5}}>Ksh.</Text>
        <Text style={{ fontSize:30, fontWeight:'bold'}}>3,500</Text>
        <Text style={{ marginTop:5}}>.00</Text>
      </View>
      <View style={{ paddingHorizontal:30,paddingVertical:8, backgroundColor:'#cefad0', borderRadius:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Text style={{ fontWeight:'bold', color:'green', marginRight:10, fontSize:16}}>BKOO67KG</Text>
        <FontAwesome5 name="copy" size={18} color="green" />
      </View>
      <View>
        
      </View>
    </SafeAreaView>
  )
}

export default Confirm;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
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