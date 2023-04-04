import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../Home/HomeHeader';

const Users = () => {
  const [index, setIndex]=useState(1);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle =(index)=>{
    setIndex(index)
  };

  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView>
        <HomeHeader/>
        <View style={{ width:'90%', height:50, backgroundColor:'#D3D3D3', borderRadius:30, justifyContent:'center', alignItems:'center', flexDirection:'row', alignSelf:'center', marginTop:20}}>
          <TouchableOpacity onPress={()=>handleToggle(1)} style={[index===1?styles.active:styles.inactive]}><Text style={[index===1?styles.activeText:styles.inactiveText]}>Active</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleToggle(2)} style={[index===2?styles.active:styles.inactive]} ><Text style={[index===2?styles.activeText:styles.inactiveText]}>Inactive</Text></TouchableOpacity>
        </View>
        <View style={{ padding:20, borderBottomColor:'gray', borderBottomWidth:1, width:'90%', alignSelf:'center', justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
          <Text>Activate all</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
    </SafeAreaView>
  )
};

export default Users;

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
    fontFamily:'Hank_black',
    fontSize:20
  },
  inactiveText:{
    color:'#136207',
    fontFamily:'Hank_black',
    fontSize:20
  }
})