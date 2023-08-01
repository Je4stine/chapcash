import { View, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AddImage from './AddImage';


const Account = ({navigation}) => {
  const [ visible, setVisible]= useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  
  };




  return (
    <SafeAreaView style={{ flex:1}}>
        <ScrollView>
    <View>
      <View style={{ flexDirection:"row", justifyContent:'space-between', padding:10}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{ backgroundColor:"#D3D3D3", borderRadius:20, padding:2, aligntems:'center'}}><AntDesign name="close" size={17} color="black" /></TouchableOpacity>
        <Feather name="bell" size={20} color="black" />
      </View>
      <Text style={{ fontFamily:'Montserrat-bold', marginLeft:10, marginTop:15, fontSize:22}}>Your Account</Text>
      <View style={{ padding:10}}>
        <Text style={{ fontFamily:'Montserrat-regular'}}>
            Currently using as:
        </Text>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:5}}></View>
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
            <View style={{ flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={toggleBottomNavigationView} style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                        <Text style={{ fontFamily:'Montserrat-regular'}}>NO</Text>
                        <View style={{position:'absolute', bottom:-1, right:5, backgroundColor:'#fff', padding:2, borderRadius:7}}><Entypo name="camera" size={12} color="black" /></View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Your account</Text>
                        <Text style={{ fontFamily:'Montserrat-regular'}}>You can edit your profile</Text>
                    </View>
            </View>
           
            <TouchableOpacity style={{ backgroundColor:'#d3d3d3', paddingHorizontal:10, borderRadius:7}}>
                <Text style={{ fontFamily:'Montserrat-regular'}}>Edit</Text>
            </TouchableOpacity>
        </View>

            <Text style={{ fontFamily:'Montserrat-regular'}}>
                Payment
            </Text>
            <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:5}}></View>

            <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <FontAwesome5 name="money-bill" size={18} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Make payments</Text>
                            <Text style={{ fontFamily:'Montserrat-regular'}}>You can make payment via mpesa</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <Text style={{ marginTop:10}}>
                General
            </Text>
            <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'95%', marginTop:5}}></View>

            <TouchableOpacity onPress={()=>navigation.navigate('Settings')} style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <View style={{ height:50, width:50, backgroundColor:'#d3d3d3', borderRadius:25, justifyContent:'center', alignItems:'center', marginRight:20, position:'relative'}}>
                            <Feather name="settings" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Settings</Text>
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
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Privacy & Security</Text>
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
                            <Text style={{fontFamily:'Montserrat-bold', fontSize:17}}>Help</Text>
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
                            <Text style={{ fontFamily:'Montserrat-bold', fontSize:17}}>Logout</Text>
                        </View>
                </View>
            
                <View >
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

        
            <Text style={{ color:'gray', marginTop:20, fontFamily:'Montserrat-regular'}}>ChapCash V1.00</Text>
      </View>
      </View>
      <AddImage visible={visible} toggleBottomNavigationView={toggleBottomNavigationView}/>
      </ScrollView>
    </SafeAreaView>
  )
};

export default Account;