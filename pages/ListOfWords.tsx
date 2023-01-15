import {Alert, Button, FlatList, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";

type WordItem = {
    name: string;
}

export default function ListOfWords() {

    const [listOfWords, setListOfWords] = useState<WordItem[]>([]);
    const [newWord, setNewWord] = useState<string>('');
    useEffect(() => {
        setListOfWords(LIST_OF_WORDS.map((word: string) => {
            return {
                name: word + '🤘'
            }
        }));
    }, [])

    const addWord = () => {
        if (newWord.length > 0) {
            setListOfWords([...listOfWords, {name: newWord + '🌊'}]);
            setNewWord('');
        } else {
            Alert.alert('Merci de choisir un nom');
        }
    }

    return (
        <View>
            <FlatList data={listOfWords}
                renderItem={({item}) => (
                    <Text>
                        {item.name}
                    </Text>
                    )} />
            <TextInput
                onChangeText={(text) => setNewWord(text)}
                placeholder={'Nom de personnage à ajouter'}
                value={newWord}
            />
            <Button title={'Ajouter un personnage'} onPress={addWord}></Button>
        </View>
    )
}

const LIST_OF_WORDS = [
    'Jimi Hendrix',
    'Jimmy Page'
];
