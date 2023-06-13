import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTab from './ClientTab';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import BusinessConsoleScreen from '../screen/BusinessConsoleScreen';
import DrawerContent from '../Components/DrawerContent';
// import { colors } from '../global/styles';

const Drawer= createDrawerNavigator();
export default function DrawerNavigartors(){
    return(
        <Drawer.Navigator
         drawerContent={props=><DrawerContent {...props} />}
        >
         <Drawer.Screen
            name='RootClientTabs'
            component={RootClientTab}
            options={{
                headerShown:false,
                title:'client',
                drawerIcon:({focussed,size})=>(
                   <Icon
                    type='material-community'
                    name='home'
                    color={focussed ? '#7cc' : colors.grey2 }
                    size={size}
                   />
                )
            }}
         />
          <Drawer.Screen
            name='businessConsole'
            component={BusinessConsoleScreen}
            options={{
                headerShown:false,
                title:'Business console',
                drawerIcon:({focussed,size})=>(
                   <Icon
                    type='material'
                    name='business'
                    color={focussed ? '#7cc' : colors.grey2 }
                    size={size}
                   />
                )
            }}
         />
        </Drawer.Navigator>
    )
}