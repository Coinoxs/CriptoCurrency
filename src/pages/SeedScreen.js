import React, {useEffect, useState}from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Dimensions,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LogButton from '../components/Button';
import { randomBytes } from 'react-native-randombytes'
import bip39 from 'react-native-bip39'
import {useSelector,useDispatch} from 'react-redux'

const screenWidth = Math.round(Dimensions.get('window').width)


export default function SeedScreen( ) {
    

    const list = []
    const seedList = useSelector((state) => state.seedList)
    const dispacth = useDispatch();
    const seedNumber = useSelector((state) => state.seedNumber)

    const seedHandler = (number) => {
        _generateRandomByte(number)
        dispacth({
            type:'SEEDNUMBERCHANGE',
            payload:number
          })
    }

    const _generateRandomByte =  (number) => {
        let i=1;
        while(list.length <  number  ) {
            
            let rand = randomBytes(1).toString('hex')
            let Mne = bip39.entropyToMnemonic(rand)
            if(list.indexOf(Mne) !== -1){
                return;
            }else{
                list.push({id:i,name:Mne})
                i++
            }
        }
        dispacth({
            type:'SEEDADD',
            payload:list
          })
    }
    const _getNewSeed = (seedNumber) => {
        _generateRandomByte(seedNumber)
    
    }
    

   
useEffect (() => {
    _generateRandomByte(12)

  },[])
  
    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center', backgroundColor:'red', paddingBottom:50}}>
            <BarWithBackButton/>
                <TouchableOpacity onPress={() => { seedHandler(12)}}>
                <Text>12 words</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text>--------------</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { seedHandler(24)}}>
                <Text>24 words</Text>
                </TouchableOpacity>
                <FlatList
                contentContainerStyle={{alignItems:"flex-start"}}
                numColumns={3}
                keyExtractor={(item) => item.id}
                data={seedList}
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        <View style={styles.tuslar}>
                            <Text style={styles.tuslarText} >{item.id + "  " +item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Text>You need to write down the seeds and store in a safe place</Text>
            
            <LogButton   name="CONTINUE" navigate="SeedConfirmation"/>
            <LogButton   name="GET NEW SEEDS"  onPressFunction={() => _getNewSeed(seedNumber)}/>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    },
    tuslar:{
        width:screenWidth/4,
        alignItems:'center',
        justifyContent:'center',   
        height:20,
        backgroundColor:'green',
        margin:1

    },
    tuslarText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
    },
    
})