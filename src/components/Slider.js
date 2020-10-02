import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'


const Slider = (props) => {
    return(
      <View style={styles.slideouter}>
          <Image style={styles.logoStyle} source={require('../assets/Images/vaultX.png')} />
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
      height:200,
      width:200,
    },

  })