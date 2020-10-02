
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import WalletBackground from '../oldDesigns/WalletBackground';
import { FlatList } from 'react-native-gesture-handler';
import {useSelector,useDispatch} from 'react-redux'
import CoinListItem from '../components/CoinListİtem'
import SInfo from 'react-native-sensitive-info';


const TabHome = () => { 
  const dispacth = useDispatch(); 
  const coinList = useSelector((state) => state.coinInfo)
  
  
 
  const _retrieveData = async () => {
    try {
      const value = await SInfo.getItem( STORAGE_KEY, {});
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
      <View style={{alignItems:'center', flex:1, backgroundColor:'#0F0A28', width:'100%'}}>
            
            <View style={{zIndex:5, flex:1, width:'100%'}}>
                <FlatList
                contentContainerStyle={{paddingBottom:20,  }}
                numColumns={1}
                keyExtractor={item => item.key}
                data={coinList}
                renderItem={({ item }) => (
                    <CoinListItem key= {Math.random()} item={item} onPress={() => clickHandler(item)}/>
                )}
                />
            </View>
      </View>
    );
  }

export default TabHome