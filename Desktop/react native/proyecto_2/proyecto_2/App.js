import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewPag } from './NewPag';
import { NewPage2 } from './NewPage2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PagPrincipal'>
        <Stack.Screen name="PagPrincipal" component={NewPag} />
        <Stack.Screen name="Carrito" component={NewPage2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

