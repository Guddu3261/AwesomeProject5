import React from  'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/Components/Header';
import { colors } from './src/global/styles';
import SignScreen from './src/screen/authScreens/signScreen';
import SigninWelcomeScreen from './src/screen/authScreens/SigninWelcomeScreen';
import RootNavigators from './src/navigation/RootNavigators';
import OtpScreen from './src/screen/OtpScreen';
import messaging from '@react-native-firebase/messaging';
export default function App(){


React.useEffect(()=>{
 checkToken();
},[])

const checkToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
     console.log(fcmToken,"firebase_token");
  } 
 }
 
  return (
    <View style={styles.container} >

    <StatusBar
      barStyle='light-content'
      backgroundColor = {colors.statusbar}
    />
        {/* <SignScreen/> */}
        {/* <SigninWelcomeScreen/> */}
        <RootNavigators/>
        {/* <OtpScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})