import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'


const Slider = (props) => {
    return(
      <View style={styles.slideouter}>
          <Image style={[styles.logoStyle, props.logoStyle]} source={props.logoSource} />
          {
            props.headerText ? 
            <Text style={styles.header}>{props.headerText}</Text>
            :
            null
          }
          {
            props.description ?
            <Text style={styles.header2}>{props.description}</Text>
            :
            null
          }
          
      </View>
    )
  }

  export default Slider


  const styles = StyleSheet.create({
    
    slideouter:{
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
    logoStyle:{
      height:250,
      width:250,
      marginBottom:20
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
        fontSize:16,
        textAlign:"center",
        marginBottom:30,
    },
  })