import { View, Text,StyleSheet,Dimensions,FlatList } from 'react-native';
import React from 'react';
import SearchResultCard from '../Components/SearchResultCard';
import { restaurantData } from '../global/Data';
import { colors } from '../global/styles';
import { productData } from '../global/Data';
const SCREEN_WIDTH=Dimensions.get('window').width;
export default function SearchResultScreen({navigation,route}) {
  return (
    <View style={styles.container} >
      <View>
        <FlatList
           style={{backgroundColor:colors.cardbackground}}
                    data={restaurantData}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item,index})=>(
                      <SearchResultCard 
                           ScreenWidth={SCREEN_WIDTH}
                           images={item.images}
                           averageReview={item.averageReview}
                           numberOfReview={item.numberofReview}
                           restaurantName={item.restaurantName}
                           farAway={item.farAway}
                           businessAddress={item.businessAddress}
                           onPressRestaurantCard={()=>navigation.navigate('ReastaurantHomeScreen',{id:index , restaurant:item.restaurantName})}
                         />

                    )}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={
                      <View  >
                         <Text style={styles.listHeader}>  {restaurantData.length} Search result for {route.params.item} </Text>
                       </View>
                       }
                 />
      </View>
      
    </View>
  )
}
const styles=StyleSheet.create({
     container:{
      flex:1,
     },
     listHeader:{
      fontSize:20,
      paddingHorizontal:15,
      color:colors.grey1,
      paddingVertical:15,
      fontWeight:'bold',
     }
})