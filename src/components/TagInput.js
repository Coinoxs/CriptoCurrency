import React, {useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,TextInput } from 'react-native';
import Tag from './Tag'

export default function TagInput() {
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');

    let tagList = tags.map((tag) =>{
        return <Tag name={tag} key={tag}/>
    })
    const onKeyPress = (e) => {
        if (e.nativeEvent.key == " "){
            
            if(tag.length === 0 || tag[0]=== " ") return;
            if(tags.indexOf(tag.trim()) !== -1){
                setTag("")
                console.log('aynı', tags.indexOf(tag))
                return;
            }else if(tags.indexOf(tag.trim()) == -1){
                let newTags=tags
            newTags.push(tag.trim())
            setTags(newTags)
            setTag("")
            console.log('aynı değil', tags.indexOf(tag))
            }
            
        }
        console.log(tags)
    }

    const handleChange = (e) =>{
        setTag(e)
    }

    return(
        <View style={styles.outer} >
            <View >{tagList}</View>
            <TextInput type="text" placeholder="asd" onKeyPress={(e) => onKeyPress(e)} onChangeText={(e) => handleChange(e)}
            value={tag} />
        </View>
    )
}





const styles = StyleSheet.create({
    outer:{
       flexDirection:'row',
       alignItems:'center',
       width:'100%'
    }
    
  })