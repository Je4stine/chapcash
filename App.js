import { StatusBar } from 'expo-status-bar';
import React,{ useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './APP/Navigation/RootNavigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {AppProvider} from './APP/Context/AppContext';
import './ignorewarnings';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Hank': require('./APP/Assets/Fonts/HankRnd-Regular.ttf'),
    'Hank_bold': require('./APP/Assets/Fonts/HankRnd-Bold.ttf'),
    'Hank_black': require('./APP/Assets/Fonts/HankRnd-Black.ttf'),
    'Novera-bold': require('./APP/Assets/Fonts/Fontspring-DEMO-novera-classicbold.otf'),
    'Novera-black': require('./APP/Assets/Fonts/Fontspring-DEMO-novera-classicblack.otf'),
    'Novera': require('./APP/Assets/Fonts/Fontspring-DEMO-novera-classicregular.otf'),
    'Montserrat-regular': require('./APP/Assets/Fonts/Montserrat-Regular.ttf'),
    'Montserrat-bold': require('./APP/Assets/Fonts/Montserrat-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };



  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <AppProvider>
        <MainStack/>
        <StatusBar translucent={true} backgroundColor='#fff' style='dark-content'/>
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
});
