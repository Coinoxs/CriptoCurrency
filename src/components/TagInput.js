import React, {useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,TextInput } from 'react-native';
import Tag from './Tag'
import {useSelector,useDispatch} from 'react-redux'


export default function TagInput(props) {
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');
    const restoreList = useSelector((state) => state.restoreList)
    const dispacth = useDispatch();
    

   

    
    
    const onKeyPress = (e) => {
        if (e.nativeEvent.key == " "){
            
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
            
        }
        console.log(restoreList)
    }

    const handleChange = (e) =>{
        setTag(e)
    }

    return(
        <View style={styles.outer} >
            <TextInput style={styles.input} type="text" placeholder="asd" onKeyPress={(e) => onKeyPress(e)} onChangeText={(e) => handleChange(e)}
            value={tag} />
        </View>
    )
}





const styles = StyleSheet.create({
    outer:{
       width:'100%'
    },
    input:{

    }
    
  })