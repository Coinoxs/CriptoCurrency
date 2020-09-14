
import React,{ useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarWithBackButton from '../components/BarWithBackButton'
import KeyBoardButton from '../components/KeyBoardButton';
import Dot from '../components/dot'



export default function PincodeScreen( ) {
    const [count, setCount] = useState('');
const changeHandler = (e) => {
    setCount(e)
}

const onPressFunction = (count) =>{
    console.log('press', count)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

}

const renderDots = ()=>{
    let dots=[];
    for (let index = 1; index <= 6; index++) {
        dots.push(
            <Dot index={index} length={count.length}/>
        )
        
    }
    return dots;
}

    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center' , paddingBottom:50}}>
            <BarWithBackButton/>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:200 }} 
            onChangeText={(e) => changeHandler(e)}
            />
            <KeyBoardButton name={count} onPressFunction={() => onPressFunction(count) } />
            <KeyBoardButton name={count} />
            <View style={styles.dotContainer}>
            {
                renderDots()
            }</View>
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrapper:{
    paddingBottom:100,
    },
    dotContainer:{
        flexDirection:'row'
    }
})
