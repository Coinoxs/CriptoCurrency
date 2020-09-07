
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import WalletBackground from '../components/WalletBackground';
import { FlatList } from 'react-native-gesture-handler';
import {useSelector,useDispatch} from 'react-redux'
import CoinListItem from '../components/CoinListİtem'

const TabHome = () => {
  const dispacth = useDispatch(); 
  const coinList = useSelector((state) => state.coinInfo)

  const clickHandler = (item) => {
    console.log(item)
    dispacth({
      type:'COINSELECTION',
      payload:item
    })
}

    
    return (
      <View style={{alignItems:'center', flex:1, backgroundColor:'#f2efef'}}>
            <WalletBackground/>
            <View style={{zIndex:5, flex:1}}>
                <FlatList
                contentContainerStyle={{paddingBottom:20}}
                numColumns={1}
                keyExtractor={(item) => item.key}
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