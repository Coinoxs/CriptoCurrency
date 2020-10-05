import React, {useEffect, useState} from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WalletCreation from '../pages/WalletCreation'
import OpeningPage from '../pages/OpeningPage'
import TabNavigation from './TabNavigation'
import PinNavigation from '../navigation/PinNavigation'
import {useSelector,useDispatch} from 'react-redux'
import EnterPincode from '../pages/EnterPincode'
import SeedScreen from '../pages/SeedScreen'
import RestoreWallet from '../pages/RestoreWallet'
import SeedConfirmation from '../pages/SeedConfirmation'
import SInfo from 'react-native-sensitive-info';
import SecurityWarning from '../pages/SecurityWarning';
import WalletCreated from '../pages/WalletCreated';

const Stack = createStackNavigator();

const STORAGE_KEY = '@pincode'



function StackNavigation({ navigation }) {
  const [IsPinDefined, setIspinDefined] = useState(false);


  const dispacth = useDispatch(); 
  const isPinCodeEntered = useSelector((state) => state.isPinCodeEntered)
  

const _retrieveData = async () => {
  try {
    const value = await SInfo.getItem( STORAGE_KEY, {});
    if (value !== null) {
      console.log('pincode',value)
      // We have data!!
      props.navigation.navigate(value ? 'TabNavigation' : 'OpeningPage');
    }else{
    }
  } catch (error) {
    // Error retrieving data
  }
};
  useEffect (() => {
    _retrieveData();
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={  "OpeningPage"}  >
        <Stack.Screen name="OpeningPage" component={OpeningPage} options={{ headerShown: false }}/>
        <Stack.Screen name="WalletCreation" component={WalletCreation} options={{ headerShown: false }}/>
        <Stack.Screen name="EnterPincode" component={EnterPincode} options={{ headerShown: false }}/>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="PinNavigation" component={PinNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="SeedScreen" component={SeedScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RestoreWallet" component={RestoreWallet} options={{ headerShown: false }}/>
        <Stack.Screen name="SeedConfirmation" component={SeedConfirmation} options={{ headerShown: false }}/>
        <Stack.Screen name="SecurityWarning" component={SecurityWarning} options={{ headerShown: false }}/>
        <Stack.Screen name="WalletCreated" component={WalletCreated} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;