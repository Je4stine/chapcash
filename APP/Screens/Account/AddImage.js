import { View, Text, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState} from 'react';
import { BottomSheet } from 'react-native-btr';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AppContext } from '../../Context/AppContext';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddImage = ({ visible, toggleBottomNavigationView}) => {
  const [image, setImage] = useState(null);
  const { user, setUser } = useContext(AppContext);
  const [email, setEmail] = useState('');

  const getData =async()=>{
    const mail = await AsyncStorage.getItem('email');
      setEmail(mail);
  };


  useEffect(()=>{
    getData();
  },[]);



  
  
  const pickImage = async () => {
    // console.log(user)
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      setImage(result.assets[0].uri);
      console.log(image);

      const updatedImage = { ...user, imageUrl: result.assets[0].uri };
      setUser(updatedImage);
  
      let localUri = result.assets[0].uri;
      let filename = localUri.split('/').pop();
  
      let formData = new FormData();
      formData.append('image', {
        uri: localUri,
        type: 'image/jpeg',
        name: filename,
      });

      // console.log(formData)
      
      ToastAndroid.show('Please Wait...', ToastAndroid.SHORT);

      const response = await fetch(`https://www.chapcash.mopawa.co.ke/api/users/${email}/image`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      toggleBottomNavigationView()

      if (response.ok) {
        const responseJson = await response.json();
       
      
        if (responseJson && responseJson.imageUrl) {
    
          const imageUrl = responseJson.imageUrl;
          console.log('Image URL:', imageUrl);
          Alert.alert("Image Uploaded");
          await AsyncStorage.setItem('image', imageUrl);
        } else {
          console.error('Response does not contain imageUrl.');
        }
      } else {
        console.error('Request failed with status:', response.status);
      }
      
  
    } catch (error) {
      console.log('Error uploading image:', error.message);
    }
  };


  const openCamera = async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("You've refused to allow this app to access your camera!");
        return;
      }

      const result = await ImagePicker.launchCameraAsync();
      
  
      setImage(result.assets[0].uri);
      console.log(image);

      if (!result.canceled) {
           
        console.log(result);
      } else {
        cosole.log('Cancelled')
      }

      const updatedImage = { ...user, imageUrl: result.assets[0].uri };
      setUser(updatedImage);
  
      let localUri = result.assets[0].uri;
      let filename = localUri.split('/').pop();
  
      let formData = new FormData();
      formData.append('image', {
        uri: localUri,
        type: 'image/jpeg',
        name: filename,
      });

      // console.log(formData)
      
      ToastAndroid.show('Please Wait...', ToastAndroid.SHORT);

      const response = await fetch(`https://www.chapcash.mopawa.co.ke/api/users/${email}/image`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      toggleBottomNavigationView()

      if (response.ok) {
        const responseJson = await response.json();
       
      
        if (responseJson && responseJson.imageUrl) {
    
          const imageUrl = responseJson.imageUrl;
          console.log('Image URL:', imageUrl);
          Alert.alert("Image Uploaded");
          await AsyncStorage.setItem('image', imageUrl);
        } else {
          console.error('Response does not contain imageUrl.');
        }
      } else {
        console.error('Request failed with status:', response.status);
      }
      
  
      

    } catch (error) {
      console.error("An error occurred:", error);
    }
  };





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

            <TouchableOpacity onPress={openCamera} style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
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

            <TouchableOpacity onPress={pickImage} style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, marginBottom:15}}>
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