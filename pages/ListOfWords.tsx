import {Alert, Button, FlatList, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {getData, storeData} from "../utils/storage";
import {LIST_OF_ALL_WORDS} from "../const/storageKeys";

type WordItem = {
    name: string;
}

export default function ListOfWords() {

    const [listOfWords, setListOfWords] = useState<WordItem[]>([]);
    const [newWord, setNewWord] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            const savedWords = await getData(LIST_OF_ALL_WORDS)
            if (savedWords) {
                setListOfWords(savedWords);
            }
        }

        fetchData().catch((error: string) => {
            console.error('Error fetching data ' + error);
        });
    }, [])

    const addWord = async () => {
        if (newWord.length > 0) {
            const updatedListOfWords = [...listOfWords, {name: newWord + '🌊'}];
            setListOfWords(updatedListOfWords);
            await storeData(LIST_OF_ALL_WORDS, JSON.stringify(updatedListOfWords));
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

