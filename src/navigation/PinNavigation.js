import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DefinePincode from '../pages/DefinePincode'
import ConfirmPincode from '../pages/ConfirmPincode'

const Stack = createStackNavigator();

const STORAGE_KEY = '@pincode'



function PinNavigation({ navigation }) {

  return (
      <Stack.Navigator initialRouteName="DefinePincode" >
        <Stack.Screen name="DefinePincode" component={DefinePincode} options={{ headerShown: false }}/>
        <Stack.Screen name="ConfirmPincode" component={ConfirmPincode} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}

export default PinNavigation;