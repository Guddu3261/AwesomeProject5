import React,{useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../screen/SearchScreen';
import SearchResultScreen from '../screen/SearchResultScreen';
import ReastaurantHomeScreen from '../screen/ReastaurantHomeScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
import MenuProductScreen from '../screen/MenuProductScreen';

const ClientStack = ({navigation,route}) => {
    const ClientSearch= createStackNavigator();

    useLayoutEffect(()=>{
       const routeName=getFocusedRouteNameFromRoute(route)
       if(routeName === 'RestaurantHomeScreen'  || 'MenuProcuctScreen' ){
        navigation.setOptions({tabBarVisible:false})
       }else{
        navigation.setOptions({tabBarVisible:true})
       }
    },[navigation,route])
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name='searchScreen'
                component={SearchScreen}
                options={
                    ()=>({
                       headerShown:false
                    })
                }
            />
              <ClientSearch.Screen
                name='SearchResultScreen'
                component={SearchResultScreen}
                options={
                    ()=>({
                       headerShown:false
                    })
                }
            />
            <ClientSearch.Screen
                name='ReastaurantHomeScreen'
                component={ReastaurantHomeScreen}
                options={
                    ()=>({
                       headerShown:false
                    })
                }
            />
            <ClientSearch.Screen
                name='MenuProcuctScreen'
                component={MenuProductScreen}
                options={
                    ()=>({
                       headerShown:false
                    })
                }
            />
        </ClientSearch.Navigator>
    );
}

const styles = StyleSheet.create({

})

export default ClientStack;
