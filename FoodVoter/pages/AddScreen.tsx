import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Dialog from "react-native-dialog";
import { useFoodData } from "../context/FoodContext";
import { createFood } from "../plugins/db";
import { N } from "../types/navigation";
import pb from "./../plugins/pocketbase";

function AddScreen({ navigation }: N<"Add">) {
  const { getData } = useFoodData();
  const [name, setName] = useState("");

  const handleAddNewItem = async () => {
    await createFood({ title: name });
    const data = {
      name: name,
    };

    getData();
    setName("");

    Alert.alert("", "Menu is add successfully ");
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={{ padding: 18 }}>
      <View>
        <Text style={styles.headerTitle}>Add Menu</Text>

        <View
          style={{
            borderRadius: 6,
            borderWidth: 1,
            marginTop: 12,
            backgroundColor: "white",
          }}
        >
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setName}
            value={name}
          />
          <View style={{ padding: 12 }}>
            <Button title="Create a new Menu" onPress={handleAddNewItem} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  inputLabel: {
    padding: 12,
    paddingBottom: 0,
  },
});

export default AddScreen;
