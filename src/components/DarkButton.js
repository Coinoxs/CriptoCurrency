
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const DarkButton = (props ) => {
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
            <LinearGradient
                colors={['#DA6BF7',  '#5F6DF5']}
                style={styles.linearGradient}
                angle={45}
                useAngle={true}
                angleCenter={{ x: 0.5, y: 0.5}}
                >
                <View style={styles.darkPart}>
                    <Text style={styles.buttonText}>
                        {props.name}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}


export default DarkButton


const styles = StyleSheet.create({
    button:{
        alignSelf:'center',
        width:'100%'
    },
    
    linearGradient: {
        borderRadius: 5,
        marginVertical:5,
        width:'100%',
        paddingVertical:1,
        paddingHorizontal:1,
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
      darkPart:{
        width:'100%',
        backgroundColor:'#0E0C2A',
        alignSelf:'center',
        borderRadius:5,
        paddingVertical:3,
       
      },
  })