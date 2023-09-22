import { View, Text, StyleSheet, FlatList, RefreshControl, ToastAndroid, ActivityIndicator } from 'react-native';
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import Message from './Message';
import { useNavigation } from '@react-navigation/native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import ShiView from '../../../Components/ShiView';
import { MaterialIcons } from '@expo/vector-icons';

const Pending = () => {
  const [pendingMsg, setPendingMsg] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [ apploading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
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

  const memoizedData = useMemo(() => pendingMsg, [pendingMsg]);
  

  const groupMessagesByDate = (messages) => {
    const groupedMessages = [];
    let currentDate = null;

    messages.forEach((message) => {
      const messageDate = new Date(message.TransTime).toDateString();

      if (messageDate !== currentDate) {
        currentDate = messageDate;
        groupedMessages.push({ type: 'date', date: currentDate });
      }

      groupedMessages.push({ type: 'message', message });
    });

    return groupedMessages;
  };



  useEffect(() => {
    if (!isSearching) {
      getUserSms();
      
      const interval = setInterval(() => {
        getUserSms();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isSearching]);


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    ToastAndroid.show('Please wait...', ToastAndroid.SHORT);
    getUserSms();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const ItemView = ({ item }) => {
    if (item.type === 'date') {
      return (
        <View >
          <Text>{item.date}</Text>
        </View>
      );
    }

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

  useEffect(() => {
    if (memoizedData == ''){
      setIsLoading(true)
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 10 seconds

    return () => clearTimeout(timer);
  }, []);


  return (
    <View style={styles.container}>
       <View style={{  paddingVertical:10, flexDirection:'row', alignItems:'center',}}><Text style={styles.text1}>Today</Text><View><MaterialIcons name="keyboard-arrow-down" size={24} color="gray"/></View></View>
      {apploading ? (
        <View >
         <View style={{ marginTop:20,}}><ActivityIndicator size='large'/></View>
        </View>
      ) :memoizedData.length > 0 ? (
        <View style={{ flex:1}}>
        <DraggableFlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          data={memoizedData}
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
         ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>No data available</Text>
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
    color: '#5AB500',
    fontFamily: 'Montserrat-bold',
    fontSize: 18,

  },
});
