import { View, Text, TouchableOpacity, Animated, TouchableWithoutFeedback  } from 'react-native'
import React, { useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../Home/HomeHeader'
import Stats from '../Home/Stats'
import TotalUser from './TotalUser';
import { Feather, AntDesign, Foundation, Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';

const UserAnalytics = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const rotationValue = new Animated.Value(0);
  
    const rotateButton = () => {
      setIsExpanded(!isExpanded);
      Animated.spring(rotationValue, {
        toValue: isExpanded ? 0 : 1,
        friction: 5,
        useNativeDriver: false,
      }).start();
    };
  
    const rotate = rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'], // Adjust the angle as needed
    });


    const handleDownload =async()=>{
        const uri = "https://www.chapcash.mopawa.co.ke/download-excel";
        const fileName = "payment_reports.xlsx";
    
        const result = await FileSystem.downloadAsync(
            "https://www.chapcash.mopawa.co.ke/download-excel",
    
            FileSystem.documentDirectory + fileName,
            {
                headers: {
                  "MyHeader": "MyValue"
                }
              }
        );
        console.log(result)
        save(result.uri, fileName, result.headers["Content-Type"])
        
      };
    
      const save =async (uri, fileName, mimetype)=>{
        const permission = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
        if(permission.granted){
            const base64 = await FileSystem.readAsStringAsync(uri, {encoding: FileSystem.EncodingType.Base64});
            await FileSystem.StorageAccessFramework.createFileAsync(permission.directoryUri, fileName, mimetype)
            .then(async(uri)=>{
                await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64})
            })
            .catch(error=>{
                console.log(error)
            });
        } else{
            shareAsync(uri)
        }
      }


  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff', position:'relative'}}>
      <View style={{ }}>
      <HomeHeader/>
      <View style={{ width:'95%', alignSelf:'center', backgroundColor:'#f4f4f4', padding:15, borderRadius:10, marginBottom:'3%'}}>
        <Stats/>
      </View>
      <View>
        <Text style={{ color:'#5AB500',
        fontFamily:'Montserrat-bold',
        fontSize:18, marginVertical:10, marginLeft:10}}>Today</Text>
        <TotalUser/>
        <TotalUser/>
        <TotalUser/>
        <TotalUser/>
        <TotalUser/>
        <TotalUser/>
        <TotalUser/>
        <TotalUser/>
        <TotalUser/>
        <TotalUser/>
      </View>

     
      </View>
      <TouchableOpacity onPress={rotateButton} style={{ position:'absolute', bottom:'3%', right: '3%'}}>
      <Animated.View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{ rotate }],
          }}
        >
        {isExpanded ? <Ionicons name="close-outline" size={30} color="#fff" />:<Feather name="download" size={24} color="#fff" />}
        </Animated.View>
      </TouchableOpacity>

      {isExpanded && (
        <View style={{ flexDirection: 'row', marginTop: 10, position:'absolute', bottom:'3%', right:'20%' }}>
          <TouchableOpacity
          onPress={handleDownload}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            <Foundation name="page-csv" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={handleDownload}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AntDesign name="pdffile1" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

export default UserAnalytics;