import React,{useEffect} from 'react';
import { StyleSheet,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  AsyncStorage  from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';




const STORAGE_KEY = '@pincode'



export default function OpeningPage( ) {
    const navigation = useNavigation();
    const dispacth = useDispatch(); 

    const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem(STORAGE_KEY);
          if (value !== null) {
            // We have data!!
            dispacth({
              type:'CONFIRMPIN',
              payload:value
            })
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: 'EnterPincode',
                  },
                ],
              })
            );
          }else{
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: 'WalletCreation',
                  },
                ],
              })
            );
          }
        } catch (error) {
          // Error retrieving data
        }
      };


    useEffect (() => {
        _retrieveData();
      },[])
  
    return (
        <SafeAreaView style={styles.wrapper}>
            <Image source={require('../assets/icon.png')}></Image>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#4f6d7a',
    }
    
})