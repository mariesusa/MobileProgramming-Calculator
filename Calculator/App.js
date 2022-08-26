import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const plusPressed = () => {
    setResult(parseInt(number1) + parseInt(number2))
  }

  const minusPressed = () => {
    setResult(parseInt(number1) - parseInt(number2))
  }

  return (
    <View style={styles.container}>
      
    <Text style={{ fontSize: 18}}>
      Result: { result }
      </Text>

    <TextInput 
    style={styles.input}
    keyboardType= 'numeric'
    onChangeText={number1 => setNumber1 (number1)}
    value={number1}
    />
    
    <TextInput 
    style={styles.input}
    keyboardType= 'numeric'
    onChangeText={number2 => setNumber2 (number2)}
    value={number2}
    />
    
    <View style={styles.button}>
      <Button onPress={plusPressed} title=' + ' />
      <Button onPress={minusPressed} title=' - ' />
      </View>

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
input : {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
button : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginRight: 4,
    marginLeft: 4
}

});
