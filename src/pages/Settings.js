import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LightButton from '../components/LightButton';
import SInfo from 'react-native-sensitive-info';
import QRCode from 'react-native-qrcode-svg';


const STORAGE_KEY = '@pincode'

const _clearData = async () => {
    try {
      await SInfo.deleteItem(STORAGE_KEY, {});

      
    } catch (error) {
      alert('Failed to save the data to the storage')
    }
  }
  const _retrieveData = async () => {
    try {
      const value = await SInfo.getItem(STORAGE_KEY,{});
      if (value !== null) {
        // We have data!!
        return value;
      }else{
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

const _PressHandler = () =>{
    
    _clearData();
    console.log(_retrieveData())
}

export default function SettingsScreen( ) {
  
    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center', backgroundColor:'red', paddingBottom:50}}>
            <BarWithBackButton/>
            <QRCode
              value="http://awesome.link.qr"
            />
            <LightButton  onPressFunction={_PressHandler} />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    }
    
})