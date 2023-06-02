import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FoodList from "../components/FoodList";
import { styles } from "../constants/styles";
import { useFoodData } from "../context/FoodContext";
import { N } from "../types/navigation";

export default function HomeScreen({ navigation }: N<"Home">) {
  const { getData } = useFoodData();
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Vote Food !</Text>
      <View style={{ paddingVertical: 5, paddingTop: 15 }}>
        <Button
          title="Admin"
          onPress={() => {
            navigation.navigate("Admin");
          }}
        />
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Button
          title="Refresh"
          onPress={() => {
            getData();
          }}
        />
      </View>
      <FoodList />
    </View>
  );
}
