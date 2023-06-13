import React,{useState} from "react";
import { View,Text,StyleSheet,TouchableOpacity, ScrollView,FlatList, Pressable, Image,Dimensions,StatusBar } from "react-native";
import HomeHeader from "../Components/HomeHeader";
import { colors } from "../global/styles";
import { Icon } from "react-native-elements";
import { filterdata, restaurantData } from "../global/Data";
import FoodCard from "../Components/foodCard";
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH=Dimensions.get('window').width
export default function HomeScreen ({navigation}) {
    const [delivery,setDelivery] = useState(true);
    const [indexChecked, setIndexChecked ] = useState('0')
    return  (
        <View style={styles.container} >
            <HomeHeader  navigation={navigation} />
            <ScrollView
            stickyHeaderIndices={[0]} 
            showsVerticalScrollIndicator={true}
             >
            <View style={{backgroundColor:colors.cardbackground, paddingBottom:5}} >
               <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-evenly'}} >
                  <TouchableOpacity
                    onPress={()=>{
                    setDelivery(true);
                    }}
                   >
                    <View style={{...styles.deliveryButton,backgroundColor:delivery ? colors.buttons : colors.grey5}} >
                       <Text style={styles.deleiveryTExt} >Delivery</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                   onPress={()=>{
                    setDelivery(false)
                    navigation.navigate('restaurantmapScreen')
                   }
                   }
                    >
                     <View style={{...styles.deliveryButton,backgroundColor:delivery ? colors.grey5 : colors.buttons}} >
                       <Text style={styles.deleiveryTExt} >Pick up</Text>
                     </View>
                  </TouchableOpacity>
            </View>
            </View>
            <View  style={styles.filterView} >
            <View style={styles.addressView} >
                <View style={{flexDirection:'row', alignItems:'center'}} >
                    <Icon
                        type="material-community"
                        name="map-marker"
                        color={colors.grey1}
                        size={26}
                    />
                    <Text>Mahalakshmi Layot</Text>
                </View>
                <View style={styles.clockView} >
                    <Icon
                        type="material-community"
                        name="clock-time-four"
                        color={colors.grey1}
                        size={26}
                    />
                    <Text>Now</Text>
                </View>
            </View>
            <View>
                 <Icon
                     type="material-community"
                     name="tune"
                     color={colors.grey1}
                     size={26}
                    />
               </View>
               </View>
              <View style={styles.headerTextView} >
                 <Text style={styles.header} >Category</Text>
              </View>
                 <View>
                    <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                        data={filterdata}
                        keyExtractor={(item)=>item.id}
                        extraData={indexChecked}
                        renderItem={({item,index})=>(
                            <Pressable
                               onPress={()=>{setIndexChecked(item.id)}}
                            >
                               <View style={indexChecked === item.id ? {...styles.smallCardSelected} : {...styles.smallCard} } >
                                  <Image
                                    style={{height:60,width:60,borderRadius:30}}
                                    source={item.image}
                                  />
                                  <View>
                                    <Text style={indexChecked === item.id ? {...styles.smallCardTextselected} : {...styles.smallCardTex} } >{item.name} </Text>
                                  </View>
                               </View>
                            </Pressable>
                        )}
                    />
                 </View>
                   <View style={styles.headerTextView} >
                    <Text style={styles.header} >Free Delivery now</Text>
                  </View>
                  <View>
                  <View style={{ flexDirection:'row',alignItems:'center',marginTop:5}}>
                  <Text  style={{marginLeft:15,fontSize:16,marginTop:5, marginRight:5}} >Options changing in </Text>
                   <CountDown
                     size={14}
                     until={3600}
                     onFinish={() => alert('Finished')}
                     digitStyle={{backgroundColor: colors.lightGreen, }}
                     digitTxtStyle={{color: colors.cardbackground}}
                     timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                     timeToShow={['H', 'M', 'S']}
                     timeLabels={{m: null, s: null}}
                    />
                 </View>
                    <FlatList
                        style={{marginTop:10,marginBottom:10}}
                        horizontal={true}
                        data={restaurantData}
                        keyExtractor={(item,index)=>index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item})=>(
                            <View style={{marginRight:5}} >
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH*0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    faraway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberofReview}
                                />
                            </View>
                        )}
                    />
                  </View>
                  <View style={styles.headerTextView} >
                    <Text style={styles.header} >Promotion Available</Text>
                  </View>
                  <View>
                    <FlatList
                        style={{marginTop:10,marginBottom:10}}
                        horizontal={true}
                        data={restaurantData}
                        keyExtractor={(item,index)=>index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item})=>(
                            <View style={{marginRight:5}} >
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH*0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    faraway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberofReview}
                                />
                            </View>
                        )}
                    />
                  </View>
                  <View style={styles.headerTextView} >
                    <Text style={styles.header} >Restaurant in your Area</Text>
                  </View>
                  <View style={{width:SCREEN_WIDTH, paddingTop:10}} >
                     {
                         restaurantData.map(item=>(
                            <View key={item.id} style={{paddingBottom:20}} >
                            <FoodCard
                                    screenWidth={SCREEN_WIDTH*0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    faraway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberofReview}
                                />

                            </View>
                         ))
                     }
                  </View>
            </ScrollView>
            {delivery && 
                <View style={styles.floatButton} >
                <TouchableOpacity  
                  onPress={()=>navigation.navigate('restaurantmapScreen')}
                >
                 <Icon
                    name='place'
                    type="material"
                    size={32}
                    color={colors.buttons}
                 />
                   <Text style={{color:colors.grey2,}} >Map</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
    },
    deliveryButton:{
       paddingHorizontal:20,
       borderRadius:15,
       paddingVertical:5,
    },
    deleiveryTExt:{
        marginLeft:5,
        fontSize:15,
    },
    filterView:{
        flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-evenly',
          marginHorizontal:10,
           marginVertical:10,
    },
    clockView:{
        flexDirection:'row',
        alignItems:'center',
         marginLeft:15,
          backgroundColor:'white',
           borderRadius:10,
           paddingHorizontal:5,
           marginRight:20,
    },
    addressView:{
        flexDirection:'row',
         backgroundColor:colors.grey5,
          borderRadius:15,
           paddingVertical:3,
           marginTop:10,
           justifyContent:'space-between',
           paddingHorizontal:20,
    },
    header:{
        color:colors.grey2,
        fontSize:24,
        fontWeight:'bold',
        paddingLeft:20, 
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:2,
    },

    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    smallCardTextselected:{
        fontWeight:'bold',
        color:colors.cardbackground,

    },
    smallCardTex:{
        fontWeight:'bold',
        color:colors.grey2,
        
    },
    floatButton:{
        position:'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:30,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center'
    },
})