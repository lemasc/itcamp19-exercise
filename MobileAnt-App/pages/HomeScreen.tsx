import { Button } from "react-native";
import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      style={{
        padding: 18,
      }}
    >
      <Text style={styles.headerTitle}>ITCamp To-Do Lists</Text>
      <View
        style={{
          borderRadius: 6,
          borderWidth: 1,
          paddingHorizontal: 12,
          borderColor: "lightgray",
          backgroundColor: "white",
        }}
      >
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput style={styles.input} />
        <Text style={styles.inputLabel}>Detail</Text>
        <TextInput
          style={{ ...styles.input, height: 100 }}
          multiline
          numberOfLines={6}
        />
        <View style={{ paddingVertical: 15 }}>
          <Button
            title="Add"
            onPress={() => {
              console.log("ADD");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 12,
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
