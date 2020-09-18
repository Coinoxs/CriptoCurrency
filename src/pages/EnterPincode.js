import React,{ useEffect, useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,TextInput , FlatList, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LogButton from '../components/Button';
import Dot from '../components/dot'
import  AsyncStorage  from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { CommonActions } from '@react-navigation/native';


const screenWidth = Math.round(Dimensions.get('window').width)

export default function EnterPincode( ) {
    const STORAGE_KEY = '@pincode'
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [isPinTrue, setIsPinTrue] = useState(true);
    const enteredPin = useSelector((state) => state.enteredPin)
    const confirmPin = useSelector((state) => state.confirmPin)

    const dispacth = useDispatch(); 

    const numbers = [
        {number:1, key:1},
        {number:2, key:2},
        {number:3, key:3},
        {number:4, key:4},
        {number:5, key:5},
        {number:6, key:6},
        {number:7, key:7},
        {number:8, key:8},
        {number:8, key:9},
        {number:0, key:11},
        {number:'<-', key:12},
    ]
    
    
    const clickHandler = (item) => {
        if(password.length > 5 && item.key !== 12){
            return;
            
        }else if(password.length > 0 && item.key === 12 ){
            
            setPassword(password.substring(0, password.length - 1))
            
        }else if(item.key != 12 ){
            
            setPassword(password + item.number)
            
        }else{

        }
    }

    const _confirmPincode = () => {
        if(password.length === 6){
              if(password !== confirmPin){
                setIsPinTrue(false)
              }else if (password === confirmPin){
                  setIsPinTrue(true)
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'SeedScreen'
                        },
                      ],
                    })
                  );
                  
              }
        }


    }
    


    const renderDots = ()=>{
        let dots=[];
        for (let index = 1; index <= 6; index++) {
            dots.push(
                <Dot index={index} length={password.length}/>
            )
            
        }
        return dots;
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center' , paddingBottom:50, backgroundColor:'green'}}>
            <BarWithBackButton/>
            <Text>ENTER PINCODE</Text>
            <Text style={{backgroundColor:'pink', width:100, height:20}}>{password}</Text>
            <View style={styles.dotContainer}>
            {
                renderDots()
            }</View>
            {
                isPinTrue ? <Text></Text> : <Text>Password is incorrect</Text>
            }
            <FlatList
                contentContainerStyle={{alignItems:"flex-end"}}
                numColumns={3}
                keyExtractor={(item) => item.key}
                data={numbers}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { clickHandler(item)}} >
                        <View style={styles.tuslar}>
                            <Text style={styles.tuslarText} >{item.number}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <LogButton name='CONFIRM' onPressFunction={_confirmPincode}  />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    },
    dotContainer:{
        flexDirection:'row'
    },
    tuslar:{
        width:screenWidth/3,
        alignItems:'center',
        justifyContent:'center',   
        height:60,

    },
    tuslarText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
})
