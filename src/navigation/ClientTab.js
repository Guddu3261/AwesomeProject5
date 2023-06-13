import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screen/HomeScree';
import { colors, parameters } from '../global/styles';
import SearchScreen from '../screen/SearchScreen';
import MyAccountScreen from '../screen/MyAccountScreen';
import MyOrderdersScreen from '../screen/MyOrdersScreen';
import ClientStack from './ClientStack';
const ClientTabs=createBottomTabNavigator();

export default function RootClientTab(){
    return(
        <ClientTabs.Navigator
           screenOptions = {{
            tabBarActiveTintColor:'#ff8c52',
           }}
           
        
         >
            <ClientTabs.Screen
                name='homescreen'
                component={HomeScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel:'Home',
                        tabBarIcon : ({color,size})=>(
                           <Icon
                             name='home'
                             type='material'
                             color={color}
                             size={size}
                           />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name='searchScreens'
                component={ClientStack}
                options={
                    {
                        headerShown: false,
                        tabBarLabel:'search',
                        tabBarIcon : ({color,size})=>(
                           <Icon
                             name='search'
                             type='material'
                             color={color}
                             size={size}
                           />
                        )
                    }
                }
            />
             <ClientTabs.Screen
                name='my orders'
                component={MyOrderdersScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel:'my order',
                        tabBarIcon : ({color,size})=>(
                           <Icon
                             name='view-list'
                             type='material'
                             color={color}
                             size={size}
                           />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name='myAccScreen'
                component={MyAccountScreen}
                options={   
                    {
                        headerShown: false,
                        tabBarLabel:'My account',
                        tabBarIcon : ({color,size})=>(
                           <Icon
                             name='person'
                             type='material'
                             color={color}
                             size={size}
                           />
                        )
                    }
                }
            />
        </ClientTabs.Navigator>
    )
}