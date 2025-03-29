import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import PlayersScreen from '../screens/PlayersScreen';
import PlayerDetailScreen from '../screens/PlayerDetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#6200ea' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Equipos de LaLiga' }} />
        <Stack.Screen name="Players" component={PlayersScreen} options={{ title: 'Jugadores' }} />
        <Stack.Screen name="PlayerDetail" component={PlayerDetailScreen} options={{ title: 'Estadísticas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
