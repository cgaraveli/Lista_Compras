import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lista de Compras"
          component={HomeScreen}
          options={{ headerStyle: { backgroundColor: '#4CAF50' }, headerTintColor: '#fff' }}
        />
        <Stack.Screen
          name="Adicionar"
          component={AddItemScreen}
          options={{ title: 'Adicionar Item', headerStyle: { backgroundColor: '#4CAF50' }, headerTintColor: '#fff' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={ItemDetailScreen}
          options={{ title: 'Detalhes do Item', headerStyle: { backgroundColor: '#4CAF50' }, headerTintColor: '#fff' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
