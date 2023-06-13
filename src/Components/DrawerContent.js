import React,{useState,useEffect,useContext} from 'react';
import {
    View,
    Text,
    Linking,
    Pressable,
    Alert,
    Switch,
    StyleSheet
} from 'react-native'

import {
    DrawerContentScreen,
    DrawerItemList,
    DrawerItem,
    DrawerContentScrollView

} from '@react-navigation/drawer'
import { Avatar, Icon } from 'react-native-elements';
import { colors } from '../global/styles';

export default function DrawerContent(props,navigation){
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={styles.container} >
        <DrawerContentScrollView {...props}>
        <View style={{backgroundColor:colors.buttons,}} >
          <View style={{flexDirection:'row', alignItems:'center',  paddingLeft:20, paddingVertical:10}} >
            <Avatar
                rounded
                avatarStyle={styles.avtar}
                source={{uri:'https://lh3.googleusercontent.com/a/AAcHTteUF8YO-w9bx8QGHLie6mDgIseWBMh-JCBzcRnG=s360-c-no' }}
                size={75}
            />
            <View style={{marginLeft:15}} >
                <Text style={{fontWeight:'bold', fontSize:18,color:colors.cardbackground }} >Guddu Kumar</Text>
                <Text style={{fontSize:14, color:colors.cardbackground}} >Guddukumar@gmail.com</Text>
            </View>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <View  style={{flexDirection:'row', marginTop:10,marginBottom:10}} >
                <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}} >
                     <Text style={{fontWeight:'bold',color:colors.cardbackground,fontSize:18}} >1</Text>
                     <Text style={{color:colors.cardbackground, fontSize:15}} >My Favorite</Text>
                </View>
            </View>

           
               <View  style={{flexDirection:'row', marginTop:10,marginBottom:10 }} >
                  <View style={{marginTop:10,alignItems:'center',justifyContent:'center' , paddingLeft:10}} >
                      <Text style={{fontWeight:'bold',color:colors.cardbackground,fontSize:18}} >1</Text>
                       <Text style={{color:colors.cardbackground, fontSize:15}} >My Cart</Text>
                  </View>
              </View>
          </View>
          
          </View>

        
          <DrawerItemList {...props} />

          <DrawerItem
              label='payment'
              icon={({color,size})=>(
                <Icon
                    type='material-community'
                    name='credit-card-outline'
                    color={color}
                    size={size}
                />
              )}
          />
          <DrawerItem
              label='promotions'
              icon={({color,size})=>(
                <Icon
                    type='material-community'
                    name='tag-heart'
                    color={color}
                    size={size}
                />
              )}
          />
          <DrawerItem
              label='setting'
              icon={({color,size})=>(
                <Icon
                    type='material-community'
                    name='cog-outline'
                    color={color}
                    size={size}
                />
              )}
          />
          <DrawerItem
              label='Help'
              icon={({color,size})=>(
                <Icon
                    type='material-community'
                    name='lifebuoy'
                    color={color}
                    size={size}
                />
              )}
          />


          <View style={{borderTopWidth:1,borderTopColor:colors.grey5}} >
              <Text style={styles.Preferences} >Preferences</Text>
              <View style={styles.switchbutton} >
                <Text style={styles.darkThemeText} >Dark Theme</Text>
                 <View style={{paddingRight:10}} >
                    <Switch
                         trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? colors.grey1 : '#f4f3f4'}
                         onValueChange={toggleSwitch}
                         value={isEnabled}
                    />
                 </View>
              </View>
          </View>

          </DrawerContentScrollView>
          <DrawerItem
              label='Sign Out'
            //   onPress={()=>navigation.navigation('signScreen')}
              icon={({color,size})=>(
                <Icon
                    type='material-community'
                    name='logout'
                    color={color}
                    size={size}
                />
              )}
          />
          
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        flex:1,
    },
     avtar:{
        borderWidth:1,
        // backgroundColor:colors.buttons,
        borderColor:colors.grey5,

     },
     Preferences:{
        fontSize:16,
        fontWeight:'500',
        paddingLeft:20,
        paddingTop:10,

     },
     switchbutton:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       paddingLeft:20,
       paddingVertical:5,
       paddingRight:10,
     },
     darkThemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:'bold',

     },
})