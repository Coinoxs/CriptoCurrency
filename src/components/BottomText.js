
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';

const BottomText = (props ) => {
    
    return(
        <Text style={styles.bottomText}>{props.content}</Text>
    )
}


export default BottomText


const styles = StyleSheet.create({
    bottomText:{
        color:'white',
        marginTop:5,
        fontSize:13,
        fontFamily: 'SofiaProLight',
    }
  })