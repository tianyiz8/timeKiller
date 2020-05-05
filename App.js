import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import GuessNumber from './GuessNumber'
import TimerComponent from './TimerComponent'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Number" component={GuessNumber} />
        <Stack.Screen name="Reaction" component={TimerComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
