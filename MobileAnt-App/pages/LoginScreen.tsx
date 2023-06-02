import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View
      style={{
        padding: 18,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        }}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
        resizeMode="contain"
      />
      <Text style={styles.headerTitle}>ITCAMP19 | MobileAnt</Text>
      <Text style={styles.headerTitle}>Login / Register</Text>
      <View>
        <Text style={styles.inputLabel}>Username: </Text>
        <TextInput
          placeholder="Please input your username"
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />
        <Text style={styles.inputLabel}>Password: </Text>
        <TextInput
          placeholder="Please input your password"
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Button
          title="LOGIN"
          onPress={() => {
            navigation.navigate("Home" as never);
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  inputLabel: {
    paddingVertical: 10,
  },
});
