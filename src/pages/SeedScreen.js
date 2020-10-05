import React, {useEffect, useState}from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Dimensions,FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LightButton from '../components/LightButton';
import { randomBytes } from 'react-native-randombytes'
import bip39 from 'react-native-bip39'
import {useSelector,useDispatch} from 'react-redux'
import SeedPassive from '../components/SeedPassive';
import SeedActive from '../components/SeedActive';
import DarkButton from '../components/DarkButton';


const screenWidth = Math.round(Dimensions.get('window').width)

let height = 30
export default function SeedScreen( ) {
    

    const list = []
    const seedList = useSelector((state) => state.seedList)
    const dispacth = useDispatch();
    const seedNumber = useSelector((state) => state.seedNumber)
    const [loaded, setLoaded] = useState(false)

    const seedHandler = (number) => {
        _generateRandomByte(number)
        dispacth({
            type:'SEEDNUMBERCHANGE',
            payload:number
          })
    }

    const _generateRandomByte =  (number) => {
        let i=1;
       
        while(list.length <  number  ) {
            
            let rand = randomBytes(1).toString('hex')
            let Mne = bip39.entropyToMnemonic(rand)
            if(list.indexOf(Mne) !== -1){
                return;
            }else{
                let newMne = Mne.charAt(0).toUpperCase() + Mne.slice(1)
                list.push({id:i,name:newMne})
                i++
            }
        }
        dispacth({
            type:'SEEDADD',
            payload:list
          })
          setLoaded(true)
    }

    const _getNewSeed = (seedNumber) => {
        setLoaded(false)
        _generateRandomByte(seedNumber)
    
    }
    

   
useEffect (() => {
    _generateRandomByte(12)

  },[])
  
    return (
        <SafeAreaView style={styles.safeArea}>
            <BarWithBackButton/>
            <View style={styles.container}>
                <Text style={styles.seedText}>Seed</Text>
                <Text style={styles.seedDescriptionText}>Lorem ipsum dolar sit amet. asd asddasd asdas
                sdlamwşdlkmawş dfasdas
                </Text>

                <View style={styles.seedNumberContainer}>
                {
                    seedNumber === 12 ? 
                    (<SeedActive name="12 words" onPressFunction={() => seedHandler(12)}/>) : 
                    (<SeedPassive name="12 words" onPressFunction={() => seedHandler(12)}/>)
                }
                {
                    seedNumber === 12 ? 
                    (<SeedPassive name="24 words" onPressFunction={() => seedHandler(24)}/>) : 
                    (<SeedActive name="24 words" onPressFunction={() => seedHandler(24)}/>)
                }   
                    
                </View>

                {
                    loaded ?
                    <FlatList
                        contentContainerStyle={{ width:'100%', alignItems:"center"}}
                        numColumns={3}
                        keyExtractor={(item) => item.id}
                        data={seedList}
                        style={styles.flatList}
                        renderItem={({ item }) => (
                            <View style={styles.tuslar}>
                                <Text style={styles.tuslarText} >{item.id + "  " +item.name}</Text>
                            </View>
                        )}
                    />      
                    :
                    <View style={{width:'100%',height:'60%', alignItems:'center', justifyContent:'center'}}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                    

                }
                
            
            <LightButton  name="CONTINUE" navigate="SeedConfirmation"/>
            <DarkButton name='GET NEW SEEDS' onPressFunction={() => _getNewSeed(seedNumber)}/>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    safeArea:{
        width:'100%',
        height:'100%',
        backgroundColor:'#0F0A28',
    },
    container:{
        width:'90%',
        alignSelf:'center',
        height:'100%',
        paddingBottom:'25%',
    },
    seedNumberContainer:{
        flexDirection:'row',
        borderRadius:5,
        width:'70%',
        overflow:'hidden',
        marginTop:5,
        marginBottom:30,
    },
    seedText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
    },
    seedDescriptionText:{
        color:'white',
        fontSize:14,
        fontFamily: 'SofiaProLight',
        width:'90%',
        marginBottom:5,
    },

    flatList:{
        width:'100%',
    },

    tuslar:{
        width:screenWidth * 3.43 / 12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#343770',
        margin:3,
        borderRadius:5,
        height:screenWidth / 10,
        marginVertical:10,
    },
    tuslarText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        fontFamily: 'SofiaProLight',

    },
})