import { StatusBar } from 'expo-status-bar';
import React,{ useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './APP/Navigation/RootNavigation';
import Confirm from './APP/Screens/Home/Confirmation/Confirm';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Hank': require('./APP/Assets/Fonts/HankRnd-Regular.ttf'),
    'Hank_bold': require('./APP/Assets/Fonts/HankRnd-Bold.ttf'),
    'Hank_black': require('./APP/Assets/Fonts/HankRnd-Black.ttf'),
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
      <MainStack/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
});
