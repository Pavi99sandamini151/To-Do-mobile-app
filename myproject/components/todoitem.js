import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text , TouchableOpacity , View } from 'react-native';

export default function TodoItem(item , pressHandler){
    return(
        <View>
        {/* <TouchableOpacity onPress={() => pressHandler(item.key)}> */}
            <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop: 16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    },
})