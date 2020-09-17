
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import WalletBackground from '../components/WalletBackground';
import { FlatList } from 'react-native-gesture-handler';
import {useSelector,useDispatch} from 'react-redux'
import CoinListItem from '../components/CoinListİtem'
import  AsyncStorage  from '@react-native-community/async-storage';

const TabHome = () => { 
  const dispacth = useDispatch(); 
  const coinList = useSelector((state) => state.coinInfo)
  
  
 
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        // We have data!!
        console.log('kayıtlı veri',value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const clickHandler = (item) => {
    dispacth({
      type:'COINSELECTION',
      payload:item
    })
    console.log('click',item)
    _retrieveData();

}

    
    return (
      <View style={{alignItems:'center', flex:1, backgroundColor:'#f2efef', width:'100%'}}>
            <WalletBackground/>
            <View style={{zIndex:5, flex:1, width:'100%'}}>
                <FlatList
                contentContainerStyle={{paddingBottom:20,  }}
                numColumns={1}
                keyExtractor={item => item.key}
                data={coinList}
                renderItem={({ item }) => (
                    <CoinListItem item={item} onPress={() => clickHandler(item)}/>
                )}
                />
            </View>
      </View>
    );
  }

export default TabHome