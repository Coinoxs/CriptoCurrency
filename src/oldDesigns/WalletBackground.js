
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CoinBlackInfo from '../components/CoinBlackInfo'
import MainAccount from '../components/MainAccount'
import WalletDetail from '../components/WalletDetail';

const WalletBackground = () =>{

    return(
        <View style={styles.outer}>
            <LinearGradient colors={['#127251',  '#00CC66']} style={styles.linearGradient}></LinearGradient>
            <View style={styles.white}></View>
            <View style={styles.black}>
                <View style={styles.grey}></View>
            </View>
            <View style={{position:'absolute', zIndex:4, width:'100%'}}>
                <MainAccount />
                <CoinBlackInfo />
                <WalletDetail />
            </View>
        </View>
    )
}


export default WalletBackground

const styles = StyleSheet.create({
    outer:{
        width:'100%',
        height:270,
        alignItems:'center',
    },
    linearGradient: {
        width:'100%',
        height:300,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        zIndex:2
      },
      white:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        marginTop:-20,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        zIndex:1
      },
      black:{
        width:'100%',
        height:30,
        backgroundColor:'black',
        marginTop:-20,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        justifyContent:'center',
        alignItems:'center'
      },
      grey:{
          width:'90%',
          height:30,
          backgroundColor:'#f2efef'
      }
      
  })