import React,{ useEffect, useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,TextInput , FlatList, Dimensions, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import KeyBoardButton from '../components/KeyBoardButton';
import Dot from '../components/dot'
import { useNavigation } from '@react-navigation/native';
import ConfirmPincode from './ConfirmPincode';
import LightButton from '../components/LightButton';
import {useSelector,useDispatch} from 'react-redux';
import BackIcon from 'react-native-vector-icons/MaterialIcons';





const screenWidth = Math.round(Dimensions.get('window').width)

export default function DefinePincode( ) {
    

    const STORAGE_KEY = '@pincode'
    const [modalVisible, setModalVisible] = useState(false);
    const [password, setPassword]=useState('');
    const navigation = useNavigation();
    const dispacth = useDispatch(); 
    const enteredPin = useSelector((state) => state.enteredPin)
    const numbers = [
        {number:1, key:1},
        {number:2, key:2},
        {number:3, key:3},
        {number:4, key:4},
        {number:5, key:5},
        {number:6, key:6},
        {number:7, key:7},
        {number:8, key:8},
        {number:8, key:9},
        {number:'.', key:10},
        {number:0, key:11},
        {number:'<-', key:12},
    ]
    

    const _enterPincode = () => {
        if(password.length === 6){
            dispacth({
                type:'ENTEREDPIN',
                payload:password
              })
            navigation.navigate("ConfirmPincode")
        }
        
    }
    

    const clickHandler = (item) => {
        if(password.length > 5 && item.key !== 12){
            return;
            
        }else if(password.length > 0 && item.key === 12 ){
            
            setPassword(password.substring(0, password.length - 1))
            
        }else if(item.key != 12 ){
            
            setPassword(password + item.number)
            
        }else{

        }
    }


    const renderDots = ()=>{
        let dots=[];
        for (let index = 1; index <= 6; index++) {
            dots.push(
                <Dot key={index} index={index} length={password.length}/>
            )
            
        }
        return dots;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
        <BarWithBackButton/>
        <View style={styles.container}>
            <Text style={styles.enterPincodeText}>Enter pin-code</Text>
            <View style={styles.dotContainer}>
            {
                renderDots()
            }
            </View>
            <FlatList
                contentContainerStyle={{alignItems:"center",height:'90%', width:'100%',
            justifyContent:"space-evenly" , }}
                numColumns={3}
                keyExtractor={(item) => item.key}
                data={numbers}
                style={styles.flatList}
                renderItem={({ item }) => (
                    item.number == '.' ?
                    <View key={item.key} style={[styles.tuslar, {backgroundColor: item.number == '.' ? '#0F0A28' : '#343770'} ]} >
                    </View>
                    :
                    item.key == 12 ?
                    <TouchableOpacity key={item.key} style={[styles.tuslar, {backgroundColor: item.number == '.' ? '#0F0A28' : '#343770'} ]}
                     key={item.key} onPress={() => { clickHandler(item)}} >
                        <BackIcon name="keyboard-backspace" size={25} color="white"   />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity key={item.key} style={[styles.tuslar, {backgroundColor: item.number == '.' ? '#0F0A28' : '#343770'} ]}
                     key={item.key} onPress={() => { clickHandler(item)}} >
                        <Text style={styles.tuslarText} >{item.number == '.' ? '' : item.number}</Text>
                    </TouchableOpacity>
                )}
            />
            <LightButton name='ENTER' onPressFunction={_enterPincode} />
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
    dotContainer:{
        flexDirection:'row',
        alignSelf:"center",
        width:'60%',
        height:15,
        alignItems:'center',
        justifyContent:"space-around",
        marginTop:'30%',
        marginBottom:'10%'
    },
    flatList:{
        width:'100%',
    },

    tuslar:{
        width:screenWidth * 3.43 / 12,
        alignItems:'center',
        justifyContent:'center',   
        height:screenWidth / 6,
        backgroundColor:'#343770',
        borderRadius:20,
        margin:4
    },
    tuslarText:{
        fontSize:20,
        color:'white',
        fontFamily: 'SofiaProLight',
    },
    enterPincodeText:{
        color:'white',
        fontSize:17,
        fontWeight:'bold',
        fontFamily: 'SofiaProLight',

    }
})
