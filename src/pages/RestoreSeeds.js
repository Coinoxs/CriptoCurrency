import React, {useEffect, useState}from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Dimensions,FlatList,TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LogButton from '../components/Button';
import  AsyncStorage  from '@react-native-community/async-storage';
import { randomBytes } from 'react-native-randombytes'
import bip39 from 'react-native-bip39'
import {useSelector,useDispatch} from 'react-redux'
import TagInput from '../components/TagInput'

const screenWidth = Math.round(Dimensions.get('window').width)


export default function RestoreSeeds( ) {
    const seedList = useSelector((state) => state.seedList)
    const seedNumber = useSelector((state) => state.seedNumber)
     
    return (
        <SafeAreaView >
            <BarWithBackButton/>
            <Text>Enter {seedNumber - seedList.length} seeds</Text>
            <TagInput />
              
            
            <LogButton  name="IMPORT" />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    },
    tuslar:{
        width:screenWidth/3,
        alignItems:'center',
        justifyContent:'center',   
        height:60,
        backgroundColor:'green',
        margin:1

    },
    tuslarText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
    
})