
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';

const Dot = (props ) => {
    return(
        <View style={{ width:props.index > props.length ? 10 : 15,
            height:props.index > props.length ? 10 : 15,
            backgroundColor:'white',
            marginRight:3,
        borderRadius:props.index > props.length ? 5 : 7.5,
    }}>
        </View>
    )
}


export default Dot


const styles = StyleSheet.create({
    outer:{
       
    }
    
  })