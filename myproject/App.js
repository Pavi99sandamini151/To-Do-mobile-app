import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';

export default function App() {
  const [people , setPeople] = useState([
    {name:'shaun' , key:'1'},
    {name:'shaun1' , key:'2'},
    {name:'shaun2' , key:'3'},
    {name:'shaun3' , key:'4'},
    {name:'shaun4' , key:'5'},
    {name:'shaun5' , key:'6'},
    {name:'shaun6' , key:'7'},
  ]);
  

  

  return (
    <View style={styles.container}> 
      <ScrollView>
      {people.map((item)=>(
        
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        
      ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});
