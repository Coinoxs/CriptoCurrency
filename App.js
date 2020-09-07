
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,View, Text
} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './src/reducer/rootReducer'

const store = createStore(rootReducer);
const App =  () => {

  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({
  
});
