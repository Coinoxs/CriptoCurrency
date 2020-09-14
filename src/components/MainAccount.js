import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import Copy from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainAccount = () => {
    return(
        <View style={styles.outer}>
            <View style={{ marginRight:10 }}>
                <Text style={{color:'white' , fontSize:20}}>Main Account</Text>
                <Text style={{color:'white'}}>1fy3esfsefs3fsefs3rse</Text>
            </View>
            <TouchableOpacity>
                <View>
                    <Copy name='content-copy' size={30} color='white' />
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default MainAccount

const styles = StyleSheet.create({
    outer:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
        alignSelf:'center'
    },
    image:{
        width:50,
        height:50,
        marginRight:5
    },
});