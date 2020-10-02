import React,{useEffect} from 'react';
import { StyleSheet,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import SInfo from 'react-native-sensitive-info';




const STORAGE_KEY = '@pincode'



export default function OpeningPage( ) {
    const navigation = useNavigation();
    const dispacth = useDispatch(); 

    const _retrieveData = async () => {
        try {
          const value = await SInfo.getItem( STORAGE_KEY, {});
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
                    name: 'WalletCreation',
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
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
    
})