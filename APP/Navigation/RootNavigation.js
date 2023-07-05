import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Home from '../Screens/Home/Home';
import Wallet from '../Screens/Messages/Wallet';
import Users from '../Screens/Users/Users';
import Confirm from '../Screens/Home/Confirmation/Confirm';
import Confirmed from '../Screens/Home/Confirmation/Confirmed';
import OnBoarding1 from '../Screens/Onboarding/OnBoarding1';
import OnBoarding2 from '../Screens/Onboarding/OnBoarding2';
import OnBoarding3 from '../Screens/Onboarding/OnBoarding3';

import useGetOnboardingStatus from '../Utils/Onboard';
import OnBoarding4 from '../Screens/Onboarding/OnBoarding4';
import SignUp1 from '../Screens/SignUp/SignUp1';
import SignUp2 from '../Screens/SignUp/SignUp2';
import SignUp3 from '../Screens/SignUp/SignUp3';
import Profile from '../Screens/SignUp/Profile';
import PayBill from '../Screens/SignUp/PayBill';
import OTP from '../Screens/SignUp/OTP';
import UserSignUp from '../Screens/SignUp/SignUp1.1';
import UserProfile from '../Screens/SignUp/SignUp2.1';
import UserPayBill from '../Screens/SignUp/SignUp3.1';
import SignIn from '../Screens/SignIn/SignIn';
import Account from '../Screens/Account/Account';
import Settings from '../Screens/Account/Settings';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect} from 'react';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
            tabBarStyle: {
              display: 'flex',
              position: 'absolute',
              bottom: 5,
              left: 80,
              right: 80,
              elevation: 5,
              backgroundColor: '#fff',
              borderRadius: 30,
              height: 60,
            },
          tabBarShowLabel: true,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} 
          options = {{
            tabBarActiveTintColor:"#01722E",
            tabBarInactiveTintColor:'#5AB500',
            title:'Home',
            tabBarIcon: ({ color, size, backgroundColor }) => (
              <Octicons name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen name="Wallet" component={Wallet} 
          options = {{
            tabBarActiveTintColor:"#01722E",
            tabBarInactiveTintColor:'#5AB500',
            title:'Messages',
            tabBarIcon: ({ color, size }) => (
              <Feather name="bell" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen name="Users" component={Account} 
          options = {{
            tabBarActiveTintColor:"#01722E",
            tabBarInactiveTintColor:'#5AB500',
            tabBarLabel:'Settings',
            title:'',
            tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };



  function MainStack(){
    // const { isFirstLaunch, isLoading: onboardingIsLoading } = useGetOnboardingStatus();
    const [showOnboarding, setShowOnboarding] = useState(false);

    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('onboardingCompleted');
        if (value === null) {
          setShowOnboarding(true);
        }
        console.log(value)
        return value !== null; // Returns true if onboarding is completed, false otherwise
      } catch (error) {
        console.log('Error retrieving onboarding status:', error);
        console.log(showOnboarding)
        return false;
      }
    };

    useEffect(()=>{
      checkOnboardingStatus()
    },[]);


    // useEffect(() => {
    //   checkOnboardingStatus().then((onboardingCompleted) => {
    //     setShowOnboarding(!onboardingCompleted);
    //   });
    // }, []);

    if (showOnboarding) {
      return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding1" component={OnBoarding1} options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }} />
          <Stack.Screen name="Onboarding2" component={OnBoarding2} options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }} />
          <Stack.Screen name="Onboarding3" component={OnBoarding3} options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }} />
          <Stack.Screen name="Onboarding4" component={OnBoarding4} options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }} />
          <Stack.Screen name='SignUp1' component={SignUp1} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp2' component={SignUp2} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp3' component={SignUp3} options={{headerShown:false}}/>
          <Stack.Screen name='Profile1' component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name='Paybill' component={PayBill} options={{headerShown:false}}/>
          <Stack.Screen name='User1' component={UserSignUp} options={{headerShown:false}}/>
          <Stack.Screen name='User2' component={UserProfile} options={{headerShown:false}}/>
          <Stack.Screen name='User3' component={UserPayBill} options={{headerShown:false}}/>
          <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
          <Stack.Screen name='OTP' component={OTP} options={{headerShown:false}}/>
          <Stack.Screen name='Main' component={BottomTabs} options={{headerShown:false}}/>
          <Stack.Screen name='Confirm' component={Confirm} options={{headerShown:false}}/>
          <Stack.Screen name='Confirmed' component={Confirmed} options={{headerShown:false}}/>
          <Stack.Screen name='Account' component={Account} options={{headerShown:false}}/>
          <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
      );
    }
  
   

    return(
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Onboarding1' component={OnBoarding1} options={{headerShown:false,animationTypeForReplace:'push', animation:'slide_from_right'}} />
          <Stack.Screen name='Onboarding2' component={OnBoarding2} options={{headerShown:false ,animationTypeForReplace:'push', animation:'slide_from_right'}}/>
          <Stack.Screen name='Onboarding3' component={OnBoarding3} options={{headerShown:false,animationTypeForReplace:'push', animation:'slide_from_right'}}/>
          <Stack.Screen name='Onboarding4' component={OnBoarding4} options={{headerShown:false, animationTypeForReplace:'push', animation:'slide_from_right'}}/> */}
          <Stack.Screen name='SignUp1' component={SignUp1} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp2' component={SignUp2} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp3' component={SignUp3} options={{headerShown:false}}/>
          <Stack.Screen name='Profile1' component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name='Paybill' component={PayBill} options={{headerShown:false}}/>
          <Stack.Screen name='User1' component={UserSignUp} options={{headerShown:false}}/>
          <Stack.Screen name='User2' component={UserProfile} options={{headerShown:false}}/>
          <Stack.Screen name='User3' component={UserPayBill} options={{headerShown:false}}/>
          <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
          <Stack.Screen name='OTP' component={OTP} options={{headerShown:false}}/>
          <Stack.Screen name='Main' component={BottomTabs} options={{headerShown:false}}/>
          <Stack.Screen name='Confirm' component={Confirm} options={{headerShown:false}}/>
          <Stack.Screen name='Confirmed' component={Confirmed} options={{headerShown:false}}/>
          <Stack.Screen name='Account' component={Account} options={{headerShown:false}}/>
          <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


export default MainStack;

