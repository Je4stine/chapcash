import { View, Text, Switch } from 'react-native';
import React, {useState} from 'react';

const Inactive = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ backgroundColor:'#EFFAE5'}}>
      <View style={{ marginVertical:20,borderBottomColor:'gray', borderBottomWidth:1, width:'90%', alignSelf:'center', justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
          <Text style={{ fontFamily:'Hank'}}>Activate all</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
    </View>
  )
};

export default Inactive;