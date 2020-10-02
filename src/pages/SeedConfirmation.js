import React, {useEffect, useState}from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Dimensions,FlatList, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import LightButton from '../components/LightButton';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import SInfo from 'react-native-sensitive-info';
import WalletCreated from './WalletCreated'
import PassiveLightButton from '../components/PassiveLightButton';
import LinearGradient from 'react-native-linear-gradient';
import Exclamation from 'react-native-vector-icons/AntDesign';


const screenWidth = Math.round(Dimensions.get('window').width)


export default function SeedConfirmation( ) {

    const [isSeedMacth, setisSeedMacth] = useState(false);
    const [isThereError, setisThereError] = useState(false);

    const navigation = useNavigation();
    const seedList = useSelector((state) => state.seedList)
    const dispacth = useDispatch();
    const seedNumber = useSelector((state) => state.seedNumber)
    const suffledSeedList = useSelector((state) => state.suffledSeedList)
    const [seedConfirmList, setseedConfirmList] = useState([]);
    const originalSuffledSeedList = useSelector((state) => state.originalSuffledSeedList)
    const STORAGE_KEY = "@seed_key"
    
    const _suffledToConfirm = (x) =>{
        const newList = suffledSeedList.filter((item) => item.id !== x.id);
 
        dispacth({
            type:'SUFFLEDSEEDLIST',
            payload:newList
          })

          
          let confirmList = seedConfirmList
          confirmList.push(x)
          setseedConfirmList(confirmList)
    }
    const _confirmToSuffled = (x) =>{
        setisThereError(false)
        const newList = seedConfirmList.filter((item) => item.id !== x.id);
 
        setseedConfirmList(newList)
        setisSeedMacth(true)
          let suffledList = suffledSeedList
          suffledList.push(x)
          dispacth({
            type:'SUFFLEDSEEDLIST',
            payload:suffledList
          })
    }
    const Indicator = () => {
        return(
            <View style={{width:'100%',height:130, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator size="large" color="white" />
            </View>
        )
    }
    
 const _handleSuffle = (seedNumber) =>{
    let suffledList = []
    let originalList = seedList
    let usedNumber=[]

    for( let i=originalList.length;  originalList.length - usedNumber.length  > 0; i--){
        
        let rndmSayi = Math.floor((Math.random() * seedNumber) + 1)
        
            if(usedNumber.indexOf(rndmSayi) > -1){
    
            }else{
            suffledList.push(originalList[rndmSayi-1])
            
            usedNumber=[... usedNumber, rndmSayi]
            
            }
       
    }
    dispacth({
        type:'SUFFLEDSEEDLIST',
        payload:suffledList
      })
      dispacth({
        type:'ORIGINALSUFFLEDSEEDLIST',
        payload:suffledList
      })
      setseedConfirmList([])

 }
    const _confirmationHandler = () => {
        console.log('originallist', seedList)
        console.log('user entry', seedConfirmList)
        
        
        
        for (let index = 0; index < seedNumber; index++) {
                console.log(seedList[index])
                console.log(seedConfirmList[index])
                if(seedList[index] == seedConfirmList[index]){
                    console.log('originallist eşit', seedList[index])
                    console.log('user entry eşit', seedConfirmList[index])
                }else if(seedList[index] !== seedConfirmList[index]){
                    console.log('originalsuffledlist',originalSuffledSeedList)
                    
                      setisSeedMacth(false)
                      setisThereError(true)
                    return;
                }
        }
            setisSeedMacth(true)
            _storeData(JSON.stringify(seedList))
    }
   
    
 const _storeData = async (seeds) => {
        try {
          await SInfo.setItem( STORAGE_KEY, seeds, {} );
            alert("data succesfully saved")
            navigation.navigate("SecurityWarning")
          
        } catch (error) {
          alert('Failed to save the data to the storage')
        }
      }
   
useEffect (() => {
    _handleSuffle(seedNumber)

  },[])
  
    return (
        <SafeAreaView style={styles.safeArea}>
            <BarWithBackButton />
            <View style={styles.container}>
                <Text style={styles.seedText}>Seed Confirm</Text>
                <Text style={styles.seedDescriptionText}>Lorem ipsum dolar sit amet. asdasddasdasdas
                sdlamwşdlkmawş dfasdas
                </Text>

                {
                    seedConfirmList == 0 ? 
                    <View style={{ width:'100%', alignItems:"center", backgroundColor:'#343770', height:125, borderRadius:5}}>
                    </View> 
                    :

                    isThereError ?
                    <View>
                        <View style={{borderRadius:5, overflow:"hidden"}}>
                            <LinearGradient
                                    colors={['#F06D6D',  '#FFCAD7']}
                                    style={styles.linearGradient}
                                    angle={45}
                                    useAngle={true}
                                    angleCenter={{ x: 0.5, y: 0.5}}
                                    >
                                    <FlatList
                                        contentContainerStyle={{ width:'99%', alignItems:"center", alignSelf:"center",
                                        backgroundColor:'#2A0C27', height:130, borderRadius:5, margin:1}}
                                        numColumns={6}
                                        keyExtractor={(item) => item.id}
                                        data={seedConfirmList}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity onPress={() => { _confirmToSuffled(item)}}>
                                                <View style={styles.tuslarSmaall}>
                                                    <Text style={styles.tuslarTextSmall} >{item.id + "  " +item.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                    />
                                </LinearGradient>
                        </View>
                        <View style={{flexDirection:"row",marginVertical:10}}>
                            <View style={styles.exclamation}>
                                <Exclamation name="exclamation" size={20} color="white"   />
                            </View>    
                            <Text style={{color:'white', marginLeft:5}}>Duis aute irure dolor in reprehenderit in voluptate.</Text>
                        </View>
                    </View>
                    :
                    <View style={{borderRadius:5, overflow:"hidden"}}>
                        <LinearGradient
                            colors={['#DA6BF7',  '#5F6DF5']}
                            style={styles.linearGradient}
                            angle={45}
                            useAngle={true}
                            angleCenter={{ x: 0.5, y: 0.5}}
                            >
                            <FlatList
                                contentContainerStyle={{ width:'99.5%', alignItems:"center", alignSelf:"center",
                                backgroundColor:'#343770', height:129, borderRadius:5, marginVertical:1,}}
                                numColumns={6}
                                keyExtractor={(item) => item.id}
                                data={seedConfirmList}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => { _confirmToSuffled(item)}}>
                                        <View style={styles.tuslarSmaall}>
                                            <Text style={styles.tuslarTextSmall} >{item.id + "  " +item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </LinearGradient>
                    </View>
                    
                }

                {
                <FlatList
                    contentContainerStyle={{ width:'100%', alignItems:"center"}}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                    data={suffledSeedList}
                    style={styles.flatList}
                    ListEmptyComponent={seedConfirmList.length == seedNumber ? null : Indicator}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { _suffledToConfirm(item)}}>
                            <View style={styles.tuslar}>
                                <Text style={styles.tuslarText} >{item.id + "  " +item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                /> 
                    }
                    {
                        seedConfirmList.length < seedNumber ? 
                        <PassiveLightButton  name="CHECK" /> 
                        :
                        isThereError ?
                        <LightButton name="GET NEW SEED" navigate="SeedScreen" />
                        :
                        <LightButton name="CHECK" onPressFunction={_confirmationHandler}
                        />
                    }
                
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
        marginBottom:5,
    },
    seedDescriptionText:{
        color:'white',
        fontSize:14,
        fontFamily: 'SofiaProLight',
        width:'90%',
        marginBottom:20
    },

    flatList:{
        width:'100%',
        marginBottom:40
    },

    tuslar:{
        width:screenWidth * 3.5 / 12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#343770',
        margin:3,
        borderRadius:5,
        height:screenWidth / 12,
        marginVertical:10,
    },
    tuslarText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        textTransform:'capitalize',
        fontFamily: 'SofiaProLight',

    },
    tuslarSmaall:{
        width:screenWidth / 7,
        alignItems:'center',
        justifyContent:'center',
        margin:1,
        borderRadius:5,
        height:screenWidth / 14,
        fontFamily: 'SofiaProLight',

    },
    tuslarTextSmall:{
        fontSize:10,
        fontWeight:'bold',
        color:'white',
        textTransform:'capitalize',
        fontFamily: 'SofiaProLight',

    },

    exclamation:{
        backgroundColor:'red', 
        width:20, 
        height:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
})