
import React , {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './src/reducer/rootReducer'
import SplashScreen from 'react-native-splash-screen'

const store = createStore(rootReducer);
const App =  () => {

  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({
  
});
