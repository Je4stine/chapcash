import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import React, { useRef} from 'react';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider, OpenDirection } from 'react-native-swipe-item';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Message = ({ FirstName = 'John', MSISDN, TransAmount, TransTime, itemRef, handleTouch}) => {
    const navigation = useNavigation();
    // const itemRef = useRef(null);
    const regexPattern = /\b(\w)/g;
    const abrreviate = FirstName.match(regexPattern);

    // handleTouch =()=>{
    //     navigation.navigate('Confirmed')
    //     itemRef.current.close();
    // }

    const rightButton = (
        <SwipeButtonsContainer
            style={{
                alignSelf: 'center',
                aspectRatio: 1,
                flexDirection: 'column',
                padding: 10,
                backgroundColor:'#5AB500',
                borderRadius:3
            }}>
            <TouchableOpacity
                onPress={handleTouch} style={{ }}>
                <MaterialCommunityIcons name="text-box-check-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );
  return (
    <View style={{ }}>
      <SwipeProvider>
            <SwipeItem
                style={styles.button}
                swipeContainerStyle={styles.swipeContentContainerStyle}
                rightButtons={rightButton}
                ref={itemRef}
                onChange={({ openDirection }) => {
                    if (openDirection !== OpenDirection.NONE) {
                      // Close all other open items
                      [...itemRef.current.entries()].forEach(([key, ref]) => {
                        if (key !== item.key && ref) ref.close();
                      });
                    }
                  }}
                >
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <View style={{ backgroundColor:'#5AB500',width:36, height:36, borderRadius:25, marginRight:10, justifyContent:'center', alignItems:'center'}}><Text style={{ color:'#fff',fontFamily:'Montserrat-bold', fontSize:16}}>{abrreviate}</Text></View>
                    <View>
                        <Text style={{ fontFamily:'Montserrat-bold', color:'#002C11', fontSize:18}}>{FirstName}</Text>
                        <Text style={{ fontFamily:'Montserrat-regular', color:'gray', fontSize:15}}>{MSISDN}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily:'Montserrat-medium', color:'#002C11', fontSize:18}}>+Ksh. {TransAmount}</Text>
                    <Text style={{alignSelf:"flex-end", fontFamily:'Montserrat-regular', color:'gray', fontSize:15}}>{TransTime}</Text>
                </View>

            </SwipeItem>
        </SwipeProvider>
    </View>
  )
};

//#5AB500

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
        backgroundColor:'#fff',
    }
});
