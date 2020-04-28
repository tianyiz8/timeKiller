import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput, Button, Alert } from 'react-native';
import Header from './components/Header'
export default function App() {
  const [currentNumber, setNumber] = useState(0);
  const [currentState, setState] = useState(false);
  const [enteredValue, setEnteredValue] = useState('')
  const [count, countIncrement] = useState(0)

  const generateNumber = () => {
    return Math.floor(Math.random() * 100) + 1 ;
  }

  const getNumber = () => {
    setEnteredValue("");
    let theNumber = generateNumber();
    setNumber(theNumber)
    setState(true)
    Alert.alert('A random number between 0 and 99 has been set.')
  }

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const checkValue = () => {
    if (!currentState) {
      Alert.alert('Get a number first!')
      setEnteredValue('')
      return;
    }
    const checkNumber = parseInt(enteredValue)
    if (checkNumber === currentNumber) {
      Alert.alert('You got the number in ' + (count + 1) + ' rounds!')
      setNumber(0)
      setEnteredValue("")
      setState(false)
      countIncrement(0)
    } else if (checkNumber < currentNumber) {
      countIncrement(count + 1)
      Alert.alert('Guess Higher!')
      setEnteredValue("")
    } else if (checkNumber > currentNumber){
      countIncrement(count + 1)
      Alert.alert('Guess Lower!')
      setEnteredValue("")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
      <Header title="Guessing Number"></Header>
      <View style = {styles.content}>
        <Text style={{fontSize: 30}}>Lets start Guessing!!</Text>
        <View style={styles.shadow}>
           <Text>Make your Guess!</Text>
           <TextInput 
           style = {styles.input} 
           blurOnSubmit 
           maxLength={2}
           keyboardType="number-pad"
           onChangeText={numberInputHandler}
           value={enteredValue}
           ></TextInput>
           <View style={styles.buttons}>
             <Button title="GUESS" onPress={checkValue}/>
           </View>
           <View style = {styles.buttons}>
             <Button title="Get new number" color='red' onPress={getNumber}/>
           </View>
        </View>
        </View>
      </View>
    </ TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderBottomEndRadius:2,
    height: 20,
    marginVertical: 40,
    width: 50,
    textAlign: 'center'
  },
  buttons: {
    marginVertical:10,
    height: 30,
    width: 180
  },
  shadow: {
    elevation: 8,
    borderRadius: 5,
    width: 300,
    height: 300,
    alignItems: 'center',
    marginTop: 20,
    padding: 30
  },
  content: {
    flex: 8,
    alignItems:'center',
    marginVertical: 40,
    padding: 10
  },
});
