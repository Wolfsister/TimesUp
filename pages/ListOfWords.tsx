import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function ListOfWords() {
    return (
        <View style={styles.container}>
            <Text>Page de test avec la liste des mots</Text>

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