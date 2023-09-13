import { View, Text, TouchableOpacity, ToastAndroid, Share, Alert } from 'react-native';
import React from 'react';
import { BottomSheet } from 'react-native-btr';
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';


const ShareSheet = ({sheetVisible, toggleBottomNavigationView}) => {
   
    async function handleCopyLink (){
        ToastAndroid.show('Copied to clickboard', ToastAndroid.SHORT);
        await Clipboard.setStringAsync('https://www.chapcash.co.ke');
    }

    
    const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://www.chapcash.co.ke',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View>
      <BottomSheet
          visible={sheetVisible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
            <View style={{
              margin: 2,
            //   justifyContent: 'center',
            //   alignItems: 'center',
              backgroundColor: '#fff',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              padding:20
              }}>

            <View style={{backgroundColor: '#fff',
              width: '100%',
              height: '55%',
              justifyContent: 'center',
              alignItems:'center',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              }}>

              <View style={{marginTop:30, alignself:'center', backgroundColor:'rgba(211, 211, 211, 0.5)', height:70, width:70,borderRadius:40, padding:10, alignItems:'center', justifyContent:'center'}}>
                    <EvilIcons name="share-google" size={40} color="black" />
              </View>
              <View style={{ marginTop:20}}>
                <Text style={{ fontSize: 25,fontFamily:'Montserrat-bold',}}>Share ChapCash with Friends</Text>
              </View>

              <View style={{ marginTop:50, flexDirection:'row', alignItems:'center', justifyContent:'space-around', flex:1}}>
                <TouchableOpacity onPress={handleCopyLink}><View style={{ marginRight:20, height:60, width:60, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(211, 211, 211, 0.2)', borderRadius:30}}><EvilIcons name="link" size={30} color="black" /></View><Text>Copy link</Text></TouchableOpacity>
                <TouchableOpacity><View style={{ marginRight:20, height:60, width:60, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(211, 211, 211, 0.2)', borderRadius:30}}><FontAwesome5 name="whatsapp" size={30} color="#4AC959" /></View><Text>WhatsApp</Text></TouchableOpacity>
                <TouchableOpacity><View style={{ marginRight:20, height:60, width:60, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(211, 211, 211, 0.2)', borderRadius:30}}><FontAwesome5 name="twitter" size={30} color="#1DA1F2" /></View><Text>Twitter</Text></TouchableOpacity>
                <TouchableOpacity><View style={{ marginRight:20, height:60, width:60, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(211, 211, 211, 0.2)', borderRadius:30}}><FontAwesome5 name="facebook" size={30} color="blue" /></View><Text>Facebook</Text></TouchableOpacity>
              </View>
            </View>
            </View>
        </BottomSheet>
    </View>
  )
};

export default ShareSheet;