import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Animated, Alert, Image } from 'react-native';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from './HomeHeader';
import Stats from './Stats';
import Pending from './Pending/Pending';
import Complete from './Complete/Complete';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { AppContext } from '../../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import SearchResult from './SearchResult';
import { useNavigation } from '@react-navigation/native';
import Latest from './Latest';



const Home = () => {
  const [index, setIndex]=useState(1);
  const [ visible, setVisible] = useState(false);
  const { user} = useContext(AppContext);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [role, setRole] = useState('admin')
  const Categories = ["Date", "Users"]
  const [allData, setAllData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const navigation = useNavigation()
  const itemRef = useRef(null);


  const toggleBottomNavigationView =()=>{
    setSheetVisible(!sheetVisible)
  }

  const handleToggle =(index)=>{
    setIndex(index)
  };

  const toggleSearch =()=>{
    setVisible(!visible)
    setSearchResult([])
  };

  const handleClickOutside =()=>{
    setVisible(false)
  };

  const opacityValue = useRef(new Animated.Value(1)).current;
  const translateXValue = useRef(new Animated.Value(0)).current;

  // Animation function
  const animateView = () => {
    Animated.parallel([
      Animated.timing(opacityValue, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(translateXValue, {
        toValue: index === 1 ? 0 : 1,
        useNativeDriver: true,
      }),
    ]).start();
  };


  const getData = async()=>{
    try{
      const username = await AsyncStorage.getItem('username');
      const userImage = await AsyncStorage.getItem('image');
      console.log(userImage)

    }catch(error){
      console.log(error)
    }
  }


  useEffect(() => {
    animateView();
    getData();
    console.log(user)
  }, []);


  //Get all data from server once then save to Context 
  const getAll =async()=>{
    try {
      await fetch ('https://www.chapcash.mopawa.co.ke/api/allMessages',{
        headers :{
          'Cache-Control':'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires':'0',
          'Content-Type': 'application/json'
        }
      })
          .then((response)=>response.json())
          .then((response)=>{
            setAllData(response)

                                
          });

    }catch(error){
      Alert.alert(error)
    }
  };

  useEffect(()=>{
      getAll()
    },[isSearching]);


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the appropriate data source based on the active tab
      let newData;
      setIsSearching(true);
        newData = allData.filter(function (item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.TransAmount 
            ? item.TransAmount.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setSearchResult(newData);
      // setSearch(text);
    }
  };

  const handleTouch = (item) => {
    if(Msgstatus){
      navigation.navigate('Confirm',{ FirstName:item.FirstName, Amount:item.TransAmount, MSISDN:item.MSISDN, ID: item.TransID, msgId:item.id});
      itemRef.current.close();
    }else{
      navigation.navigate('Confirmed',{ FirstName:item.FirstName, Amount:item.TransAmount, MSISDN:item.MSISDN, ID: item.TransID, msgId:item.id});
      itemRef.current.close();
    }

  };


  const ItemView = ({ item }) => {
    if (item.type === 'date') {
      return (
        <View >
          <Text>{item.date}</Text>
        </View>
      );
    }

    return (
      <SearchResult
        TransTime={item.TransTime}
        TransAmount={item.TransAmount}
        MSISDN={item.MSISDN}
        FirstName={item.FirstName}
        Msgstatus={item.Msgstatus}
        key={item.id}
        itemRef={itemRef}
        handleTouch={()=>handleTouch(item)}
      />
    );
  };






  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff', position:'relative'}}>
    
      {
        visible ?(
          <View>
            <TextInput
              placeholder="Search..."
              onChangeText={(text) => searchFilterFunction(text)}
              onBlur={()=>{
                setVisible(false)
              }}
              style={{ padding:10, borderWidth:0.5, borderRadius:20, width:'90%', alignSelf:'center', marginTop:20, marginBottom:20, backgroundColor:'#efefef'}}
            />
            <TouchableOpacity onPress={toggleSearch} style={{ position:'absolute', top:'35%', right:'8%'}}>
              <AntDesign name="closecircle" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ):(<HomeHeader onPress={toggleSearch} name={user.name} URL={user.url} handleShare={toggleBottomNavigationView}/>)
      }
      
      <View style={{ width:'95%', alignSelf:'center', backgroundColor:'#f4f4f4', padding:15, borderRadius:10, marginBottom:'3%'}}>
        {
          user.role === 'admin'?<Stats/>:<Latest/>
        }
    
          <Animated.View style={{ width:'90%', height:50, marginBottom:20,backgroundColor:'#D3D3D3', borderRadius:30, justifyContent:'center', alignItems:'center', flexDirection:'row', alignSelf:'center'}}>
            <TouchableOpacity onPress={()=>handleToggle(1)} style={[index===1?styles.active:styles.inactive]}><Text style={[index===1?styles.activeText:styles.inactiveText]}>Pending</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleToggle(2)} style={[index===2?styles.active:styles.inactive]} ><Text style={[index===2?styles.activeText:styles.inactiveText]}>Confirmed</Text></TouchableOpacity>
          </Animated.View>
     
          
            <SelectDropdown
                buttonStyle={{ backgroundColor:'#fff', width:'35%', height:45, alignSelf:'center',borderWidth:1, borderRadius:30, borderColor:'#5AB500', paddingHorizontal:10, position: 'absolute', bottom:'-10%'}}
                defaultButtonText='Date'
                buttonTextStyle={{ color:"#5AB500", fontFamily:'Montserrat-regular', fontSize:14}}
                renderDropdownIcon={isOpened => {
                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#5AB500'} size={14} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={{ marginRight:10}}
                rowStyle={{ backgroundColor:'#fff'}}
                rowTextStyle={{ color:"#5AB500", fontFamily:'Montserrat-regular', fontSize:14}}
                data={Categories}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />
              {/* <View style={{position: 'absolute', right:'38%', top:'24%'}}><MaterialIcons name="keyboard-arrow-down" size={24} color="#5AB500" /></View> */}
    
        
      </View>
     
    
      { index===1?<Pending/>:null
      }
      {
         index===2?<Complete/>:null
      }

     {visible? (
        <View style={{ position: 'absolute', top: 120, bottom: 0, left: 0, right: 0,backgroundColor:'#fff', paddingHorizontal:20}}>
            <View style={{ flex:1}}>
              {
                searchResult.length == 0? 
                <View style={{ alignSelf:'center',}}>
                  {/* <Image source={require('../../Assets/Images/Group 2125.png')} style={{ height:100, width:100}}/> */}
                  <Text>Not Found</Text>
                </View>
                :
                
                <DraggableFlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                data={searchResult}
                activationDistance={20}
                renderItem={ItemView}
              />
              }

             
            </View>
        </View>
      ):<View/>}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    active: {
      backgroundColor:'#5AB500',
      justifyContent:'center',
      alignItems:'center',
      height:50,
      width:'50%',
      borderRadius:30
    },
    inactive:{
      justifyContent:'center',
      alignItems:'center',
      height:50,
      width:'50%',
      borderRadius:30
    },
    activeText:{
      color:'#fff',
      fontFamily:'Montserrat-bold',
      fontSize:23
    },
    inactiveText:{
      color:'#5AB500',
      fontFamily:'Montserrat-bold',
      fontSize:23
    }
})