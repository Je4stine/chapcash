import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const TotalUser = () => {
    const { user } = useContext(AppContext)
  return (
    <View style={{ flexDirection:'row', padding:10, justifyContent:'space-between', alignItems:'center', marginBottom:5}}>
      <View style={{ flexDirection:'row', alignItems:'center'}}>
      {
          user.imageUrl === null || user.imageUrl === '' ?<Image source={require('../../Assets/Images/user.png')} style={{ marginRight:10, height:50, width:50, borderRadius:25}}/>: 
          <Image source={{ uri: user.imageUrl }} style={{ marginRight:10, height:36, width:36, borderRadius:18, borderWidth:2, borderColor:'green'}}/>
        }

       <View>
        <Text style={{ fontFamily:'Montserrat-bold', color:'#002C11', fontSize:18}}>John Doe</Text>
        <Text style={{ fontFamily:'Montserrat-regular', color:'gray', fontSize:13, }}>Waiter 001</Text>
      </View>
      </View>
      
      <Text  style={{ fontFamily:'Montserrat-medium', color:'#002C11', fontSize:18}}>+Ksh. 54,360</Text>
    </View>
  )
}

export default TotalUser;