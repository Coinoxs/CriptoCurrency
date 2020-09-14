import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import KeyBoardButton from '../components/KeyBoardButton';



export default function SettingsScreen( ) {
  
    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center', backgroundColor:'red', paddingBottom:50}}>
            <BarWithBackButton/>
            <KeyBoardButton  />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    }
    
})