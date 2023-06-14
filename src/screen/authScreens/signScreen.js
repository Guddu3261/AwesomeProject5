import { View, Text,StyleSheet,TextInput, Alert } from 'react-native'
import React,{useState,useRef, useEffect, useContext} from 'react';
import {colors,parameters} from "../../global/styles";
import { Icon,Button,SocialIcon} from 'react-native-elements';
import Header from '../../Components/Header';
import { title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../../contexts/AuthContext';
export default function SignScreen({navigation,props}){
    const {dispatchSignedIn} = useContext(SignInContext)
    const [passwordFieldFocus,setPasswordFieldFocus]=useState(false);
    const textinput1=useRef(1);
    const textinput2=useRef(2);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setInterval(() => {
          setVisible(!visible);
        }, 2000);
      }, []);

      async function sigin(data){
        try{
        const {password,email} = data
        const user = await auth().signInWithEmailAndPassword(email,password)
        if(user){
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
        }
    }
        catch(error){
            Alert.alert(
                error.name,
                error.message
            )
        }
    }
    

  
    return (
        <View>
           <Header title="My Account" type="arrow-left" navigation={navigation} />
           <View>
            <Text style={title} >Sign In</Text>
           </View>
           <View style={{alignItems:'center', marginTop:10}} >
            <Text style={styles.text1} >Please enter the email and password</Text>
            <Text style={styles.text1} >Registered with your Account</Text>
           </View>
            
             <Formik
                 initialValues = {{email:'',password:''}}
                 onSubmit={(values)=>{
                    sigin(values)
                    // console.log(values)
                 }}
              >
             {
                ({handleChange,handleBlur,values,handleSubmit})=>(
                    <View>
                    <View style={{marginTop:20}} >
                <View>
                    <TextInput
                       style={styles.TextInput1}
                       placeholder='Email'
                       ref={textinput1}
                       onChangeText={handleChange('email')}
                       onBlur={handleBlur('email')}
                       value={values.email}
                    />
                </View>

                <View style={styles.TextInput2} >
                <Animatable.View animation={passwordFieldFocus ? '' : 'fadeInLeft'} duration={400} >
                    <Icon
                        name="lock"
                        iconStyle={{color:colors.grey3}}
                        type="material"
                    />
                </Animatable.View>
                      <TextInput
                          placeholder='Password'
                          style={{width:'80%'}}
                          ref={textinput2}
                          onFocus={()=>{setPasswordFieldFocus(false)}}
                          onBlur={()=>{setPasswordFieldFocus(true)}}
                          onChangeText={handleChange('password')}
                          value={values.password}
                       />
                <Animatable.View  animation={passwordFieldFocus ? '' : 'fadeInLeft'} duration={400}  >
                      <Icon
                         name="visibility-off"
                         iconStyle={{color:colors.grey3}}
                         type="material"
                         style={{marginRight:10}}
                      />
                </Animatable.View>
                </View>
             </View>
                 <View style={{marginHorizontal:20,marginVertical:20}} >
                     <Button
                        title = 'SIGN IN'
                        titleStyle={parameters.buttonTitle}
                        buttonStyle={parameters.styledButton}
                        onPress={handleSubmit}
                        // onPress={()=>{
                        //     // navigation.navigate("drawerNavigator")
                        //     props.handleSubmit()
                        // }}
                    />
                </View>
                    </View>
                )
             }
             </Formik>
             
               <View style={{alignItems:'center', marginTop:10}} >
                  <Text style={{...styles.text1, textDecorationLine:'underline'}} >Forgot Password?</Text>
               </View>
                    <View style={{alignItems:'center', marginTop:10, marginBottom:10}} >
                         <Text style={{fontSize:20, fontWeight:'bold'}} >OR</Text>
                     </View>
                     <View style={{marginHorizontal:10, marginTop:10}} >
                        <SocialIcon
                            title="Sign in with facebook"
                            button
                            type="facebook"
                            style={styles.socialbutton}
                            onPress={()=>{}}
                        />
                     </View>
                     <View style={{marginHorizontal:10, marginTop:10}} >
                        <SocialIcon
                            title="Sign in with Google"
                            button
                            type="google"
                            style={styles.socialbutton}
                            onPress={()=>{}}
                        />
                     </View>
                      <View style={{ marginTop:25, marginLeft:20}} >
                          <Text style={{...styles.text1}} >New User Sign in?</Text>
                       </View>
                       <View style={{alignItems:'flex-end', marginHorizontal:20}} >
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
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text1:{
       color:colors.gray3,
       fontSize:16,
    },
    TextInput1:{
        borderWidth:1,
        borderColor:'#86939e',
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15,
    },
    TextInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:'#86939e',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center',
        paddingLeft:15,
    },
    socialbutton:{
       borderRadius:12,
    },
    createButton:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        borderColor:'#ff8c52',
        height:40,
        paddingHorizontal:20
    },
    createButtonTitle:{
        color:'#ff8c52',
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3,
    },
    lottie: {
        width: 100,
        height: 100,
      },
})