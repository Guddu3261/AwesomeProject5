import React from 'react';
import { createStackNavigator, TransitionPreset } from '@react-navigation/stack';
import SigninWelcomeScreen from '../screen/authScreens/SigninWelcomeScreen';
import SignScreen from '../screen/authScreens/signScreen';
import HomeScreen from '../screen/HomeScree';
import RootClientTab from './ClientTab';
import RestaurantMapScreen from '../screen/ReastaurantMapScreen';
// import DrawerNavigartor from './DrawerNavigator';
import DrawerNavigartor from "./DrawerNavigator";
import SignUpScreen from '../screen/authScreens/SignUpScreen';


const AuthStack = createStackNavigator();

export default function AuthNavigators () {
    return (
        <AuthStack.Navigator>
             <AuthStack.Screen
                name="SignInWelcomeScreen"
                component={SigninWelcomeScreen}
                options={{
                    headerShown:false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
             />
             <AuthStack.Screen
                name="signScreen"
                component={SignScreen}
                options={{
                    headerShown:false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
             />
             <AuthStack.Screen
                name="signUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown:false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
             />
              <AuthStack.Screen
                // name="HomeScreen"
                // name='RootClientTabs'
                // component={HomeScreen}
                //  component={RootClientTab}
                name='drawerNavigator'
                component={DrawerNavigartor}
                options={{
                    headerShown:false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
             />
              <AuthStack.Screen
                name='restaurantmapScreen'
                 component={RestaurantMapScreen}
                options={{
                    headerShown:false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
             />
        </AuthStack.Navigator>
    )
}