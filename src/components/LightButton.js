
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const LightButton = (props ) => {
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
            style={[styles.button, props.style]}
            onPress={PressHandler}
            >
            <LinearGradient
                colors={['#DA6BF7',  '#5F6DF5']}
                style={styles.linearGradient}
                angle={45}
                useAngle={true}
                angleCenter={{ x: 0.5, y: 0.5}}
                >
                <Text style={styles.buttonText}>
                    {props.name}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}


export default LightButton


const styles = StyleSheet.create({
    button:{
        alignSelf:'center',
        width:'100%',
    },
    
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginVertical:5,
        width:'100%',
        paddingVertical:3,
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