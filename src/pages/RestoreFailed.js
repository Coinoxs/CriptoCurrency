import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import LightButton from '../components/LightButton';


export default function RestoreFailed(props) {
   const closeModalText = 'false'

   const CloseModal = () => {
    props.closeModal(closeModalText)
   }


    
    return (
         <View style={styles.outerView} onTouchEnd={() => 
            props.closeModal(closeModalText)}>
            <View style={styles.gradientContainer} onTouchEnd={(e) => e.stopPropagation()}>
                <View style={styles.container}>
                <Text style={styles.header}>Attention</Text>
                <Text style={styles.header2}>The words entered are not recovery phrases. 
                Check the input is correct and try again
                </Text>
                <View style={{width:'55%', alignSelf:'center'}}>
                <LightButton name="OK" onPressFunction={() => CloseModal()}/>
                </View>
                </View>
            </View>
        </View>


)
}


const styles = StyleSheet.create({
    outerView:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(15, 10, 40,0.9)'
    },

    gradientContainer:{
        height:'30%',
        width:'90%',
        borderRadius:20,
        backgroundColor:'#0F0A28',
        overflow:'hidden',   
    },
    header:{
        color:'white',
        fontSize:22,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:10,
        marginTop:10,
  
    },
    header2:{
        color:'white',
        width:'80%',
        fontFamily: 'SofiaProLight',
        fontSize:16,
        textAlign:"center",
        marginBottom:30,
        alignSelf:'center',
  
    },
})

