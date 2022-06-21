import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , FlatList , TouchableOpacity} from 'react-native';

export default function App() {
  const [people , setPeople] = useState([
    {name:'shaun' , id:'1'},
    {name:'shaun1' , id:'2'},
    {name:'shaun2' , id:'3'},
    {name:'shaun3' , id:'4'},
    {name:'shaun4' , id:'5'},
    {name:'shaun5' , id:'6'},
    {name:'shaun6' , id:'7'},
  ]);
  
  const pressHandler = (id)=>{
    console.log(id);
    setPeople((prevPeople)=> {
      return prevPeople.filter(person=> person.id != id)
    })

  }
  

  return (
    <View style={styles.container}> 

      <FlatList
        numColumns={2}
        keyExtractor={(item)=> item.id}
        data={people}
        renderItem={({ item })=> (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} 
      />

      {/* <ScrollView>
      {people.map((item)=>(
        
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        
      ))}
      </ScrollView> */}
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
