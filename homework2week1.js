import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const buttonPressed = () => {
    Alert.alert('You typed: ' + text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Guess a number between 1-100</Text>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <Button style={styles.button} onPress={buttonPressed} title="Make guess" />
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
    flexDirection: 'column',
  },
  input: {
    fontSize: 25,
    width: 200,
    borderColor: 'gray',
    borderWidth: 2,
    textAlign: 'center',
    paddingVertical: 10,
  },
  texts: {
  fontSize: 25,
  paddingVertical: 10,
  },
  button: {
  margin: 10,
  }
});
