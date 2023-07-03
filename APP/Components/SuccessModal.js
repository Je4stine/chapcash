import {
    View,
    StyleSheet,
    Modal,
    Text,
    TouchableOpacity,
    Animated,
    Image
  } from 'react-native';
import React, { useState, useRef, useEffect, useContext} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation()
    

   

    useEffect(() => {
      if (showModal) {
        const timeout = setTimeout(() => {
          navigation.navigate('Main');
          setShowModal(false);
        }, 3000);
    
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [showModal]);
 
    

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


const SuccessModal = ({ visible}) => {
  
  return (
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <ModalPoup visible={visible}>
            <View style={{ alignItems:"center"}}>
                <MaterialIcons name="stars" size={55} color="green" />
                <Text style={{ color:'green',fontFamily:'Montserrat-bold', fontSize:22, marginBottom:20, marginTop:20}}>Signup Succesfull!</Text>
                <Text style={{ textAlign:'center', fontSize:15, fontFamily:'Montserrat-regular'}}>Please wait you will be directed to the homepage</Text>
                <Image source={require('../Assets/Images/spinning-loading.gif')} style={{ height:100, width:100, marginTop:20}}/>
            </View>
          </ModalPoup>
    </View>
  )
};

export default SuccessModal;

const styles = StyleSheet.create({
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20,
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  })