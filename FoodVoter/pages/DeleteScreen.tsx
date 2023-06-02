import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FoodList from "../components/FoodList";
import { styles } from "../constants/styles";
import { useFoodData } from "../context/FoodContext";
import { N } from "../types/navigation";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Delete Food</Text>
      <FoodList remove />
    </View>
  );
}
