import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';

const Stats = () => {
  const [on, setOn] = useState(true);

  const toggleEye = ()=>{
      setOn(!on)
  };

  return (
    <View style={{ justifyContent:'center', alignItems:'center', marginVertical:18, paddingVertical:20}}>
      <View style={{ flexDirection:'row'}}>
        <Text style={{ color:'#5AB500', marginTop:5, fontFamily:'Hank'}}>Ksh.</Text>
          <View style={{ flexDirection:'row', justifyContent:'center'}}>
            <Text style={{ fontSize:45, color:'#5AB500',fontFamily:'Novera-black'}}>00,000</Text>
            <Text style={{ color:'#5AB500', marginTop:5, fontFamily:'Hank'}}>.00</Text>
        </View>
        
      </View>
      <Text style={{ color:'#5AB500', fontFamily:'Montserrat-bold', marginRight:20}}>Confirmed today</Text>
    </View>
  )
};

export default Stats;