
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';

const Dot = (props ) => {
    return(
        <View style={{ width:20,
            height:20,
            backgroundColor:props.index > props.length ? 'red':'blue',
            marginRight:3}}>
        </View>
    )
}


export default Dot


const styles = StyleSheet.create({
    outer:{
       
    }
    
  })