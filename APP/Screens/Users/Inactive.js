import { View, Text, Switch } from 'react-native';
import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import UserCard from './UserCard';

const Inactive = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ backgroundColor:'#fff'}}>
      <View style={{ marginVertical:20,borderBottomColor:'gray', borderBottomWidth:1, width:'90%', alignSelf:'center', justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
          <Text style={{ fontFamily:'Hank_bold'}}>Activate all</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{ }}>
        <ScrollView style={{ }}>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>         

          
        </ScrollView>
        </View>
    </View>
  )
};

export default Inactive;