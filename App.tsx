/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AddNotes from './src/screens/AddNotes';
import ArchiveScreen from './src/screens/ArchiveScreen';
import DataScreen from './src/screens/DataScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screen import
//import HomeScreen from './src/screens/HomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import DataScreen1 from './src/screens/DataScreen2';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddNotes" component={AddNotes} />
        <Stack.Screen name="Archive" component={ArchiveScreen} />
        <Stack.Screen name="data1" component={DataScreen} />
        <Stack.Screen name="data2" component={DataScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
