import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { N } from "../navigation";

function HomeScreen({ navigation }: N<"HomePage">) {
  return (
    <ScrollView style={{ padding: 18 }}>
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
          <TextInput style={styles.textInput} />

          <Text style={styles.inputLabel}>Content</Text>
          <TextInput
            style={{ ...styles.textInput, height: 100 }}
            multiline={true}
            numberOfLines={6}
          />

          <View style={{ padding: 12 }}>
            <Button title="Create a new to-do" />
          </View>
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
