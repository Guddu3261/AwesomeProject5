import React,{useState} from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';
import { colors, parameters } from '../global/styles';
// import styled from 'styled-components/native';
// import styled from "styled-components/native";
// export const HiddenTextInput= styled.TextInput`
//       border-color:${colors.buttons};
//       border-width:2px;
//       border-radius:5px;
//       padding:12px;
//       margin-top:15px;
//       width:'300px';

//     `;

//     export const otpInputSection=styled.View`
//       justify-content:'center';
//       align-items:'center';
//       margin-vertical:'30px';

//     `
export default  function OtpScreen (){
    const [text, setText] = useState('Enter OTP');
    
    return(
        <View  style={styles.container} >
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
            />
        </View>
    
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})