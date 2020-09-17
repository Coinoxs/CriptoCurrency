import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LogButton from '../components/Button';
import  AsyncStorage  from '@react-native-community/async-storage';


const STORAGE_KEY = '@pincode'

const _clearData = async () => {
    try {
      await AsyncStorage.clear();

      
    } catch (error) {
      alert('Failed to save the data to the storage')
    }
  }
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
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
            <LogButton  onPressFunction={_PressHandler} />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    }
    
})