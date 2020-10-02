/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducer/rootReducer'

const store = createStore(rootReducer);

export default function App () {
  return (
   
      
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    
  );
};

const styles = StyleSheet.create({
  
});
