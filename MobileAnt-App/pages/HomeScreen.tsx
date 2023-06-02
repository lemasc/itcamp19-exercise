import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import ToDoItem, { ToDo } from "../components/ToDoItem";
import { N } from "../navigation";
import Dialog from "react-native-dialog";

function HomeScreen({ navigation }: N<"HomePage">) {
  const [items, setItems] = useState<ToDo[]>([]);
  const [name, setName] = useState<string>();
  const [content, setContent] = useState<string>();

  // Dialog Zone
  const [selectedToDoId, setSelectedToDoId] = useState<ToDo["id"]>();
  const [selectedToDoName, setSelectedToDoName] = useState<ToDo["name"]>();
  const [selectedToDoContent, setSelectedToDoContent] =
    useState<ToDo["content"]>();
  const [showDetailDialog, setShowDetailDialog] = useState(false);

  const getNewToDoId = () => {
    while (true) {
      const newToDoId = Math.floor(Math.random() * 1000000).toString(10);
      if (!items.some((todo) => todo.id === newToDoId)) {
        return newToDoId;
      }
    }
  };

  const handleAddNewItem = () => {
    const newItem = {
      id: getNewToDoId(),
      name,
      content,
      createdAt: new Date(),
    };
    setItems((items) => [...items, newItem]);
    console.log(items);
  };

  function ToDoDetailDialog() {
    const [newName, setNewName] = useState<string>();
    const [newContent, setNewContent] = useState<string>();

    const handleUpdate = () => {
      const targetIndex = items.findIndex((item) => item.id === selectedToDoId);
      let tempItems = [...items];
      let targetItem = tempItems[targetIndex];
      targetItem.name = newName || selectedToDoName;
      targetItem.content = newContent || selectedToDoContent;
      tempItems[targetIndex] = targetItem;

      /*
      const updatedItems = items.map((todo) => {
        console.log(todo.id, selectedToDoId);
        if (todo.id === selectedToDoId) {
          const updated = { ...todo };
          updated.name = newName || selectedToDoName;
          updated.content = newContent || selectedToDoContent;
          return updated;
        }
        return todo;
      });*/
      setShowDetailDialog(false);
      setItems(tempItems);
    };

    const handleDelete = () => {
      setItems((items) => items.filter((item) => item.id !== selectedToDoId));
      setSelectedToDoId(undefined);
      setSelectedToDoName(undefined);
      setSelectedToDoContent(undefined);
      setShowDetailDialog(false);
    };

    return (
      <Dialog.Container visible={showDetailDialog}>
        <Dialog.Title>My ToDo Details</Dialog.Title>
        <Dialog.Description>Update or delete this todo?</Dialog.Description>
        <Dialog.Input
          placeholder={selectedToDoName}
          onChangeText={setNewName}
        />
        <Dialog.Input
          placeholder={selectedToDoContent}
          onChangeText={setNewContent}
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => setShowDetailDialog(false)}
        />
        <Dialog.Button label="Update" onPress={handleUpdate} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    );
  }

  return (
    <ScrollView style={{ padding: 18 }}>
      <ToDoDetailDialog />
      <View>
        <Text style={styles.headerTitle}>ITCamp To-Do Lists</Text>

        <View
          style={{
            borderRadius: 6,
            borderWidth: 1,
            marginTop: 12,
            paddingHorizontal: 12,
            borderColor: "lightgray",
            backgroundColor: "white",
          }}
        >
          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.inputLabel}>Content</Text>
          <TextInput
            style={{ ...styles.textInput, height: 100 }}
            multiline={true}
            numberOfLines={6}
            value={content}
            onChangeText={setContent}
          />

          <View style={{ padding: 12 }}>
            <Button title="Create a new to-do" onPress={handleAddNewItem} />
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 5, paddingVertical: 20 }}>
        <Text style={styles.headerTitle}>To-Do Items</Text>
        <View
          style={{
            marginVertical: 10,
          }}
        >
          {items.map((toDo) => (
            <View
              key={toDo.id}
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Pressable
                android_ripple={{ color: "lightgray" }}
                onPress={() => {
                  setSelectedToDoId(toDo.id);
                  setSelectedToDoName(toDo.name);
                  setSelectedToDoContent(toDo.content);
                  setShowDetailDialog(true);
                }}
              >
                <ToDoItem {...toDo} />
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
  },
  inputLabel: {
    padding: 12,
    paddingBottom: 0,
  },
});

export default HomeScreen;
