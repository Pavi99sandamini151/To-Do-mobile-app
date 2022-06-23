import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , FlatList, Alert , TouchableWithoutFeedback , Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text:'Create react native project' , key:'1'},
    {text:'create to do app' , key:'2'},
    {text:'play on the swith' , key:'3'},
    {text:'do another thing in react natvie' , key:'4'}
  ]);
  
  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
      if(text.length > 3)
      {
        setTodos(prevTodos => {
          return [
            { text:text, key: Math.random().toString() },
            ...prevTodos
          ];
        });
      }else{
        Alert.alert('OOPS!' , 'TODOS MUST BE 3 CHARS LONG' , [
          {text:'understood' , onPress:() => console.log('alert closed')}
        ]);
      }
      
   
    
  };

  return (
      <TouchableWithoutFeedback  onPress={()=> {
        Keyboard.dismiss();
        console.log('Dismissed Keyboard');
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
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
  content:{
    padding:40,

  },
  list:{
    marginTop:20,
  }
  
});
