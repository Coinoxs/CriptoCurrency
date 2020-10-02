//This is an example code for ViewPager//
import React ,{useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Dimensions, FlatList } from 'react-native';
import ArrowBack from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'



const screenWidth = Math.round(Dimensions.get('window').width)

export default function KeyboardForPins() {

    
    const [password, setPassword] = useState('');
    const [isPinTrue, setIsPinTrue] = useState(true);
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

    return (
        <FlatList
            contentContainerStyle={{alignItems:"center",height:'90%', width:'100%',
            justifyContent:"space-evenly" }}
            numColumns={3}
            keyExtractor={(item) => item.key}
            data={numbers}
            style={styles.flatList}
            renderItem={({ item }) => (
                item.number == '.' ?
                <TouchableOpacity key={item.key} style={[styles.tuslar, {backgroundColor: item.number == '.' ? '#0F0A28' : '#343770'} ]} >
                    <Text style={styles.tuslarText} >{item.number == '.' ? '' : item.number}</Text>
                </TouchableOpacity>
                :
                item.key == 12 ?
                <TouchableOpacity style={[styles.tuslar, {backgroundColor: item.number == '.' ? '#0F0A28' : '#343770'} ]}
                    key={item.key} onPress={() => { clickHandler(item)}} >
                    <ArrowBack name="keyboard-backspace" size={20} color="white"   />
                </TouchableOpacity>
                :
                <TouchableOpacity style={[styles.tuslar, {backgroundColor: item.number == '.' ? '#0F0A28' : '#343770'} ]}
                    key={item.key} onPress={() => { clickHandler(item)}} >
                    <Text style={styles.tuslarText} >{item.number == '.' ? '' : item.number}</Text>
                </TouchableOpacity>
            )}
        />
    )
}



const styles = StyleSheet.create({
    flatList:{
        width:'100%',
    },
    tuslar:{
        width:screenWidth * 3.5 / 12,
        alignItems:'center',
        justifyContent:'center',   
        height:60,
        backgroundColor:'#343770',
        borderRadius:20,
        margin:4,
    },
    tuslarText:{
        fontSize:20,
        color:'white',
        fontFamily: 'SofiaProLight',
    },
})









