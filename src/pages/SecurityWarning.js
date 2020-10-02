import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, SafeAreaView, Image } from 'react-native';
import BottomText from '../components/BottomText';
import LightButton from '../components/LightButton';



export default function SecurityWarning() {
    return(
        <SafeAreaView style={styles.outer}>
            <View style={styles.container}>
                <Image style={styles.logoStyle} source={require('../assets/Images/securitywarning.png')} />
                <Text style={styles.header}>Security warning</Text>
                <Text style={styles.header2}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit
                </Text>
                <LightButton name="I AGREE" navigate="TabNavigation"/>
                <BottomText  content="Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
            </View>
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    outer:{
        backgroundColor:'#0F0A28',
        height:'100%',
        width:'100%',
        justifyContent:"center"
    },
    container:{
        width:'90%',
        alignSelf:'center',
        height:'50%',
        alignItems:"center",
        justifyContent:"center"
    },
    header:{
        color:'white',
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:10,
        marginTop:10,

    },
    header2:{
        color:'white',
        width:'80%',
        fontFamily: 'SofiaProLight',
        fontSize:15,
        textAlign:"center",
        marginBottom:30,

    },
  })