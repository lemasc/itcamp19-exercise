import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomePage' component={HomeScreen} options={{ title: "Home | MobileAnt App", headerBackVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

