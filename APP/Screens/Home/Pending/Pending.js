import { View, Text, StyleSheet, FlatList, RefreshControl, ToastAndroid } from 'react-native';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import Message from './Message';
import { useNavigation } from '@react-navigation/native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

const Pending = () => {
  const [pendingMsg, setPendingMsg] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  const itemRef = useRef(null);
  const navigation = useNavigation();

  const handleTouch = (item) => {
    navigation.navigate('Confirm',{ FirstName:item.FirstName, Amount:item.TransAmount, MSISDN:item.MSISDN, ID: item.TransID, msgId:item.id});
    itemRef.current.close();
  };

  const getUserSms = async () => {
    await fetch('https://www.chapcash.mopawa.co.ke/api/pending', {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const rev = [...response].reverse();
        setPendingMsg(rev);
      });
  };

  useEffect(() => {
    getUserSms();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    ToastAndroid.show('Please wait...', ToastAndroid.SHORT);
    getUserSms();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const ItemView = ({ item }) => {
    return (
      <Message
        TransTime={item.TransTime}
        TransAmount={item.TransAmount}
        MSISDN={item.MSISDN}
        FirstName={item.FirstName}
        key={item.id}
        itemRef={itemRef}
        handleTouch={()=>handleTouch(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Today</Text>
      {pendingMsg == '' ? (
        <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: '50%' }}>
          <Text>No data yet</Text>
        </View>
      ) : (
        <View style={{ flex:1}}>
        <DraggableFlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          data={pendingMsg}
          activationDistance={20}
          renderItem={ItemView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
        </View>
      )}
    </View>
  );
};

export default Pending;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:10,
    marginTop:10,
    backgroundColor:'#fff',
    flex:1
  },
  text1: {
    color: '#002C11',
    fontFamily: 'Montserrat-bold',
    fontSize: 18,
    marginTop: 20,
  },
});
