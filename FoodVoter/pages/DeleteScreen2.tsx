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
import pb from "./../plugins/pocketbase";

function DeleteScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const [selectedTodoId, setSelectedToDoId] = useState("");
  const [selectedToDoName, setSelectedToDoName] = useState("");
  const [selectedToDoContent, setSelectedToDoContent] = useState("");
  const [showDetailDialog, setShowDetailDialog] = useState(false);

  useEffect(() => {
    getdaTa();
  }, []);

  const getdaTa = async () => {
    const data = await pb.collection("todo").getFullList();
    setItems(data);
  };

  const handleAddNewItem = async () => {
    const data = {
      name: name,
    };

    await pb.collection("todo").create(data);

    getdaTa();
    setName("");
    setContent("");

    Alert.alert("", "Menu is add successfully ");
    navigation.navigate("");
  };

  const handleAddAll = async () => {};

  const ToDoDetailDialog = () => {
    const [newName, setNewName] = useState("");
    const [newContent, setNewContent] = useState("");

    const handleUpdate = async () => {
      const data = {
        name: newName || selectedToDoName,
        // "content": newContent || selectedToDoContent
      };

      await pb.collection("todo").update(selectedTodoId, data);

      getdaTa();
      setShowDetailDialog(false);
    };

    const handleDelete = async () => {
      await pb.collection("todo").delete(selectedTodoId);

      Alert.alert("", "Menu is Delete successfully ");
      navigation.navigate("");

      getdaTa();
      setShowDetailDialog(false);
    };
    return (
      <Dialog.Container visible={showDetailDialog}>
        <Dialog.Title>Delete menu</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this menu ?
        </Dialog.Description>
        <Dialog.Button
          label="Nope"
          onPress={() => setShowDetailDialog(false)}
        />
        <Dialog.Button label="Sure" onPress={handleDelete} />
      </Dialog.Container>
    );
  };

  return (
    <ScrollView style={{ padding: 18 }}>
      <ToDoDetailDialog />

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

export default DeleteScreen;
