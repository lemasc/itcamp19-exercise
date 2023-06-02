import React, { useState } from "react";
import { Alert } from "react-native";
import { Food } from "../types/food";

export default function DeleteFood({ id }: Pick<Food, "id">) {
  const ToDoDetailDialog = () => {
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
    <>
      <Button title="Remove" onPress={on} />
    </>
  );
}
