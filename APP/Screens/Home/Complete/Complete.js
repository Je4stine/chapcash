import { View, Text, StyleSheet, FlatList, RefreshControl, ToastAndroid, ActivityIndicator } from 'react-native';
import React,{useState, useEffect, useCallback, useRef} from 'react';
import Message from './Message';
import { useNavigation } from '@react-navigation/native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import ShiView from '../../../Components/ShiView';



const Complete = () => {
const [ completeMsg, SetCompleteMsg]= useState([]);
const [refreshing, setRefreshing]=useState(false);
const [ isSearching, setSeaching]= useState(false);
const [ apploading, setIsLoading] = useState(false);

const itemRef = useRef(null);
const navigation = useNavigation();

const handleTouch = (item) => {
  navigation.navigate('Confirmed',{ FirstName:item.FirstName, Amount:item.TransAmount, MSISDN:item.MSISDN, ID: item.TransID});
  itemRef.current.close();
};
  
const getUserSms = async ()=>{
  await fetch ('https://www.chapcash.mopawa.co.ke/api/complete',{
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
        SetCompleteMsg(rev)
                
      });
};



useEffect(() => {
  if (!isSearching) {
    getUserSms();
    
    const interval = setInterval(() => {
      getUserSms();
    }, 10000);
    return () => clearInterval(interval);
  }
}, [isSearching]);


useEffect(() => {
  if (completeMsg == ''){
    setIsLoading(true)
  }

  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return () => clearTimeout(timer);
}, []);





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
    <Message TransTime={item.TransTime} TransAmount={item.TransAmount} MSISDN={item.MSISDN} FirstName={item.FirstName} key={item.id} handleTouch={()=>handleTouch(item)} itemRef={itemRef}/>
  );
};


  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Today</Text>
      {
        apploading ?
        (<View>
          <View style={{ marginTop:20,}}><ActivityIndicator size='large'/></View>
        </View>
        ) :completeMsg.length > 0 ? (
        <View style={{ flex:1 }}>
          <DraggableFlatList
                keyExtractor={(item) => item.id}
                data={completeMsg}
                renderItem={ItemView}
                activationDistance={20}
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    //refresh control used for the Pull to Refresh
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />}
                
              />
          </View>
          ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>No data available</Text>
            </View>)
      }
     
    </View>
  )
};

export default Complete;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop:10,
        backgroundColor:'#fff',
        flex:1
        
        
        
    },
    text1:{
        color:'#002C11',
        fontFamily:'Montserrat-bold',
        fontSize:18,
        marginTop:20
    },
    contentContainer:{
      flex:1
    }
})