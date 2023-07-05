import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Animated } from 'react-native';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from './HomeHeader';
import Stats from './Stats';
import Pending from './Pending/Pending';
import Complete from './Complete/Complete';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../Context/AppContext';

const Home = () => {
  const [index, setIndex]=useState(1);
  const [ visible, setVisible] = useState(false);
  const { user} = useContext(AppContext);

  const handleToggle =(index)=>{
    setIndex(index)
  };

  const toggleSearch =()=>{
    setVisible(!visible)
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


  useEffect(() => {
    animateView();
  }, []);



  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff', position:'relative'}}>
     <View onPress={handleClickOutside}>
      {
        visible ?(
          <View>
          <TextInput
            placeholder="Search..."
            onBlur={()=>{
              setVisible(false)
            }}
            style={{ padding:10, borderWidth:0.5, borderRadius:20, width:'90%', alignSelf:'center', marginTop:20, marginBottom:20, backgroundColor:'#efefef'}}
          />
          </View>
        ):(<HomeHeader onPress={toggleSearch} name={user.name}/>)
      }
      
      <View style={{ width:'95%', alignSelf:'center', backgroundColor:'#f4f4f4', padding:15, borderRadius:10}}>
          <Stats/>
          <Animated.View style={{ width:'90%', height:50, backgroundColor:'#D3D3D3', borderRadius:30, justifyContent:'center', alignItems:'center', flexDirection:'row', alignSelf:'center'}}>
            <TouchableOpacity onPress={()=>handleToggle(1)} style={[index===1?styles.active:styles.inactive]}><Text style={[index===1?styles.activeText:styles.inactiveText]}>Pending</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handleToggle(2)} style={[index===2?styles.active:styles.inactive]} ><Text style={[index===2?styles.activeText:styles.inactiveText]}>Confirmed</Text></TouchableOpacity>
          </Animated.View>
      </View>
     
      { index===1?<Pending/>:null
      }
      {
         index===2?<Complete/>:null
      }
         
     </View>
     {visible && (
        <TouchableOpacity
          style={{ position: 'absolute', top: 120, bottom: 0, left: 0, right: 0}}
          onPress={handleClickOutside}
        />
      )}
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
      fontSize:20
    },
    inactiveText:{
      color:'#5AB500',
      fontFamily:'Montserrat-bold',
      fontSize:20
    }
})