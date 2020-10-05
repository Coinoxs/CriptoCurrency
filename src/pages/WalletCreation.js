//This is an example code for ViewPager//
import React from 'react';
//import react in our code.
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground, StatusBar } from 'react-native';
// import all basic components
import Swiper from "react-native-swiper";
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '../components/Slider'
import LightButton from '../components/LightButton';
import DarkButton from '../components/DarkButton';


export default function WalletCreation( { navigation } ) {
  
  return (
    <SafeAreaView style={styles.outer}>
    <StatusBar style='auto' hidden />
    <View  style={{width: '100%', height: '100%',justifyContent:'space-between'}}>
            <View style={styles.wrapper}>
              <Swiper   showsButtons={false}  
              activeDotColor='#DB6FF8'>
                <Slider logoSource={require('../assets/Images/vaultX.png')} logoStyle={{ width:250, height:150, marginTop:80}}/>
                
                

              </Swiper>
            </View>
            <View style={{marginBottom:'30%', alignItems:'center',width:'90%', alignSelf:'center',height:'40%'}}>
            <LightButton name='CREATE WALLET' navigate='PinNavigation' />
            <DarkButton name='RESTORE WALLET' navigate='RestoreWallet'  />
            <Text style={styles.siteText}>wwww.VaultX.com</Text>
            </View>
    </View>
    </SafeAreaView>
  )
  }


  const styles = StyleSheet.create({
    outer:{
      backgroundColor:'#0F0A28',
      height:'100%',
      width:'100%',
      justifyContent:"center"
    },
    wrapper:{
      width:'100%',
      height:'78%',
    },
    siteText:{
      color:'#606DCB',
      fontSize:10
    },
  })