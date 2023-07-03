import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AddImage from './AddImage';


const Settings = ({navigation}) => {
  const [ visible, setVisible]= useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  
  };




  return (
    <SafeAreaView style={{ flex:1, paddingHorizontal:10}}>
    <View>
      <View style={{ flexDirection:"row", justifyContent:'space-between', padding:10}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{ backgroundColor:"#D3D3D3", borderRadius:20, padding:2, aligntems:'center'}}><AntDesign name="close" size={17} color="black" /></TouchableOpacity>
        <Feather name="bell" size={20} color="black" />
      </View>
      <Text style={{ fontFamily:'Montserrat-bold', marginTop:15, fontSize:22}}>Settings</Text>
     </View>

            <Text style={{ marginTop:10}}>
                General
            </Text>
            <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:5}}></View>

            <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <Feather name="settings" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Notification</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                             <MaterialIcons name="privacy-tip" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Rate the app</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <Feather name="help-circle" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{fontFamily:'Montserrat-bold', fontSize:17}}>Agreements</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <AntDesign name="logout" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Our Story</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

        
            <Text style={{ color:'gray', marginTop:20, fontFamily:'Montserrat-regular'}}>ChapCash V1.00</Text>
   
      <AddImage visible={visible} toggleBottomNavigationView={toggleBottomNavigationView}/>
    </SafeAreaView>
  )
};

export default Settings;