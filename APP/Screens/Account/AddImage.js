import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { BottomSheet } from 'react-native-btr';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const AddImage = ({ visible, toggleBottomNavigationView}) => {
  return (
    <View style={{ paddingHorizontal:5}}>
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
            <View style={{
              margin: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              padding:10
              }}>

            <View style={{backgroundColor: '#fff',
              width: '100%',
              height: '25%',
              justifyContent: 'center',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              }}>

            <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                          <Entypo name="camera" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{  fontFamily:'Montserrat-bold', fontSize:17}}>Take Photo</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                          <FontAwesome5 name="images" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{  fontFamily:'Montserrat-bold', fontSize:17}}>Choose From Gallery</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>


              </View>
              </View>
        </BottomSheet>
    </View>
  )
};

export default AddImage;