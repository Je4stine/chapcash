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
import Wallet from '../Screens/Wallet/Wallet';
import Users from '../Screens/Users/Users';


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
              left: 25,
              right: 25,
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
            tabBarActiveTintColor:"#136207",
            tabBarInactiveTintColor:'#90EE90',
            title:'Home',
            tabBarIcon: ({ color, size, backgroundColor }) => (
              <Octicons name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen name="Wallet" component={Wallet} 
          options = {{
            tabBarActiveTintColor:"#136207",
            tabBarInactiveTintColor:'#90EE90',
            title:'Wallet',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-wallet-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen name="Users" component={Users} 
          options = {{
            tabBarActiveTintColor:"#136207",
            tabBarInactiveTintColor:'#90EE90',
            tabBarLabel:'Users',
            title:'',
            tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };



  function MainStack(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={BottomTabs} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


export default MainStack;

