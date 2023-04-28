import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useRef} from 'react';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Message = () => {
    const navigation = useNavigation();
    
    const itemRef = useRef(null);

    

    handleTouch =()=>{
        navigation.navigate('Confirm')
        itemRef.current.close();
    }

    const rightButton = (
        <SwipeButtonsContainer
            
            style={{
                alignSelf: 'center',
                aspectRatio: 1,
                flexDirection: 'column',
                padding: 10,
            }}>
            <TouchableOpacity
                onPress={handleTouch} style={{ }}>
                {/* <MaterialCommunityIcons name="text-box-check-outline" size={24} color="#136207" /> */}
                <MaterialCommunityIcons name="text-box-remove-outline" size={24} color="#ff0000" />
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );
  return (
    <View>
      <SwipeProvider >
            <SwipeItem
                style={styles.button}
                swipeContainerStyle={styles.swipeContentContainerStyle}
                rightButtons={rightButton}
                ref={itemRef}
                
                >
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <View style={{ backgroundColor:'#ff0000', padding:8, borderRadius:28, marginRight:10}}><Text style={{ color:'#fff',fontFamily:'Hank_black', fontSize:16}}>KM</Text></View>
                    <View>
                        <Text style={{ fontFamily:'Hank_black', color:'#136207', fontSize:18}}>Kevin Morias</Text>
                        <Text style={{ fontFamily:'Hank_bold', color:'gray', fontSize:15}}>07***18032</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily:'Hank_black' , color:'#136207', fontSize:18}}>+Ksh. 2,300</Text>
                    <Text style={{alignSelf:"flex-end",fontFamily:'Hank_black', color:'gray', fontSize:15}}>8.28AM</Text>
                </View>

            </SwipeItem>
        </SwipeProvider>
    </View>
  )
};

export default Message;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 70,
        alignSelf: 'center',
        marginVertical: 5,
    },
    swipeContentContainerStyle: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#EFFAE5',
    }
});
