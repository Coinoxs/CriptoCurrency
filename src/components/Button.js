
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const LogButton = (props ) => {
    const navigation = useNavigation();

    const PressHandler = () => {
        console.log(props)
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
            <LinearGradient
                colors={['#127251',  '#00CC66']}
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


export default LogButton


const styles = StyleSheet.create({
    
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginVertical:5,
        width:300,
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
  })