import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FoodList from "../components/FoodList";
import { styles } from "../constants/styles";
import { N } from "../types/navigation";

export default function AdminScreen({ navigation }: N<"Admin">) {
  return (
    <View style={styles.container}>
      <Button
        title="Add"
        onPress={() => {
          navigation.navigate("Add");
        }}
      />
    </View>
  );
}
