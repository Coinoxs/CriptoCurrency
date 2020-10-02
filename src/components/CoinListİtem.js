import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector,useDispatch} from 'react-redux'

const CoinListItem = (props) => {

    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.outer} >
                <View>
                    <Image style={styles.image} source={require('../photos/bitcoinlogo.png')}/>
                </View>
                <View style={styles.textouter}>
                    <View style={{ marginRight:10 }}>
                        <Text style={{color:'#666666' , fontSize:20}}>{props.item.name}</Text>
                        <Text style={{color:'#BABABA'}}>{props.item.walletID}</Text>
                    </View>
                    <View>
                        <Text style={{color:'#666666', fontSize:20}}>{props.item.amount}</Text>
                        <Text style={{color:'#666666'}}>{props.item.dolarAmount}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default CoinListItem

const styles = StyleSheet.create({
    outer:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:20,
        width:'90%',
        alignItems:'center',
        borderRadius:10,
        marginBottom:10,
        alignSelf:'center'
    },
    image:{
        width:50,
        height:50,
        marginRight:5
    },
    textouter:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
    }
});