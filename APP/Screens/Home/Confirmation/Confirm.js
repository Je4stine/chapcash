import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Alert, Image, Animated, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useRef, useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Feather } from '@expo/vector-icons';
import SnackBar from 'react-native-snackbar-component';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Confirm = ({ navigation, route}) => {
  const [copiedText, setCopiedText] = useState('');
  const { FirstName, Amount, MSISDN, ID, msgId}= route.params;
  const [visible, setVible]= useState(false);
  const [ msg, setMsg]= useState('');
  const [ loading, setLoading]= useState(false);
  const [user, setUser] = useState('');
  // const navigation = useNavigation()

  const handleDismiss =async()=>{
    setVible(false);
    navigation.navigate('Main')
  };

  const getName =async()=>{
    const username = await AsyncStorage.getItem('username');
    setUser(username)
  };

  useEffect(()=>{
    getName();
  },[]);

 

  const regexPattern = /\b(\w)/g;
  const abrreviate = FirstName.match(regexPattern);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
    ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

 
  const handleConfirm = async ()=>{
      ToastAndroid.show('Please wait...', ToastAndroid.SHORT);
      setLoading(true);
      console.log(msgId)
      await fetch ('https://www.chapcash.mopawa.co.ke/api/confirm',{
        method: 'PUT',
        headers:{
          'Accept':'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id:msgId,
          user: user
        })
      })
      .then((response)=>response.json())
      .then((response)=>{
        setLoading(false)
        setVible(true)
        setMsg(response);
      })
     
      .catch(error=> setTimeout(()=>{
        setLoading(false)
        Alert.alert('An error occurred please check you internet connection the try again')
        
      },100))
   
  };
    

  const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;

 
    

    useEffect(() => {
      toggleModal();
    }, [visible]);




    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };


    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };



  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{ position:'absolute', top:50, left:20 }}>
          <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#fff', width:'90%', paddingVertical:20, borderRadius:20}}>
            
            <View style={styles.regx}>
                <Text style={{ color:'#ffff', fontSize:40,  fontFamily:'Montserrat-bold'}}>{abrreviate}</Text>
            </View>
          <Text style={{ fontFamily:'Montserrat-bold', fontSize:20, color:'#5AB500', marginBottom:10}}>{FirstName}</Text>
          <View style={{ flexDirection:'row', marginBottom:10}}>
            <Text style={{ marginTop:5, fontFamily:'Hank'}}>Ksh.</Text>
            <Text style={{ fontSize:30, fontFamily:'Novera-black',color:'#5AB500'}}>{Amount}</Text>
            <Text style={{ marginTop:5, fontFamily:'Hank'}}>.00</Text>
          </View>
          <View style={{ paddingHorizontal:30,paddingVertical:8, marginBottom:10,backgroundColor:'#cefad0', borderRadius:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontFamily:'Montserrat-bold', color:'#5AB500', marginRight:10, fontSize:20}}>{ID}</Text>
            <TouchableOpacity onPress={copyToClipboard}><FontAwesome5 name="copy" size={18} color="#5AB500" /></TouchableOpacity>
          </View>
          <View style={{ alignItems:'center'}}>
            <Text style={{ color:'gray', fontFamily:'Montserrat-bold'}}>Contact</Text>
            <Text style={{ color:'gray', fontFamily:'Montserrat-bold', fontSize:18}}>{MSISDN}</Text>
          </View>
          <TouchableOpacity onPress={handleConfirm} style={{ marginVertical:20, padding:18, width:'50%', backgroundColor:'#5AB500', borderRadius:40, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ color:'#fff', fontFamily:'Montserrat-bold', fontSize:20}}>Confirm</Text>
          </TouchableOpacity>
      </View>
      {
      loading?<View style={{ backgroundColor:'rgba(0, 0, 0, 0.2)', alignSelf:'center', alignItems:'center', justifyContent:'center',position:'absolute', top:0, left:0, right:0, bottom:0}}>
      <Image source={require('../../../Assets/Images/loader.gif')} style={{ height:70, width:70}}/>
    </View>:<View/>
    }
      <View style={{ justifyContent:'center', alignItems:'center',}}>
       <ModalPoup visible={visible}>
          <View style={{alignItems: 'center'}}>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{ fontFamily:'Montserrat-bold', fontSize:21, color:'#5AB500',}}>Payment Confirmed</Text>
          </View>
          <View style={{alignItems: 'center', marginTop:20}}>
            <Image source={ require('../../../Assets/Images/verified.gif')} style={{ height:100, width:100}}/>
          </View>
          <TouchableOpacity onPress={handleDismiss} style={{ alignSelf:'center',marginTop:20, padding:10, width:'30%', backgroundColor:'#5AB500', borderRadius:40, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ color:'#fff', fontFamily:'Montserrat-bold', fontSize:20}}>Dismiss</Text>
          </TouchableOpacity>
        </ModalPoup>
        </View>
    </SafeAreaView>
  )
}

export default Confirm;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#EFFAE5'
    },
    regx:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '90%',
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 50,
      borderRadius: 10,
      elevation: 20,
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
})