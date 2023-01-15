import Homepage from "./pages/Homepage";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ListOfWords from "./pages/ListOfWords";

const Stack = createNativeStackNavigator();

//TODO: add eslint
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Homepage}
                  options={{title: 'Welcome'}}
              />
              <Stack.Screen name="List of words" component={ListOfWords} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

