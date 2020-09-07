import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import {useSelector,useDispatch} from 'react-redux'

const WalletDetail = () => {

    const selectedCoin = useSelector((state) => state.selectedCoin)

    return(
        <View style={styles.outer}>
            <View style={{flexDirection:'row' }}>
                <Text style={{color:'white' , fontSize:30, marginRight:3}}>{selectedCoin.amount}</Text>
                <Text style={{color:'white' , fontSize:15, paddingTop:5}}>{selectedCoin.name}</Text>
            </View>
            <View >
                <Text style={{color:'white'}}>{selectedCoin.dolarAmount} USD</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:5}}>
                <Text style={{color:'white'}}>AVAILABLE 0.05 BTC</Text>
                <Text style={{color:'white'}}>UNCONFIRMED 0.05 BTC</Text>
            </View>
        </View>
    )
}


export default WalletDetail

const styles = StyleSheet.create({
    outer:{
        width:380,
        marginTop:20
    },
});