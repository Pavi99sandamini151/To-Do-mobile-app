import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default function App() {
  const [name,setName] = useState('pavi');
  const [age,setAge] = useState('30');
  

  

  return (
    <View style={styles.container}> 
      <Text>Enter name:</Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g. John Doe'
      onChangeText={(val)=> setName(val)}
      />

      <Text>Enter age:</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g. 99'
      onChangeText={(val)=> setAge(val)}
      />
      <Text>name: {name} , age:{age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
  
});
