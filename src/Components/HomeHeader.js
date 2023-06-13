import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import { Icon,withBadge } from "react-native-elements";
import { colors,parameters } from "../global/styles";

export default function HomeHeader({navigation}){
    const BadgeIcon = withBadge(0)(Icon);
    return  (
        <View style={styles.header} >
            <View style={{alignItems:'center', justifyContent:'center',marginLeft:15}} >
              <Icon
                type="material-community"
                name="menu"
                color={colors.cardbackground}
                size={32}
                onPress={()=>{
                    navigation.toggleDrawer()
                }}
              />
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}} >
                <Text style={styles.headerText}>Food Delivery App</Text>
            </View>
            <View style={{alignItems:'center', justifyContent:'center',marginRight:15}} >
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={35}
                    color={colors.cardbackground}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
       backgroundColor:colors.buttons,
       height:parameters.headerhieght,
       justifyContent:'space-between',
    },
    headerText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
    },
})