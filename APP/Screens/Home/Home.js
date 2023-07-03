import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from './HomeHeader';
import Stats from './Stats';
import Pending from './Pending/Pending';
import Complete from './Complete/Complete';

const Home = () => {
  const [index, setIndex]=useState(1);

  const handleToggle =(index)=>{
    setIndex(index)
  };

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
      <HomeHeader/>
      <View style={{ width:'95%', alignSelf:'center', backgroundColor:'#f4f4f4', padding:15, borderRadius:10}}>
          <Stats/>
          <View style={{ width:'90%', height:50, backgroundColor:'#D3D3D3', borderRadius:30, justifyContent:'center', alignItems:'center', flexDirection:'row', alignSelf:'center'}}>
            <TouchableOpacity onPress={()=>handleToggle(1)} style={[index===1?styles.active:styles.inactive]}><Text style={[index===1?styles.activeText:styles.inactiveText]}>Pending</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleToggle(2)} style={[index===2?styles.active:styles.inactive]} ><Text style={[index===2?styles.activeText:styles.inactiveText]}>Confirmed</Text></TouchableOpacity>
          </View>
      </View>
     
      { index===1?<Pending/>:null
      }
      {
         index===2?<Complete/>:null
      }
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    active: {
      backgroundColor:'#5AB500',
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
      fontFamily:'Montserrat-bold',
      fontSize:20
    },
    inactiveText:{
      color:'#5AB500',
      fontFamily:'Montserrat-bold',
      fontSize:20
    }
})