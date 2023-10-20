import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Appearance } from 'react-native';
import Home from './src/page/Home';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/routes/Route';
import {useFonts} from "expo-font"

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'garamon': require("./assets/font/garamond/CormorantGaramond-Regular.ttf")
  })

  // Appearance.setColorScheme("dark")

  return (
    <NavigationContainer >

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='main' component={Route} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

