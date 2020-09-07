import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OpeningPage from '../pages/OpeningPage'
import TabNavigation from './TabNavigation'


const Stack = createStackNavigator();

function StackNavigation({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpeningPage" >
        <Stack.Screen name="OpeningPage" component={OpeningPage} options={{ headerShown: false }}/>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;