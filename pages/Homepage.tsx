import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {NavigationProp} from "@react-navigation/native";

type HomepageProps = {
    navigation: NavigationProp<any>
}

export default function Homepage({navigation}: HomepageProps) {
    const [text, setText] = useState<string>('');


    const onPressButton = () => {
        Alert.alert('Bouton appuyé');
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.js right now to start working on your app!</Text>
            <TextInput style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'red', backgroundColor: 'grey'}}
                       onChangeText={newText => setText(newText)} placeholder={'Entrez le texte ici'}/>
            {text &&
                <Text>🚀 {text} 🚀🍕</Text>
            }
            
            <Button title={'Joli bouton ! ✨'} onPress={() => {
                console.log('On a appuyé sur le joli bouton !');
                onPressButton();
            }}/>

            <Button title={'Liste des mots'} onPress={() => navigation.navigate('List of words')} />
            <StatusBar style="auto"/>
        </View>
    )
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