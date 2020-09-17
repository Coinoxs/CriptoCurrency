import React,{ useEffect, useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,TextInput , FlatList, Dimensions, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import KeyBoardButton from '../components/KeyBoardButton';
import Dot from '../components/dot'
import  AsyncStorage  from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import ConfirmPincode from './ConfirmPincode';
import LogButton from '../components/Button';
import {useSelector,useDispatch} from 'react-redux'




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
    
    const closeModal = (text) =>{
        setModalVisible(text);
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
                <Dot index={index} length={password.length}/>
            )
            
        }
        return dots;
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center' , paddingBottom:50}}>
            <Modal
            animationType="none"
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(false);
            }}>
                <ConfirmPincode closeModal={closeModal} />
            </Modal>
            <BarWithBackButton/>
            <Text>DEFINE PIN-CODE</Text>
            <Text style={{backgroundColor:'pink', width:100, height:20}}>{password}</Text>
            <View style={styles.dotContainer}>
            {
                renderDots()
            }
            </View>
            <FlatList
                contentContainerStyle={{alignItems:"flex-end"}}
                numColumns={3}
                keyExtractor={(item) => item.key}
                data={numbers}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { clickHandler(item) }} >
                        <View style={styles.tuslar}>
                            <Text style={styles.tuslarText} >{item.number}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <LogButton name='ENTER'  onPressFunction={_enterPincode}/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    },
    dotContainer:{
        flexDirection:'row'
    },
    tuslar:{
        width:screenWidth/3,
        alignItems:'center',
        justifyContent:'center',   
        height:60,

    },
    tuslarText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#717171',
    },
})
