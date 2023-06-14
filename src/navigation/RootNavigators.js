import React,{useContext} from "react";
import {NavigationContainer} from "@react-navigation/native"
import AuthNavigators from "./AuthNavigators";
import AppStack from "./AppStack";
import { SignInContext } from "../contexts/AuthContext";

export default function RootNavigators(){
    const {signedIn} =useContext(SignInContext);
    return(
        <NavigationContainer>
          {
             signedIn.userToken !== 'signed-in' ?(
                <AuthNavigators/>
             ): (
                <AppStack/>
             )
          }
            
        </NavigationContainer>
    )
}