//This is an example code for ViewPager//
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowBack from 'react-native-vector-icons/MaterialIcons';



export default function BarWithBackButton( ) {
  
    return (
        <View style={styles.outer}>
            <ArrowBack name="keyboard-backspace" size={30} color="#428DFF"  style={styles.icon} />
        </View>
    )
}



const styles = StyleSheet.create({
    outer:{
        width:'100%', 
    },

    icon:{
        alignSelf:'flex-end',
        marginRight:'5%',
    }
})









