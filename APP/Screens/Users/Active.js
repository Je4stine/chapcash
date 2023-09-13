import { View, Text, Switch, ScrollView } from 'react-native';
import React, {useState} from 'react';
import UserCard from './UserCard';

const Active = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ backgroundColor:'#fff', marginTop:20}}>
      <View style={{  marginVertical:20 ,borderBottomColor:'gray', borderBottomWidth:1, width:'90%', alignSelf:'center', justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
          <Text style={{ fontFamily:'Hank_bold'}}>Deactivate all</Text>
          <Switch
            trackColor={{false: '#767577', true: 'green'}}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <ScrollView style={{ }}>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            
        </ScrollView>
           
    </View>
  )
};

export default Active;