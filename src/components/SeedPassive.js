
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const SeedPassive = (props ) => {
    const navigation = useNavigation();

    const PressHandler = () => {
        if(props.navigate != null){

        navigation.navigate(props.navigate)
        }
        if(props.onPressFunction){
            props.onPressFunction()
        }
    }
    return(
        <TouchableOpacity
            style={styles.button}
            onPress={PressHandler}
            >
               <Text style={styles.buttonText}>
                    {props.name}
                </Text>
            
        </TouchableOpacity>
    )
}


export default SeedPassive


const styles = StyleSheet.create({
    button:{
        alignSelf:'center',
        width:'50%',
        backgroundColor:'#343770',
    },
    
      buttonText: {
        fontSize: 15,
        fontFamily: 'SofiaProLight',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight:"bold"
      },
  })