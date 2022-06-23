import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text , TouchableOpacity , View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons/Ionicons';

export default function TodoItem({item , pressHandler}){
    return(
        
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
            </View>
            <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({
    text:{
        padding:16,
        marginTop: 16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10,
    }
})