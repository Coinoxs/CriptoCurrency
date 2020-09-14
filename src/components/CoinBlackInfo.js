import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import {useSelector,useDispatch} from 'react-redux'

const CoinListItem = () => {
    
    const selectedCoin = useSelector((state) => state.selectedCoin)

    return(
        <View style={styles.outer}>
            <View>
                <Image style={styles.image} source={require('../photos/bitcoinlogo.png')}/>
            </View>
            <View style={styles.textouter}>
                <View style={{ marginRight:10 }}>
                    <Text style={{color:'#666666',color:'white' }}>SELECT COIN</Text>
                    <Text style={{color:'#BABABA' , fontSize:20 ,color:'white'}}>{selectedCoin.name}</Text>
                </View>
                <View style={styles.rightText}>
                    <Text style={{color:'#666666', fontSize:20 , color:'white'}}>{selectedCoin.dolarAmount} </Text>
                    <Text style={{color:'#666666', color:'white'}}> USD</Text>
                </View>
            </View>
        </View>
    )
}


export default CoinListItem

const styles = StyleSheet.create({
    outer:{
        flexDirection:'row',
        backgroundColor:'rgba(0, 0, 0,0.2)',
        padding:10,
        width:'90%',
        alignItems:'center',
        borderRadius:10,
        marginTop:20,
        alignSelf:'center'
        
    },
    image:{
        width:40,
        height:40,
        marginRight:5
    },
    textouter:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
    },
    rightText:{
        flexDirection:'row',
        alignItems:'center'
    }

});