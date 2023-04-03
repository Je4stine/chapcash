import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Message = () => {
    const rightButton = (
        <SwipeButtonsContainer
            style={{
                alignSelf: 'center',
                aspectRatio: 1,
                flexDirection: 'column',
                padding: 10,
            }}>
            <TouchableOpacity
                onPress={() => console.log('right button clicked')} style={{ }}>
                <MaterialCommunityIcons name="text-box-check-outline" size={24} color="#136207" />
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );
  return (
    <View>
      <SwipeProvider>
            <SwipeItem
                style={styles.button}
                swipeContainerStyle={styles.swipeContentContainerStyle}
                rightButtons={rightButton}>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <View style={{ backgroundColor:'#00c04b', padding:8, borderRadius:28, marginRight:10}}><Text style={{ color:'#fff',fontWeight:'bold',}}>KM</Text></View>
                    <View>
                        <Text style={{ fontWeight:'bold', color:'#136207', fontSize:15}}>Kevin Morias</Text>
                        <Text style={{ fontWeight:'bold', color:'gray', fontSize:12}}>07***18032</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight:'bold', color:'#136207', fontSize:15}}>+Ksh. 2,300</Text>
                    <Text style={{alignSelf:"flex-end", fontWeight:'bold', color:'gray', fontSize:12}}>8.28AM</Text>
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
        backgroundColor:'#f4fdf4',
    }
});
