import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { N } from "../navigation";

function RegisterScreen({ navigation }: N<"Register">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 18, flex: 1, justifyContent: "center" }}>
      <View>
        <Text style={styles.headerTitle}>Register</Text>

        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Please input your username"
          onChangeText={setUsername}
          value={username}
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Please input your password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <View style={{ padding: 12 }}>
          <Button title="Register" />
        </View>

        <Text
          style={{ marginTop: 6, textAlign: "center" }}
          onPress={() => navigation.navigate("Home")}
        >
          Go back to Login Page
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    fontSize: 24,
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

export default RegisterScreen;
