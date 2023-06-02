import React from "react";
import { View, Text } from "react-native";

export type ToDo = {
  id: string;
  name: string;
  content: string;
  created: string;
};

function ToDoItem({ id, name, content, created }: ToDo) {
  return (
    <View style={{ borderBottomWidth: 0.5, paddingVertical: 6 }}>
      <View style={{ padding: 6 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 2 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 16, margin: 2 }}>{content}</Text>
        <Text style={{ margin: 2 }}>{created}</Text>
      </View>
    </View>
  );
}

export default ToDoItem;
