import { View, Text, Switch } from 'react-native'
import React, {useState} from 'react'

const UserCard = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:20}}>
        <View style={{ flexDirection:'row'}}>
            <View style={{ backgroundColor:'#5AB500', padding:8, borderRadius:28, marginRight:15}}><Text style={{color:'#ffff', fontFamily:'Hank_black', fontSize:20}}>LM</Text></View>
            <View>
                <Text style={{ fontFamily:'Hank_black', color:'#136207', fontSize:18}}>Lorna May</Text>
                <Text style={{fontFamily:'Hank_bold', color:'gray', fontSize:15}}>W001</Text>
            </View>
        </View>
        <Switch
            trackColor={{false: '#767577', true: 'green'}}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
    </View>
  )
}

export default UserCard;