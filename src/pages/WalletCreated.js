import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LightButton from '../components/LightButton';
import { useNavigation,CommonActions } from '@react-navigation/native';



export default function WalletCreated( ) {
    const navigation = useNavigation();
  
    const _pressHandler = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: 'TabNavigation'
                },
              ],
            })
          );
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center', backgroundColor:'red', paddingBottom:50}}>
            <BarWithBackButton/>
            <Text>Wallet succesfully created</Text>
            <LightButton  name="CONFIRM" onPressFunction={() => _pressHandler()} />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    }
    
})