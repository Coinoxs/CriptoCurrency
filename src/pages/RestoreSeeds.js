import React, {useEffect, useState}from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Dimensions,FlatList,TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import DarkButton from '../components/DarkButton';
import {useSelector,useDispatch} from 'react-redux'
import TagInput from '../components/TagInput'
import { useNavigation, CommonActions } from '@react-navigation/native';
import SInfo from 'react-native-sensitive-info';
import LinearGradient from 'react-native-linear-gradient';
import BottomText from '../components/BottomText';




const screenWidth = Math.round(Dimensions.get('window').width)
const STORAGE_KEY = '@seed_key'

export default function RestoreSeeds( ) {
    const navigation = useNavigation();
    const dispacth = useDispatch(); 
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');
    const seedList = useSelector((state) => state.seedList)
    const seedNumber = useSelector((state) => state.seedNumber)
    const restoreList = useSelector((state) => state.restoreList)
    const [isTouched, setIsTouched] = useState(false);
    

    const _retrieveData = async () => {
        console.log(restoreList)
        try {
          const value = await SInfo.getItem( STORAGE_KEY, {});
          if (value !== null) {
            // We have data!!
            let jsonValue = JSON.parse(value)
            dispacth({
                type:'SEEDNUMBERCHANGE',
                payload:jsonValue.length
              })
            dispacth({
                type:'SEEDADD',
                payload:jsonValue
              })
            
          }else{
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: 'WalletCreation',
                  },
                ],
              })
            );
          }
        } catch (error) {
          // Error retrieving data
        }
      };
      const onKeyPress = (e) => {
        if (e.nativeEvent.key == " "){
            if (restoreList.length < seedNumber){
                if(tag.length === 0 || tag[0]=== " ") return;
            if(tags.indexOf(tag.trim()) !== -1){
                setTag("")
                console.log('aynı', tags.indexOf(tag))
                return;
            }else if(tags.indexOf(tag.trim()) == -1){
                let newTags=tags
                let trimmedTag = tag.trim()
            newTags.push(trimmedTag)
            setTags(newTags)
            setTag("")
            let objectSeed = {id:tags.length, name:trimmedTag}
            let reStore = restoreList
            reStore.push(objectSeed)
            dispacth({
                type:'RESTORELIST',
                payload:reStore
            })
                }
            }else{
                alert('you have entered enough seeds')
                setTag("")
            }
        }
        console.log(restoreList)
    }

    const handleChange = (e) =>{
        setTag(e)
        console.log("restore list",restoreList)
        console.log('tags', tags)
    }


    const _confirmationHandler = () => {
        console.log('originallist', seedList)
        console.log('user entry', restoreList)
        
        if (restoreList.length == 0){
            alert("please first enter the seeds then import")
        }else{
            for (let index = 0; index < seedNumber; index++) {
                console.log(seedList[index].name)
                console.log(restoreList[index].name)
                console.log(seedList[index].name == restoreList[index].name)
                if(seedList[index].name == restoreList[index].name){
                    console.log('originallist eşit', seedList[index])
                    console.log('user entry eşit', restoreList[index])
                }else if(seedList[index] !== restoreList[index]){
                    alert("please enter the correct seeds in order")
                    return;
                }
        }
        alert("all seeds are correct")
            navigation.navigate('TabNavigation')
        }
        
    }

    const _onTouchHandler = () => {
        setIsTouched(true)
        dispacth({
            type:'RESTORELIST',
            payload:[]
        })
    }

    const _onPressHandler = (x) =>{

        let i = seedNumber
        let newList = restoreList.splice(0,x.id - 1 )
        let newTagsList =tags.splice(0,x.id - 1)
    
        console.log('new list after', newList)

        dispacth({
            type:'RESTORELIST',
            payload:newList
          })

        setTags(newTagsList)
    }

    useEffect (() => {
        _retrieveData();
        
      },[])
     
    return (
        <SafeAreaView style={styles.safeArea} >
            <BarWithBackButton/>
            <View style={styles.container}>
                <Text style={styles.header}>Restore Wallet</Text>
                {
                    isTouched ?
                    <Text style={styles.header2}>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor.</Text>
                    :
                    <Text style={styles.header2}>Enter 12/24 seed words</Text>
                }
                

                {
                    isTouched ?
                    <View style={styles.linearOuter}>
                        <LinearGradient
                        colors={['#DA6BF7',  '#5F6DF5']}
                        style={styles.linearGradient}
                        angle={45}
                        useAngle={true}
                        angleCenter={{ x: 0.5, y: 0.5}}
                        >
                        <View style={{
                            backgroundColor:'#343770', 
                            width:"99%", 
                            height:"99%", 
                            borderRadius:5,
                            margin:1,
                            alignSelf:"center",
                        }}>
                        <TextInput style={styles.input} 
                        type="text" 
                        onKeyPress={(e) => onKeyPress(e)} 
                        onChangeText={(e) => handleChange(e)}
                        value={tag} 
                        autoFocus={true}
                        />
                        <FlatList
                            contentContainerStyle={{ width:'99.5%', alignItems:"center", alignSelf:"center",
                             height:128,}}
                            numColumns={6}
                            keyExtractor={(item) => item.id}
                            data={restoreList}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.tuslarSmaall} onPress={() => { _onPressHandler(item)}}>
                                    <Text style={styles.tuslarTextSmall} >{item.id + "  " +item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        </View>
                        </LinearGradient>
                    </View>
                    :
                    <TextInput style={styles.outer} onFocus={() => _onTouchHandler()} 
                        type="text"
                        />
                }
                
                
                <DarkButton  name="RESTORE" onPressFunction={_confirmationHandler}/>
                {
                    isTouched ? 
                    null
                    :
                    <BottomText content="Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
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
    header:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5

    },
    header2:{
        color:'white',
        fontSize:16,
        marginBottom:10,
        fontFamily: 'SofiaProLight',


    },
    container:{
        width:'90%',
        alignSelf:'center',
        height:'100%',
        paddingBottom:'25%',
    },
    tuslar:{
        width:screenWidth * 3 / 12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'yellow',
        borderRadius:5,
        height:screenWidth / 12,
        marginVertical:5,
    },
    tuslarText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        textTransform:'capitalize',
        fontFamily: 'SofiaProLight',

    },
    outer:{
        fontSize:20,
        width:'100%', 
        backgroundColor:'#343770', 
        height:'30%', 
        borderRadius:5,
        marginBottom:5,
        textAlignVertical:"top"
    },
    input:{
        fontSize:20,
         width:'98%',
         borderRadius:5,
         color:'white',
         alignSelf:'center',
         marginTop:1,
    },
    flatList:{
        width:'100%',
        marginBottom:40
    },
    inner:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:"space-between"
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
    linearOuter:{
        borderRadius:5, 
        width:'100%', 
        height:'30%', 
        backgroundColor:'yellow', 
        overflow:'hidden',
        marginBottom:10
    },
    linearGradient:{
        height:'100%',
        paddingVertical:1,
    },
    
})