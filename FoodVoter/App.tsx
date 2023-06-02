import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import AdminScreen from "./pages/AdminScreen";
import { FoodProvider } from "./context/FoodContext";
import AddScreen from "./pages/AddScreen";
import DeleteScreen from "./pages/DeleteScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FoodProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Admin"
            component={AdminScreen}
            options={{ title: "Admin" }}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{ title: "Add" }}
          />
          <Stack.Screen
            name="Delete"
            component={DeleteScreen}
            options={{ title: "Delete" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FoodProvider>
  );
}
