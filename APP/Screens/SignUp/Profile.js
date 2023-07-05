import { View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import SuccessModal from '../../Components/SuccessModal';
import { AppContext } from '../../Context/AppContext';


const Profile = ({ navigation, route }) => {
   const [ till, setTill]= useState('');
   const [organization, setOrganization]= useState('');
   const { password, email, shopNumber, fullname, phonenumber} = route.params
   const [ loading, setLoading] = useState(false);
   const { user, setUser} = useContext(AppContext)

   const handleSignUp = async ()=>{
    setLoading(true);
   
      await fetch ('https://www.chapcash.mopawa.co.ke/api/signup',{
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          password,
          email,
          phonenumber,
          shopcode: shopNumber,
          name: fullname,
          till,
          organization,
          role: 'admin'
        })
      })
      .then((response)=>response.json())
      .then((response)=>{
          if(response.error){
            setTimeout(()=>{
              Alert.alert(response.error)
            }, 100);
            setLoading(false);
          } else {
            setLoading(false)
            setUser(response)
            navigation.navigate('OTP')
          }
        

      }).catch(error=> setTimeout(()=>{
        Alert.alert('An error occurred please check you internet connection the try again')
        setLoading(false)
      },100))
   
  };
    

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff', }}>
   
    <View style={{ alignItems:'center', paddingHorizontal:20}}>
        <View>
            <Text style={{ fontSize:27, fontFamily:'Montserrat-bold', color:"#000", marginTop:20, marginBottom:5}}>
                Please Fill in
            </Text>
            <Text style={{ fontSize:27, fontFamily:'Montserrat-bold', color:"#000", marginBottom:20, color:'#5AB500'}}>
                Till/Paybill details
            </Text>
            <View style={{}}>
                <Text style={{ fontFamily:'Montserrat-regular'}}>A verification code will be sent to your mobile number after you click verify</Text>
            </View>
            
        </View>
    </View>
    <View style={{paddingHorizontal:30, marginTop:40}}>
       <TextInput
       
        placeholder='Till/Paybill No.'
        onChangeText={(text)=>setTill(text)}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
       
      
    </View>
    <View style={{paddingHorizontal:30, marginTop:20}}>
       <TextInput
        placeholder='Organization Name'
        onChangeText={(text)=>setOrganization(text)}
        style={{ borderBottomColor:'black', borderBottomWidth:1, padding:10, fontFamily:'Montserrat-regular'}}
       />
     </View>

    
   
   <View style={{flex:1, justifyContent:'flex-end', marginBottom:30}}>
        
        <TouchableOpacity onPress={handleSignUp} style={{ justifyContent:'center', alignItems:'center', backgroundColor:'#5AB500', width:'80%', height:50, borderRadius:48, marginTop:40, alignSelf:'center'}}>
                <Text style={{ color:'#fff', fontSize:24, fontFamily:'Montserrat-bold'}}>Verify</Text>
        </TouchableOpacity>
    </View>
    {
      loading?<View style={{ backgroundColor:'rgba(0, 0, 0, 0.2)', alignSelf:'center', alignItems:'center', justifyContent:'center',position:'absolute', top:0, left:0, right:0, bottom:0}}>
      <Image source={require('../../Assets/Images/loader.gif')} style={{ height:70, width:70}}/>
    </View>:<View/>
    }
  
    </SafeAreaView>
  )
}

export default Profile;