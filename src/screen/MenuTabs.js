import React from 'react';
import {View, StyleSheet, FlatList,TouchableOpacity,Text} from 'react-native';
import { menuData,productData,menuDetailedData } from '../global/Data';
import MenuCard from '../Components/MenuCard';

export  function Route1(){
    return(
        <View style={{flex:1}} >
            <View style={styles.view2} >
               <FlatList
                 style={{backgroundColor:'white'}}
                 data={menuDetailedData}
                 keyExtractor={(item,index)=>index.toString()}
                  renderItem={({item,index})=>(
                      <TouchableOpacity>
                         <MenuCard
                             productName={item.meal}
                             productDetails={item.details}
                             price={item.price}
                             image={item.image}
                         />
                    </TouchableOpacity>
                 )}
               />
            </View>
        </View>
    )
}

export const Route2=()=>{
    return(
        <View  style={[styles.scene, styles.scene2]} />
    )
}

export const Route3=()=>{
    return(
        <View  style={[styles.scene, styles.scene2]} />
    )
}

export const Route4=()=>{
    return(
        <View  style={[styles.scene, styles.scene2]} />
    )
}

export const Route5=()=>{
    return(
        <View  style={[styles.scene, styles.scene2]} />
    )
}

export const Route6=()=>{
    return(
        <View  style={[styles.scene, styles.scene2]} />
    )
}

export const Route7=()=>{
    return(
        <View  style={[styles.scene, styles.scene2]} />
    )
}

export const Route8=()=>{
    return(
        <View  style={[styles.scene, styles.scene2]} />
    )
}
const styles = StyleSheet.create({
    scene:{
        flex:1,
        backgroundColor:'#673ab7'
    },
    view2:{
        marginTop:5,
        paddingBottom:20,
    },
    scene2:{
        backgroundColor:'#673ab7'
    }
})


