import { View, Text,StyleSheet } from 'react-native'
import React from 'react';
import {colors,parameters} from "../global/styles";
import { Icon } from 'react-native-elements';
// import { colors } from 'react-native-elements/dist/helpers';
export default function Header({title,type,navigation}) {
  return (
    <View style={styles.header} >
      <View  style={{ marginLeft:20 }}>
        <Icon
          type="material-community"
          name={type}
          size={28}
          color={colors.headerText}
          onPress={()=>{navigation.goBack()}}
        />
      </View>
      <View>
          <Text style={styles.headerText} > {title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerhieght,
    },
    headerText:{
        color:colors.headerText,
        fontSize:22,
        fontWeight:'bold',
        marginLeft:30,
    },
})