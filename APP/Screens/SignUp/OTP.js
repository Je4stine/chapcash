import { View, Text, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPInput from "./OTPComponents/OTPInput";
import { ButtonContainer, ButtonText } from "./OTPComponents/Styles";
import SuccessModal from '../../Components/SuccessModal';


const OTP = () => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  const [countdown, setCountdown] = useState(55);
  const [ visible, setVisible]= useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(countdown => {
        if (countdown === 0) {
          clearInterval(timer);
          return 0;
        }
        return countdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const ModalVis =async()=>{
    if (isPinReady){
      setVisible(true)
    }
  };

  useEffect(()=>{
    ModalVis()
  },[isPinReady]);

 

  const handleResend =()=>{
    setCountdown(55);
  };

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
      <View style={{ paddingHorizontal:20, }}>
        <View style={{}}>
            <Text style={{ fontSize:27, fontFamily:'Montserrat-bold', color:"#000", marginTop:20, marginBottom:5}}>
            OTP code verification
            </Text>
            <Text style={{ fontFamily:'Montserrat-regular'}}>We have sent an OTP code to your mobile number 0708****32, please enter the code below to proceed</Text>
        </View>
      </View>
      <View style={{ marginTop:30}}>
        <OTPInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />

      </View>
      <View style={{ alignSelf:'center', marginTop:30, alignItems:'center'}}>
        <Text style={{ fontFamily:'Montserrat-regular'}}>Didn`t receive code? </Text>
        <Text style={{ fontFamily:'Montserrat-regular'}}>You can resend in {countdown} s</Text>
      </View>
      <TouchableOpacity onPress={handleResend} style={{ alignSelf:"center", marginTop:20}}>
        <Text style={{ fontFamily:'Montserrat-bold' }}>Resend</Text>
      </TouchableOpacity>
      <SuccessModal visible={visible}/>
    </SafeAreaView>
  )
};

export default OTP;