
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,View, Text, TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabHome from '../pages/TabHome'
import LinearGradient from 'react-native-linear-gradient';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <LinearGradient
            colors={['#127251',  '#00CC66']}
            style={{borderTopLeftRadius:13, borderTopRightRadius:13}}
            angle={45}
            useAngle={true}
            angleCenter={{ x: 0.5, y: 0.5}}
            
            >
    <View style={styles.tabView}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
            let iconName;
            let size;
            let color;
            const isFocused = state.index === index;
            
            if (route.name === 'TabHome') {
              iconName = isFocused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = isFocused ? 'ios-list-circle' : 'ios-list-circle-outline';
            }

        

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,justifyContent:'center', alignItems:'center' }}
          >
            <Ionicons name={iconName} size={30} color={isFocused ? '#F7931A' : 'white'} />
          </TouchableOpacity>
          
        );
      })}
    </View>
    </LinearGradient>
  );
}


const TabNavigation =  () => {
  return (
    
      <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      >
        <Tab.Screen name="TabHome" component={TabHome} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    
  );
};
export default TabNavigation;
const styles = StyleSheet.create({
  tabView:{
     flexDirection: 'row', 
     height:60, 
     alignItems:'center', 
     justifyContent:'center',
     borderRadius:10,
     overflow:'hidden'
  }
});
