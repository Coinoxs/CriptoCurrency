//This is an example code for ViewPager//
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Ionicons';



export default function BarWithBackButton() {
    const navigation = useNavigation();

    const _onPressFunction = () => {
        navigation.goBack();
    }
  
    return (
        <View style={styles.outer} >
        <TouchableOpacity onPress={_onPressFunction}>
            <BackIcon name="chevron-back" size={25} color="white"   />
        </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    outer:{
        width:'93%',
        alignSelf:'center',
        marginTop:10,
        marginBottom:5,
    },

    
})









