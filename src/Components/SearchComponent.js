import React,{useState,useRef} from 'react';
import {
        View,
        Text,StyleSheet,
         TouchableWithoutFeedback,
         Modal,
         FlatList,
          TouchableOpacity,
          Keyboard
        } from 'react-native';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { filterdata } from '../global/Data';
// import filter from 'lodash/filter';
import filter from "lodash/filter";
export default function SearchComponent(){ 
  const navigation=useNavigation()
    const [ data, setData ] = useState([...filterdata])
    const [ modalVisible , setModalVisible ] = useState(false);
    const [ textInputFossed , setTextInputfossed ] = useState(true);
    const textInput=useRef(0);

    const contains=({name},query)=>{
      if(name.includes(query)){
        return true
      }
      return false
    }

    const handleSearch=text=>{
      const dataS=filter(filterdata,userSearch=>{
        return contains(userSearch,text)
      })
      setData([...dataS])
    }
    return(
        <View  >
            <TouchableWithoutFeedback
             onPress={()=>(
              setModalVisible(true)
             )}
            >
                <View style={styles.SearchArea} >
                    <Icon
                        name='search'
                        type='material'
                        size={32}
                        iconStyle={{marginLeft:5}}
                        style={styles.searchIcon}
                    />
                    <Text style={{fontSize:15,}} >What are you looking for?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
              animationType='fade'
              transparent={false}
              visible={modalVisible}
            >
               <View style={styles.modal}>
                  <View style={styles.view1}>
                    <View style={styles.textInput} >
                        <Animatable.View
                         animation={textInput ? 'fadeInRight' : 'fadeInLeft'}
                         duration={300}
                        >
                            <Icon
                              name={textInputFossed ? 'arrow-back' : 'search'}
                              onPress={()=>{
                                if(textInputFossed)
                                setModalVisible(false)
                                setTextInputfossed(true)
                              }}
                              style={styles.icon2}
                              type='material'passw
                              iconStyle={{marginRight:5}}
                            />
                        </Animatable.View>
                        <TextInput
                          style={{width:'90%'}}
                          placeholder=''
                          autoFocus={false}
                          ref={textInput}
                          onFocus={()=>{
                            setTextInputfossed(true)
                          }}
                          onBlur={()=>{
                            setTextInputfossed(false)
                          }}
                          onChangeText={handleSearch}
                        />
                        <Animated.View  
                          animation={textInput ? 'fadeInLeft' : ''}
                         duration={300}
                        >
                          <Icon
                            name={textInputFossed ? 'cancel' : null}
                            iconStyle={{color:colors.grey3}}
                            type='material'
                            onPress={()=>{
                              textInput.current.clear()
                              // handleSearch()
                            }}

                          />
                        </Animated.View>
                    </View>
                  </View>


                   <FlatList
                     data={data}
                     renderItem={({item})=>(
                       <TouchableOpacity
                         onPress={()=>{
                          Keyboard.dismiss
                           navigation.navigate('SearchResultScreen', {item:item.name} )
                           setModalVisible(false)
                           setTextInputfossed(true)

                         }}
                       >
                        <View style={styles.view2} >
                        <Text  style={{color:colors.grey2, fontSize:15}} >{item.name} </Text>
                        </View>
                       </TouchableOpacity>
                     )}
                     keyExtractor={item => item.id}
                   />

               </View>
                
            </Modal>
        </View>
    )
}

const styles=StyleSheet.create({ 
  container:{
    flex:1
  },
  text1:{
    color:colors.grey3,
    fontSize:16,
  },
  textInput:{
    borderWidth:1,
    borderRadius:12,
    marginHorizontal:0,
    borderColor:'#86939e',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
  },
  searchIcon:{
    fontSize:24,
    padding:5,
    color:colors.grey2,
  },
  SearchArea:{
    marginTop:10,
    backgroundColor:colors.grey5,
    flexDirection:'row',
    alignItems:'center',
    width:'95%',
    marginLeft:10,
    height:50,
    borderWidth:1,
    borderRadius:12,
    borderColor:colors.grey2,
  },
  view1:{
    height:70,
    justifyContent:'center',
    paddingHorizontal:10,
  },
  view2:{
    flexDirection:'row',
    padding:15,
    alignItems:'center',
  },
  icon2:{
    fontSize:24,
    padding:5,
    color:colors.grey2, 
  },
  modal:{
    flex:1,
  },
})