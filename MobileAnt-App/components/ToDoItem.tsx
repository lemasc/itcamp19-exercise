import React from "react";
import { View, Text } from "react-native";

export type ToDo = {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
};

function ToDoItem({ id, name, content, createdAt }: ToDo) {
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <View style={{ padding: 6 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 2 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 16, margin: 2 }}>{content}</Text>
        <Text style={{ margin: 2 }}>{createdAt.toLocaleString()}</Text>
      </View>
    </View>
  );
}

export default ToDoItem;
