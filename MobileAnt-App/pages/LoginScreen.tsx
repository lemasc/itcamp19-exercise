import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
import { N } from "../navigation";
import users from "../users";

function LoginScreen({ navigation }: N<"Home">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("", "Username or Password must not be empty");
      return;
    }
    const loginResult = users.filter(
      (user) => user.username === username && user.password === password
    );

    if (loginResult.length > 0) {
      navigation.navigate("HomePage");
    } else {
      Alert.alert("", "Username or Password is incorrect. Please login again!");
    }
  };

  useEffect(() => {
    Alert.alert(
      "MobileAnt App",
      "Welcome to MobileAnt App, please login to continue !"
    );
  }, []);

  const handleRegisterTextPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={{ padding: 18, flex: 1, justifyContent: "center" }}>
      <View>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          }}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginBottom: 18,
          }}
          resizeMode={"contain"}
        />

        <Text style={styles.headerTitle}>IT Camp 19 | MobileAnt</Text>
        <Text style={styles.headerTitle}>Login / Register</Text>

        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Please input your username"
          onChangeText={setUsername}
          value={username}
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Please input your password"
          onChangeText={setPassword}
          value={password}
          style={styles.textInput}
          secureTextEntry
        />

        <View style={{ padding: 12 }}>
          <Button title="LOGIN" onPress={handleLogin} />
        </View>

        <Text
          style={{ marginTop: 6, textAlign: "center" }}
          onPress={handleRegisterTextPress}
        >
          Click here to register
        </Text>
      </View>
      <StatusBar style="auto" />
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

export default LoginScreen;
