import { View, Text, StyleSheet,
    ScrollView,FlatList,Pressable,Dimensions,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements';

export default function BusinessConsoleScreen() {
  return (
    <View style={styles.container} >
      <Text> Welcome to Business Console ssScreen</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
})