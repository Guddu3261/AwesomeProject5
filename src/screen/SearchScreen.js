import React from 'react';
import { 
        View,
        Text,
        StyleSheet,
        FlatList,
        TouchableWithoutFeedback,
         ImageBackground,
         Dimensions
        } from 'react-native';
import SearchComponent from '../Components/SearchComponent';
import { filterdata } from '../global/Data';
import { colors } from '../global/styles';
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH=Dimensions.get('window').width;
export default function SearchScreen(){
    const navigation=useNavigation();
    return(
        <View  >
            <SearchComponent/>
            <View>
                <FlatList
                    style={{marginBottom:20,}}
                    data={filterdata}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback
                        onPress={()=>{navigation.navigate('SearchResultScreen', {item:item.name})}}
                        >
                            <View style={styles.imageView} >
                                <ImageBackground 
                                   style={styles.images}
                                     source={item.image}
                                 >
                                     <View style={styles.textView} >
                                        <Text style={{color:colors.cardbackground}} >{item.name}</Text>
                                     </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item=>item.id}
                    ListHeaderComponent={<Text style={styles.listHeader} > Top Categories </Text>}
                    ListFooterComponent={<Footer/>}
                />
               
            </View>
        </View>
    )
}

const Footer=()=>{
    return(
        <View>
                <FlatList
                    style={{marginTop:10}}
                    data={filterdata}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback>
                            <View style={styles.imageView} >
                                <ImageBackground 
                                   style={styles.images}
                                     source={item.image}
                                 >
                                     <View style={styles.textView} >
                                        <Text style={{color:colors.cardbackground}} >{item.name}</Text>
                                     </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item=>item.id}
                    ListHeaderComponent={<Text style={styles.listHeader} > Top Categories </Text>}
                    
                />
               
            </View>
    )
}

const styles=StyleSheet.create({ 
    imageView:{
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        height:SCREEN_WIDTH*0.48,
        width:SCREEN_WIDTH*0.48,
        marginLeft:SCREEN_WIDTH*0.02,
        marginBottom:SCREEN_WIDTH*0.035,

       
    },
    images:{
        height:SCREEN_WIDTH*0.49,
        width:SCREEN_WIDTH*0.49,
        borderRadius:10,
    },
    listHeader:{
        fontSize:16,
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:10,
    },
    textView:{
        height:SCREEN_WIDTH*0.49,
        width:SCREEN_WIDTH*0.49,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(52,52,52,0.3)',
    },

})