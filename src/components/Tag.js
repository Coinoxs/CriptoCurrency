import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';

export default function Tag(props) {
    return(
        <View style={styles.outer}>
            <Text>{props.name}</Text>
            <TouchableOpacity style={styles.inner}>
                <Text>x</Text>
            </TouchableOpacity>
        </View>
    )
}





const styles = StyleSheet.create({
    outer:{
       flexDirection:'row',
       padding:5,
       borderColor:'black',
       borderWidth:0.5,
       alignItems:'center',
       borderRadius:20,
    },
    inner:{
        borderColor:'red',
        borderWidth:0.5,
        borderRadius:20,
        padding:5,

    }
    
  })