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
    <SafeAreaView style={{width: '100%', height: '100%'}}>
    <StatusBar style='auto' hidden />
    <ImageBackground source={require('../assets/Images/1.png')} style={{width: '100%', height: '110%',justifyContent:'space-between'}}>
            <View style={styles.wrapper}>
              <Swiper   showsButtons={false}  
              activeDotColor='#DB6FF8'>
                <Slider logoSource={require('../assets/Images/vaultX.png')} logoStyle={{ width:150, height:150}}/>
                <Slider logoSource={require('../assets/Images/vaultX.png')} logoStyle={{ width:150, height:150}}/>
              </Swiper>
            </View>
            <View style={{marginBottom:'30%', alignItems:'center',width:'90%', alignSelf:'center'}}>
            <LightButton name='CREATE WALLET' navigate='PinNavigation' />
            <DarkButton name='RESTORE WALLET' navigate='RestoreSeeds'  />
            <Text style={styles.siteText}>wwww.VaultX.com</Text>
            </View>
        </ImageBackground>
      
    </SafeAreaView>
  )
  }


  const styles = StyleSheet.create({
    wrapper:{
      width:'100%',
      height:'60%',
      top:'10%'
    },
    siteText:{
      color:'#606DCB',
      fontSize:10
    },
  })