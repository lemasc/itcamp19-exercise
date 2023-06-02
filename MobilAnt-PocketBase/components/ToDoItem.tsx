import React from "react";
import { View, Text } from "react-native";

function ToDoItem({ id, name, content, createdAt }) {
    return (
        <View style={{ borderBottomWidth: 0.5, paddingVertical: 6 }}>
            <View style={{ padding: 6 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", margin: 2 }}>{name}</Text>
                <Text style={{ fontSize: 16, margin: 2 }}>{content}</Text>
                <Text style={{ margin: 2 }}>{createdAt}</Text>
            </View>
        </View>
    )
}

export default ToDoItem;