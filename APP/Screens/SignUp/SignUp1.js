import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheet } from 'react-native-btr';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const SignUp1 = ({ navigation }) => {

    const [visible, setVisible]= useState(false);
    const [active, setActive]= useState(false);

    const [mactive, setMactive]= useState(false);

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
      };

    const handleStaffSignUp =()=>{
        setActive(true);
        setMactive(false);
        toggleBottomNavigationView();
        navigation.navigate('User1')
    };

    const handleManagerSignUp =()=>{
        setMactive(true);
        setActive(false);
        toggleBottomNavigationView();
        navigation.navigate('SignUp3')
    };
      
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
    <View style={{ alignItems:'center'}}>
        <Image source={require('../../Assets/Images/logo2.1.png')} style={{ height:260, width:268}}/>
    </View>
    <View style={{ alignItems:'center'}}>
        <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#5AB500", marginTop:0}}>
            Welcome to
        </Text>
        <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#000", marginTop:0}}>
            ChapCash
        </Text>
    </View>
    <View style={{ alignItems:'center', marginTop:40}}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginBottom:40}}>
            <Text style={{ color:'#fff', fontSize:24,  fontFamily:'Montserrat-bold'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleBottomNavigationView} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#D9D9D9', width:'80%', height:50, borderRadius:48}}>
            <Text style={{ color:'#5AB500', fontSize:24,  fontFamily:'Montserrat-bold'}}>Signup</Text>
        </TouchableOpacity>
    </View>
    <View style={{ alignItems:'center', marginTop:40, flexDirection:'row', justifyContent:'center'}}>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'25%'}}></View>
        <Text style={{ marginHorizontal:10, fontSize:19, color:'#8E8A8A',  fontFamily:'Montserrat-regular'}}>Or continue with</Text>
        <View style={{ backgroundColor:'#D9D9D9', height:0.5, width:'25%'}}></View>
    </View>
    <View style={{ flexDirection:'row', justifyContent:'space-around', marginTop:50}}>
        <TouchableOpacity style={{ paddingHorizontal:20, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/google-icon.png')} style={{height:30, width:29}}/></TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal:20, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/facebook.png')} style={{height:30, width:30}}/></TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal:20, borderWidth:0.5, borderColor:'#D9D9D9', borderRadius:49, justifyContent:'center', alignItems:'center'}}><Image source={require('../../Assets/Images/baseline-apple.png')} style={{height:37, width:36}}/></TouchableOpacity>
    </View>

    <View>
            <BottomSheet
                visible={visible}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}>
                    <View style={{
                    margin: 2,
                    // justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30,
                    padding:10
                    }}>

                    <View style={{backgroundColor: '#fff',
                    width: '100%',
                    height: '60%',
                    justifyContent: 'center',
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30,
                    }}>

                    <View style={{ flex:1, justifyContent:'space-between', marginTop:50}}>
                    <View style={{ alignItems:'center'}}>
                        <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#5AB500", marginTop:0}}>
                            Welcome to
                        </Text>
                        <Text style={{ fontSize:27,  fontFamily:'Montserrat-bold', color:"#000", marginTop:0}}>
                            ChapCash
                        </Text>
                    </View>

                    <View style={{ alignItems:'center', marginTop:40}}>
                        <Text style={{ fontFamily:'Montserrat-regular', fontSize:18}}>You can sign up as</Text>
                    </View>

                    <View style={{ alignItems:'center', marginTop:50}}>
                        <TouchableOpacity onPress={handleStaffSignUp} style={[ active?styles.active:styles.inactive]}>
                            <Text style={[ active?styles.activeText:styles.inactiveText]}>Staff</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={handleManagerSignUp} style={[ mactive?styles.active:styles.inactive]}>
                            <Text style={[ mactive?styles.activeText:styles.inactiveText]}>Manager</Text>
                        </TouchableOpacity>

                    </View>

                    </View>
                    </View>
                    </View>
                </BottomSheet>
            </View>
    </SafeAreaView>
  )
}

export default SignUp1;

const styles = StyleSheet.create({
    active:{
        justifyContent:'center', alignItems:'center', width:'80%', height:50, borderRadius:48, marginBottom:40, flexDirection:'row', borderWidth:1, borderColor:'#5AB500', backgroundColor:'#5AB500'
    },

    activeText:{
        color:'#fff', fontSize:24,  fontFamily:'Montserrat-bold', marginRight:10
    },

    inactive:{
        justifyContent:'center', alignItems:'center', width:'80%', height:50, borderRadius:48, marginBottom:40, flexDirection:'row', borderWidth:1, borderColor:'#5AB500'
    },
    inactiveText:{
        color:'#5AB500', fontSize:24,  fontFamily:'Montserrat-bold', marginRight:10
    }
})