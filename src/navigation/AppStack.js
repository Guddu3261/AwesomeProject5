import React from 'react';
import { createStackNavigator, TransitionPreset } from '@react-navigation/stack';
import RestaurantMapScreen from '../screen/ReastaurantMapScreen';
import DrawerNavigartor from "./DrawerNavigator";



const App = createStackNavigator();

export default function AppStack () {
    return (
        <App.Navigator>
              <App.Screen
                // name="HomeScreen"
                // name='RootClientTabs'
                // component={HomeScreen}
                //  component={RootClientTab}
                name='App'
                component={DrawerNavigartor}
                options={{
                    headerShown:false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
             />
              <App.Screen
                name='restaurantmapScreen'
                 component={RestaurantMapScreen}
                options={{
                    headerShown:false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
             />
        </App.Navigator>
    )
}