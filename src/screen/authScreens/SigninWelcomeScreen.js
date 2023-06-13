import { View, Text,StyleSheet,Image } from 'react-native'
import React,{useState,useRef} from 'react';
import {colors,parameters} from "../../global/styles";
import { Icon,Button,SocialIcon} from 'react-native-elements';
import Header from '../../Components/Header';
import { title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

export default function SigninWelcomeScreen({navigation} ){
    return (
        <View style={{flex:1}} >
            <View style={{flex:3,justifyContent:'flex-start', alignItems:'center',paddingTop:20}}>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}} >DISCOVER RESTAURENT</Text>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}} >In Your Area</Text>
            </View>
             <View style={{flex:4, justifyContent:"center"}} >
                <Swiper autoplay={true} horizontal={true} showsButtons={true} >
                    <View  style={styles.slide1} >
                       <Image
                        source={require("../../../images/pexels-ash-376464.jpg")}
                        style={{width:'100%', height:'100%'}}
                       />
                    </View>
                    <View  style={styles.slide2} >
                       <Image
                        source={require("../../../images/pexels-ben-kidoum-1124729.jpg")}
                        style={{width:'100%', height:'100%'}}
                       />
                    </View>
                    <View  style={styles.slide3} >
                       <Image
                        source={require("../../../images/pexels-jenna-hamra-978267.jpg")}
                        style={{width:'100%', height:'100%'}}
                       />
                    </View>
                </Swiper>
             </View>
             <View style={{flex:4, justifyContent:'flex-end', marginBottom:20}}>
             <View style={{marginHorizontal:20,marginVertical:20}} >
                     <Button
                        title = 'SIGN IN'
                        titleStyle={parameters.buttonTitle}
                        buttonStyle={parameters.styledButton}
                        onPress={()=>navigation.navigate("signScreen")}
                    />
                </View>
                <View style={{ marginHorizontal:20, marginTop:30}} >
                          <Button
                            title="Create an account"
                            buttonStyle={styles.createButton}
                            titleStyle={styles.createButtonTitle}
                            onPress={()=>{
                                navigation.navigate('signUpScreen')
                            }}
                          />
                       </View>
             </View>
        </View>
    );
}

const styles=StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6Eb',
    },
    slide2:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#97CAE5',
    },
    slide3:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#92BBD9',
    },
    createButton:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        borderWidth:1,
        height:50,
        paddingHorizontal:20,
        borderColor:colors.buttons,
    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3,
    },
})