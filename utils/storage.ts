import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (storageKey: string, value: string) => {
    try {
        await AsyncStorage.setItem(
            storageKey,
            value,
        );
    } catch (error) {
        // Error saving data
        console.error('Error saving item' + value + 'on' + storageKey);
    }
}


export const getData = async (storageKey: string) => {
    try {
        // TO CHECK: need to add @ at the beginning ?
        const jsonValue = await AsyncStorage.getItem(storageKey)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
        console.error('Error reading item on' + storageKey);

    }
}
