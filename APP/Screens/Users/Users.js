import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../Home/HomeHeader';
import Active from './Active';
import Inactive from './Inactive';

const Users = () => {
  const [index, setIndex]=useState(1);
 

  const handleToggle =(index)=>{
    setIndex(index)
  };


  return (
    <SafeAreaView style={{ backgroundColor:'#fff'}}>
        <HomeHeader/>
        <View style={{ width:'90%', height:50, backgroundColor:'#d3d3d3', borderRadius:30, justifyContent:'center', alignItems:'center', flexDirection:'row', alignSelf:'center', marginTop:20}}>
          <TouchableOpacity onPress={()=>handleToggle(1)} style={[index===1?styles.active:styles.inactive]}><Text style={[index===1?styles.activeText:styles.inactiveText]}>Active</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleToggle(2)} style={[index===2?styles.active:styles.inactive]} ><Text style={[index===2?styles.activeText:styles.inactiveText]}>Inactive</Text></TouchableOpacity>
        </View>
        <View >
          { index===1?<Active/>:null
          }
          {
            index===2?<Inactive/>:null
          }
        </View>
    </SafeAreaView>
  )
};

export default Users;

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
    fontFamily:'Hank_black',
    fontSize:20
  },
  inactiveText:{
    color:'#5AB500',
    fontFamily:'Hank_black',
    fontSize:20
  }
})