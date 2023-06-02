import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";
import RegisterScreen from "./pages/RegisterScreen";
import { RootStackParamList } from "./navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ title: "Login | MobileAnt App" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Register | MobileAnt App" }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomeScreen}
          options={{ title: "Home | MobileAnt App", headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
