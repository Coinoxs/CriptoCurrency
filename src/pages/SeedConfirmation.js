import React, {useEffect, useState}from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Dimensions,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LogButton from '../components/Button';
import  AsyncStorage  from '@react-native-community/async-storage';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native';


const screenWidth = Math.round(Dimensions.get('window').width)


export default function SeedConfirmation( ) {
    
    const navigation = useNavigation();
    const seedList = useSelector((state) => state.seedList)
    const dispacth = useDispatch();
    const seedNumber = useSelector((state) => state.seedNumber)
    const suffledSeedList = useSelector((state) => state.suffledSeedList)
    const [seedConfirmList, setseedConfirmList] = useState([]);
    const originalSuffledSeedList = useSelector((state) => state.originalSuffledSeedList)
    
    const _topToBottom = (x) =>{
        const newList = suffledSeedList.filter((item) => item.id !== x.id);
 
        dispacth({
            type:'SUFFLEDSEEDLIST',
            payload:newList
          })

          
          let confirmList = seedConfirmList
          confirmList.push(x)
          setseedConfirmList(confirmList)
    }
    const _bottomToTop = (x) =>{
        const newList = seedConfirmList.filter((item) => item.id !== x.id);
 
        setseedConfirmList(newList)

          let suffledList = suffledSeedList
          suffledList.push(x)
          dispacth({
            type:'SUFFLEDSEEDLIST',
            payload:suffledList
          })
    }
    
    
 const _handleSuffle = (seedNumber) =>{
    let suffledList = []
    let originalList = seedList
    let usedNumber=[]

    for( let i=originalList.length;  originalList.length - usedNumber.length  > 0; i--){
        
        let rndmSayi = Math.floor((Math.random() * seedNumber) + 1)
        
            if(usedNumber.indexOf(rndmSayi) > -1){
    
            }else{
            suffledList.push(originalList[rndmSayi-1])
            
            usedNumber=[... usedNumber, rndmSayi]
            
            }
       
    }
    dispacth({
        type:'SUFFLEDSEEDLIST',
        payload:suffledList
      })
      dispacth({
        type:'ORIGINALSUFFLEDSEEDLIST',
        payload:suffledList
      })
      setseedConfirmList([])

 }
    const _confirmationHandler = () => {
        console.log('originallist', seedList)
        console.log('user entry', seedConfirmList)
        
        
        for (let index = 0; index < seedNumber; index++) {
                console.log(seedList[index])
                console.log(seedConfirmList[index])
                if(seedList[index] == seedConfirmList[index]){
                    console.log('originallist eşit', seedList[index])
                    console.log('user entry eşit', seedConfirmList[index])
                }else if(seedList[index] !== seedConfirmList[index]){
                    console.log('originalsuffledlist',originalSuffledSeedList)
                    dispacth({
                        type:'SUFFLEDSEEDLIST',
                        payload:originalSuffledSeedList
                      })
                      setseedConfirmList([])
                    alert("the order of the seeds is wrong")
                    return;
                }
        }
            navigation.navigate('TabNavigation')
        

    }
   
    

   
useEffect (() => {
    _handleSuffle(seedNumber)

  },[])
  
    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center', backgroundColor:'red', paddingBottom:50}}>
            <BarWithBackButton/>
                
            <Text>Please order the seeds as they shown in previous screen</Text>
            
            <FlatList
                contentContainerStyle={{alignItems:"flex-start"}}
                numColumns={3}
                keyExtractor={(item) => item.id}
                data={suffledSeedList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { _topToBottom(item)}}>
                        <View style={styles.tuslar}>
                            <Text style={styles.tuslarText} >{item.id + "  " +item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Text>You need to write down the seeds and store in a safe place</Text>
            <FlatList
                contentContainerStyle={{alignItems:"flex-start"}}
                numColumns={3}
                keyExtractor={(item) => item.id}
                data={seedConfirmList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { _bottomToTop(item)}}>
                        <View style={styles.tuslar}>
                            <Text style={styles.tuslarText} >{item.id + "  " +item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <LogButton   name="CONFIRM" onPressFunction={_confirmationHandler} />
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