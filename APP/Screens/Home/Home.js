import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from './HomeHeader';
import Stats from './Stats';

const Home = () => {
  const [index, setIndex]=useState(1);

  const handleToggle =(index)=>{
    setIndex(index)
  };

  return (
    <SafeAreaView>
      <HomeHeader/>
      <Stats/>
      <View style={{ width:'90%', height:50, backgroundColor:'#D3D3D3', borderRadius:30, justifyContent:'center', alignItems:'center', flexDirection:'row', alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>handleToggle(1)} style={[index===1?styles.active:styles.inactive]}><Text style={[index===1?styles.activeText:styles.inactiveText]}>Pending</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>handleToggle(2)} style={[index===2?styles.active:styles.inactive]} ><Text style={[index===2?styles.activeText:styles.inactiveText]}>Confirmed</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    active: {
      backgroundColor:'#136207',
      justifyContent:'center',
      alignItems:'center',
      height:50,
      width:'50%',
      borderRadius:30
    },
    inactive:{
      justifyContent:'center',
      alignItems:'center',
      height:50,
      width:'50%',
      borderRadius:30
    },
    activeText:{
      color:'#fff',
      fontWeight:'bold'
    },
    inactiveText:{
      color:'#136207',
      fontWeight:'bold'
    }
})