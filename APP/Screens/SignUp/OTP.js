import { View, Text, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPInput from "./OTPComponents/OTPInput";
import { ButtonContainer, ButtonText } from "./OTPComponents/Styles";


const OTP = () => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  const [countdown, setCountdown] = useState(55);

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


  const handleResend =()=>{
    setCountdown(55);
  };

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
      <View style={{ marginLeft:20}}>
        <View style={{}}>
            <Text style={{ fontSize:27, fontWeight:'700', color:"#000", marginTop:20, marginBottom:5}}>
            OTP code verification
            </Text>
            <Text>We have sent an OTP code to your mobile number 0708****32, please enter the code below to proceed</Text>
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
        <Text>Didn`t receive code? </Text>
        <Text>You can resend in {countdown} s</Text>
      </View>
      <TouchableOpacity onPress={handleResend} style={{ alignSelf:"center", marginTop:20}}>
        <Text style={{ fontWeight:'bold' }}>Resend</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default OTP;