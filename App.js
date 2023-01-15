import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Open up App.js right now to start working on your app!</Text>
      <TextInput style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'red', backgroundColor: 'grey'}} onChangeText={newText => setText(newText)} placeholder={'Entrez le texte ici'} />
      {text &&
          <Text>🚀 {text} 🚀</Text>
      }
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
    borderStyle: "solid",
    borderColor: 'black'
  },
});
