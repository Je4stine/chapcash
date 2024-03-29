import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, {useRef} from 'react';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Shimmer from '../../../Components/Shimmer';
import ShiView from '../../../Components/ShiView';


const Message = ({ FirstName ='John', MSISDN, TransAmount, TransTime, itemRef, handleTouch, loading=false}) => {
    const navigation = useNavigation();
    // const itemRef = useRef(null);
    const regexPattern = /\b(\w)/g;
    const abrreviate = FirstName.match(regexPattern);


   
    // handleTouch =()=>{
    //     navigation.navigate('Confirm')
    //     itemRef.current.close();
    // }

    const rightButton = (
        <SwipeButtonsContainer
            
            style={{
                alignSelf: 'center',
                aspectRatio: 1,
                flexDirection: 'column',
                padding: 8,
                backgroundColor:'red',
                borderRadius:3,
                marginLeft:10
            }}>
            <TouchableOpacity
                onPress={handleTouch} style={{ }}>
                {/* <MaterialCommunityIcons name="text-box-check-outline" size={24} color="#136207" /> */}
                <MaterialCommunityIcons name="text-box-remove-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );
  return (
    <>{
        loading ? <View style={{ }}><ShiView/></View>:(
            <View>
            <SwipeProvider closeTrigger='onItemMoved' mode="Single">
                  <SwipeItem
                      style={styles.button}
                      swipeContainerStyle={styles.swipeContentContainerStyle}
                      rightButtons={rightButton}
                      ref={itemRef}
                      
                      >
                      <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                          <View style={{ backgroundColor:'#ff0000', width:36, height:36, borderRadius:25, marginRight:10, justifyContent:'center', alignItems:'center'}}><Text style={{ color:'#fff',fontFamily:'Montserrat-bold', fontSize:16}}>{abrreviate}</Text></View>
                          <View>
                              <Text style={{ fontFamily:'Montserrat-bold', color:'#002C11', fontSize:18}}>{FirstName}</Text>
                              <Text style={{ fontFamily:'Montserrat-regular', color:'gray', fontSize:13, marginTop:5}}>{MSISDN}</Text>
                          </View>
                      </View>
                      <View>
                          <Text style={{ fontFamily:'Montserrat-medium' , color:'#002C11', fontSize:18}}>+Ksh. {TransAmount}</Text>
                          <Text style={{alignSelf:"flex-end",fontFamily:'Montserrat-regular', color:'gray', fontSize:13, marginTop:5}}>{TransTime}</Text>
                      </View>
      
                  </SwipeItem>
              </SwipeProvider>
          </View>
        )
    }
   
    </>
  )
};

export default Message;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 60,
        alignSelf: 'center',
        marginVertical: 5,
    },
    swipeContentContainerStyle: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#fff',
    }
});
