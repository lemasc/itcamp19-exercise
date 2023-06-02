import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import Dialog from "react-native-dialog";
import ToDoItem from '../components/ToDoItem';

function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const [selectedTodoId, setSelectedToDoId] = useState("");
  const [selectedToDoName, setSelectedToDoName] = useState("");
  const [selectedToDoContent, setSelectedToDoContent] = useState("");
  const [showDetailDialog, setShowDetailDialog] = useState(false);

  const handleAddNewItem = async () => {  
    setName("");
    setContent("");
  }

  const handleAddAll = async() => {
  }

  const ToDoDetailDialog = () => {
    const [newName, setNewName] = useState("");
    const [newContent, setNewContent] = useState("")

    const handleUpdate = async () => {
      setShowDetailDialog(false);
    }

    const handleDelete =  async () => {
      setShowDetailDialog(false);
    }

    return (
      <Dialog.Container visible={showDetailDialog}>
        <Dialog.Title>My ToDo Details</Dialog.Title>
        <Dialog.Description>Update or Delete this todo ?</Dialog.Description>
        <Dialog.Input placeholder={selectedToDoName} onChangeText={setNewName} />
        <Dialog.Input placeholder={selectedToDoContent} onChangeText={setNewContent} />
        <Dialog.Button label="Cancel" onPress={() => setShowDetailDialog(false)} />
        <Dialog.Button label="Update" onPress={handleUpdate} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
       </Dialog.Container>
    )
  }

  return (
    <ScrollView style={{ padding: 18 }}>

      <ToDoDetailDialog />

      <View>
        <Text style={styles.headerTitle}>ITCamp To-Do Lists</Text>

        <View style={{ borderRadius: 6, borderWidth: 1, marginTop: 12 }}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setName}
            value={name}
          />

          <Text style={styles.inputLabel}>Content</Text>
          <TextInput
            style={{ ...styles.textInput, height: 100 }}
            multiline={true}
            numberOfLines={6}
            onChangeText={setContent}
            value={content}
          />

          <View style={{ padding: 12 }}>
            <Button
              title='Create a new to-do'
              onPress={handleAddNewItem}
            />
          </View>
        </View>

        { items.map(({ id, name, content, createdAt}) => {
          return (
            <TouchableOpacity key={id} onPress={() => {
              setSelectedToDoId(id);
              setSelectedToDoName(name);
              setSelectedToDoContent(content)
              setShowDetailDialog(true)
            }}>
              <ToDoItem id={id} name={name} content={content} createdAt={createdAt} /> 
            </TouchableOpacity>
          )
        })}
      </View>
    </ScrollView>
  )
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

export default HomeScreen
