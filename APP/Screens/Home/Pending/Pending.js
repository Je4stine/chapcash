import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import React,{ useState, useCallback, useEffect} from 'react';
import Message from './Message';
import Test from './Test';

const Pending = () => {
  const [ pendingMsg, SetPendingMsg]= useState([]);
  const [abbr, setAbbr]= useState('');
  const [refreshing, setRefreshing]=useState(false);
  

  
const getUserSms = async ()=>{
  await fetch ('https://www.chapcash.mopawa.co.ke/api/pending',{
    headers :{
      'Cache-Control':'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires':'0',
      'Content-Type': 'application/json'
    }
  })
      .then((response)=>response.json())
      .then((response)=>{
        const rev = [...response].reverse()
        SetPendingMsg(rev)
                
      });
};

useEffect(()=>{
  getUserSms()
},[]);

const onRefresh = useCallback(() => {
  setRefreshing(true);
  ToastAndroid.show('Please wait...', ToastAndroid.SHORT);
  getUserSms()
  // fetchData()
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);

const ItemView =  ({ item }) => {
  return (
    <Message TransTime={item.TransTime} TransAmount={item.TransAmount} MSISDN={item.MSISDN} FirstName={item.FirstName} key={item.id} />
  );
};


  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Today</Text>
      {
         pendingMsg == "" ?<View style={{ justifyContent:'center', alignSelf:'center', marginTop:'50%'}}><Text>No data yet</Text></View>:
         <FlatList
         showsVerticalScrollIndicator={false}
         keyExtractor={(item, index) => item.id}
         data={pendingMsg}
         renderItem={ItemView}
         refreshControl={
           <RefreshControl
             //refresh control used for the Pull to Refresh
             refreshing={refreshing}
             onRefresh={onRefresh}
           />}
           />
      }
     
    </View>
  )
};

export default Pending;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop:10,
      
        
    },
    text1:{
        color:'#002C11',
        fontFamily:'Montserrat-bold',
        fontSize:18,
        marginTop:20
    }
})